const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} kak *${pushname !== undefined ? pushname : 'No Detect Name'}* 👋

Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

❋─────────────────❋
Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
Sisa Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
Balance : $${toCommas(getBalance(sender, balance))}
❋─────────────────❋

_Ada Bug? Ketik ${prefix}report Bug mu_
${readmore}
*( 📍 )  Main Menu*
≻ ${prefix}menu
≻ ${prefix}owner
≻ ${prefix}donasi
≻ ${prefix}speed
≻ ${prefix}runtime
≻ ${prefix}cekprem
≻ ${prefix}listprem
≻ ${prefix}listban
≻ ${prefix}jo <Text>
≻ ${prefix}simi <Text>
≻ ${prefix}delete

*( ✏️ )  Converter/Tools*
≻ ${prefix}stiker <ReplyGambar/Caption>
≻ ${prefix}toimg <ReplyStiker>
≻ ${prefix}tovid <ReplyStiker>

*( ⌛ )  Downloader*
≻ ${prefix}play <Querry>
≻ ${prefix}youtube <LinkYt>
≻ ${prefix}tiktok <LinkTt>
≻ ${prefix}tiktokaudio <LinkTt>
≻ ${prefix}ytmp4 <LinkYt>
≻ ${prefix}ytmp3 <LinkYt>
≻ ${prefix}ytmp3vn <LinkYt>
≻ ${prefix}getvideo
≻ ${prefix}getmusic
≻ ${prefix}igv <Instagram Video/Reels>
≻ ${prefix}igf <Instagram Image>
≻ ${prefix}facebook <LinkFb>
≻ ${prefix}mediafire <LinkMediaFire>
  
*( ♻️ )  Random Menu*
≻ ${prefix}quotes
≻ ${prefix}gombalan
≻ ${prefix}katagalau
≻ ${prefix}cecan
≻ ${prefix}cogan
≻ ${prefix}naruto
≻ ${prefix}loli
≻ ${prefix}waifu
≻ ${prefix}husbu
≻ ${prefix}yaoi
  
*( ⚠️ )  Premium User*
≻ ${prefix}asupan
≻ ${prefix}xnxx link
≻ ${prefix}ahegao
≻ ${prefix}bloewjob
≻ ${prefix}hentai
≻ ${prefix}masturbation
≻ ${prefix}pussy
  
*( 🎨 )  Menu Maker*
≻ ${prefix}glitch <Text> <Text>
≻ ${prefix}flaming <Text>
≻ ${prefix}shadow <Text>
≻ ${prefix}wolftext <Text>
≻ ${prefix}cup <Text>
≻ ${prefix}cup2 <Text>
≻ ${prefix}romantic <Text>
≻ ${prefix}writetext <Text>
≻ ${prefix}lovetext <Text>
≻ ${prefix}lovetext2 <Text>
≻ ${prefix}undergrass <Text>
≻ ${prefix}coffecup <Text>
≻ ${prefix}woodheart <Text>
≻ ${prefix}tahta <Text>
≻ ${prefix}waifumaker <Text>
≻ ${prefix}lolimaker <Text>
≻ ${prefix}kanekimaker <Text>
≻ ${prefix}guramaker <Text>
≻ ${prefix}leaves <Text>
≻ ${prefix}pornhub <Text>
≻ ${prefix}3d <Text>
≻ ${prefix}christmas <Text>
≻ ${prefix}logowolf <Text>
≻ ${prefix}logowolf2 <Text>
  
*( 🪀 )  Menu Lain Nya*
≻ ${prefix}shortlink <Link>
≻ ${prefix}kbbi <Kata>
≻ ${prefix}faktaunik
≻ ${prefix}ppcp
≻ ${prefix}darkjokes
≻ ${prefix}meme
≻ ${prefix}covid19
≻ ${prefix}cerpen
≻ ${prefix}cersex
≻ ${prefix}wiki <Query>
≻ ${prefix}say <Text>
≻ ${prefix}qr <Text>
≻ ${prefix}readmore <Text>|<Text>
≻ ${prefix}hitungmundur 12 10 2022
≻ ${prefix}translate <from> <to>
≻ ${prefix}lirik <Judul>
≻ ${prefix}grupwa <Pencarian>
≻ ${prefix}ytsearch <Pencarian>
≻ ${prefix}pinterest <Querry>
≻ ${prefix}getpp
≻ ${prefix}kontak
  
*( 🅰️ )  Edit Vokal*
≻ ${prefix}halah
≻ ${prefix}hilih
≻ ${prefix}heleh
≻ ${prefix}huluh
≻ ${prefix}holoh
  
*( 🎮 )  Game & Fun Menu*
≻ ${prefix}tictactoe @tag
≻ ${prefix}delttc
≻ ${prefix}suit
≻ ${prefix}slot
≻ ${prefix}tebakgambar
≻ ${prefix}kuis
≻ ${prefix}tebakkimia
≻ ${prefix}tekateki
≻ ${prefix}tebakkata
≻ ${prefix}tebakbendera
≻ ${prefix}tebaklagu
≻ ${prefix}siapakahaku
≻ ${prefix}apakah <Query>
≻ ${prefix}kapankah <Query>
≻ ${prefix}rate <Query>
≻ ${prefix}gantecek <Nama>
≻ ${prefix}cantikcek <Nama>
≻ ${prefix}sangecek <Nama>
≻ ${prefix}gaycek <Nama>
≻ ${prefix}lesbicek <Nama>
≻ ${prefix}gimana <Query>
≻ ${prefix}bisakah <Query>
≻ ${prefix}cekme
≻ ${prefix}dadu
≻ ${prefix}truth
≻ ${prefix}dare
  
*( 🏦 )  Payment & Bank*
≻ ${prefix}buylimit <Jumlah>
≻ ${prefix}buyglimit <Jumlah>
≻ ${prefix}transfer @tag <jumlah>
≻ ${prefix}limit
≻ ${prefix}balance
≻ ${prefix}topbalance

*( 👥 )  Group Menu*
≻ ${prefix}linkgrup
≻ ${prefix}setppgrup
≻ ${prefix}setnamegc
≻ ${prefix}setdesc
≻ ${prefix}group <Open/Close>
≻ ${prefix}revoke
≻ ${prefix}hidetag <Text>
≻ ${prefix}tagall <Text>
≻ ${prefix}kick <@tag>
≻ ${prefix}add <@tag>
≻ ${prefix}promote <@tag>
≻ ${prefix}demote <@tag>
≻ ${prefix}infogc
≻ ${prefix}antilink enable/disable
≻ ${prefix}autoytdl on/off
  
*( 🧑🏻‍💻 )  Owner Menu*
> evalcode
x evalcode-2
$ executor
≻ ${prefix}sendvirtex
≻ ${prefix}setppbot
≻ ${prefix}exif
≻ ${prefix}textchat
≻ ${prefix}leave
≻ ${prefix}addprem
≻ ${prefix}delprem
≻ ${prefix}broadcast
≻ ${prefix}masuk
≻ ${prefix}ban
≻ ${prefix}unban
≻ ${prefix}block
≻ ${prefix}unblock
≻ ${prefix}setprefix multi/nopref

*${setting.botName}*
${readmore}
  *THANKS TO*
- Allah SWT
- Baileys-Md (Adiwa Jshing)
- @irfann._x (Iyan)
- @arsrfi.jpg (Arasya)
- M Hadi Firmansya (Hadi Api)
- @melcanz_ (Amel)
- @hardianto.xyz (Anto)`
}