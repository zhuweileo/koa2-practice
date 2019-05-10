const fs = require('fs');
const path = require('path');

function walk(p){
  console.log(p,'walk');
  const files = fs.readdirSync(p);
  const fileList = [];
  const dirList = [];
  for(let file of files){
    const stat = fs.statSync(path.join(p,file))
    if(stat.isDirectory()) dirList.push(file)
    else fileList.push(file)
  }
  return dirList.concat(fileList)
}
// const list = walk(path.join(__dirname,'../../'))
// console.log(list);
module.exports = walk;
