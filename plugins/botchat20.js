let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/umu.webp'
conn.sendFile(m.chat, sticker, 'umu.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
 // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Umu/
handler.command = new RegExp
module.exports = handler
