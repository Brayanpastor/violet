let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 PREMIUM 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ ❖ Limit Tak Terbatas
┃ ❖ Semua Fitur Terbuka
┃ ❖ Private Chat Bot
┃ ❖ Undang Bot Ke Group
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Mau Jadi Premium?
┃ 
┃ Harga Premium
┃ ❖ 5k/Bulan
┃
┃ Invite Bot Ke Group 
┃ ❖ 15k/Bulan
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ 
┃ Owner Akan Mengembalikan Sisa Premium
┃ Via Pulsa Apabila Bot Telah Berhenti Permanent
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Silahkan Hubungi Owner
┃ Untuk Menjadi Premium User
┃ 
┃ Untuk Pembayaran Silahkan 
┃ cek di #donasi
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^premium$/i
handler.group = false
handler.register = true

module.exports = handler