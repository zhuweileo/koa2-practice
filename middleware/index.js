const Koa = require('koa');

const app = new Koa();

app.use(async function(ctx,next){
  console.log(ctx.method,ctx.header,ctx.url);
  // await next()
})

app.use(function(ctx){
  ctx.body = `
    <h1>method:${ctx.method}</h1>
    <h1>url:${ctx.url}</h1>
    <h1>header:${JSON.stringify(ctx.header)}</h1>
  `
})
app.listen(3000);
console.log('app is listening port 3000');
