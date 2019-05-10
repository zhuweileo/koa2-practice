const path = require('path');
const fs = require('fs');
const walk = require('./walk')

function content(p,reqPath) {
  const extName = path.extname(p);
  
  if(extName){
    return fs.readFileSync(p)
  } else {
    const pathArr = walk(p);
    let html = '<ul>'
    pathArr.forEach((item) => {
      html += `<li><a href="${path.join(reqPath,item)}">${item}</a></li>`
    })
    html+= '<url>'

    return html;
  }
}

module.exports = content;