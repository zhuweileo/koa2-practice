const Koa = require('koa');
const path = require('path')

const app = new Koa()

const staticPath = path.join(__dirname,'./static')

app.use((ctx) => {
  const pathArr = ctx.url.split('/')
  ctx.body = 'hello world'
})

app.listen('3000')