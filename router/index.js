const Koa = require('koa');
const app = new Koa();

function router(url){
  switch (url){
    case '/index':
    break
    case '/admin':
    break
    case '/userlist':
    break
    default:
  }
}

function render(fileName){

}

app.use((ctx) => {

})

app.listen(3000);
