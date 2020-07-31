const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSONString = dataBuffer.toString()
const user = JSON.parse(dataJSONString)

user.name = 'Liman'
user.age = 24

console.log(user)

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)