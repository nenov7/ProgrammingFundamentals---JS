function extractFile(path){

let text = path.split('\\');
let file = text.pop();

let lastComma = file.lastIndexOf('.');
let fileName = file.substring(0, lastComma);
let extension = file.substring(lastComma + 1)

console.log(`File name: ${fileName}`);
console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\template.bak.pptx')