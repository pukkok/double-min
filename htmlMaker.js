const fs = require('fs')

let titleName = "123123"
let rootId = "root"
let liTag = `<li>abcdefg</li>`

let head = 
`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titleName}</title>
</head>`

let body =
`<body>
  <div id="${rootId}">
  ${liTag}
  </div>
</body>`

const htmlTemplate = 
`<!DOCTYPE html>
<html lang="en">
${head}
${body}
</html>`

const extenderStrings = ["html", "txt", "css", "js"]

/** 
 * @param {string} fileName 
 * @param {string} extender 
 * @param {Array} checkers 
 * 
 * @description checkers배열을 통해 extenders가 checkers 배열안에 포함되는 
 * 확장자인지 확인합니다.
 */
function decisionFileName (fileName, extender, checkers) {

  const set = new Set(checkers)

  if(typeof(fileName) === 'string') {
    if(set.has(extender)){
      let result = fileName + "." + extender
      return JSON.parse(JSON.stringify(result))
    }
    // for(let item of checkers){
    //   if(extender === item){
    //     let result = fileName + "." + extender
    //     return JSON.parse(JSON.stringify(result))
    //   }
    // }
    console.error('확장자가 html이 아니야')
  } else {
    console.error('스트링이 아니야')
  }
}

fs.writeFile(
  decisionFileName('123', 'html', extenderStrings), htmlTemplate, "utf-8", (err) => {
  if(err) {
    return console.error('고장났어')
  }
})