const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  await m.reply(global.wait)
  try {
    let stonk = global.API('https://hardianto.xyz', '/api/not-stonk', {
    image: await conn.getProfilePicture(m.sender).catch(_ => ''),
    apikey: 'hardianto'})
    let stiker = await sticker(null, stonk, 'stonk', '@Kokoronationz × UNX')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  } catch (e) {
  m.reply('Conversion Failed')
  }
}
handler.help = ['notstonk']
handler.tags = ['expression']
handler.command = /^notstonk$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
