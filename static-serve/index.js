const Koa = require('koa');
const path = require('path');
const content = require('./utils/content');
const mimes = require('./utils/mimes')

const app = new Koa()
const staticPath = path.join(__dirname,'./static')

function parseMime(url) {
  let extName = path.extname(url);
  extname = extName ? extName.slice(1) : 'unknow';
  return mimes[extname]
}

app.use((ctx) => {
  const body = content(path.join(staticPath,ctx.url),ctx.url)
  const mime = parseMime(ctx.url);
  if(mime) ctx.type = mime;

  if ( mime && mime.indexOf('image/') >= 0 ) {
    // 如果是图片，则用node原生res，输出二进制数据
    ctx.res.writeHead(200)
    ctx.res.write(body, 'binary')
    ctx.res.end()
  } else {
    // 其他则输出文本
    ctx.body = body
  }

  
})

app.listen('3000')