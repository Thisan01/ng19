  
/* Copyright (C) 2021 Thisan01
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
THISAN - ASIATA 
අනේ ඉතින් මේකට ආවෙ හොදකට නම් නෙවෙයි නේද😒 කොපි රයිට් ගහල අහුවෙන්න එපා*/

const Asiata = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: Config.TIME })
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('_asiata');

if (Config.WORKTYPE == 'public') {

Asiata.addcommand({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {    
  
  let menu = new RegExp('MENU')
  
  if (menu.test(message.message)) {
    
    var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

o are memes.°
*🧚‍♂️ Command:* °.movie°if (hrs < 12) wish = '*𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶🌅*'
if (hrs >= 19 && hrs <= 24) wish = '*𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃🌟*'
    
    const rows = [
        {title: '☬ ALL MENU ☬', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │🧚‍♂️A̺͆s̺͆i̺͆a̺͆t̺͆a̺͆☬b̺͆o̺͆t̺͆🧚‍♂️
 ╰────────────────
 ╭────────────────
 │ හායිම් ▷ ෆෙන්ඩ්ස්
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   Asiata Work as
 │❤ `+Config.WORKTYPE+` ❤
 │
 ╰────────────────
 ╭────────────────
 │         ☚➶BOT➶☛
 │        ──────────
 │
 │▷ .asiata
 │▷ .alive
 │▷ .asia [ advance menu ]
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │       ☚➶Sticker➶☛
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │ ☚➶Text To Img➶☛
 │
 │▷ .rlpack
 │▷ .attppack
 │▷ .tlpack
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │  ☚➶Downloader➶☛
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │     ☚➶Groups➶☛
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │☚➶ONLINE STORE➶☛
 │
 │▷ .online store
 │ 
 │ ☬ ASIATA ONLINE ☬
 │     SHOPPING
 │
 │ ONLY SRI LANKAN 
 │    VISITORS.
 │
 ╰────────────────
 ╭────────────────
 │  ☚➶For owner➶☛
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      ASIATA BOT
 ╰────────────────
 ╭────────────────
 │    ☚➶Search➶☛
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .mod { app name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │☚➶Media Editor➶☛
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    ☚➶Random➶☛
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       😅Fun😉
 │
 │▷ .sl { hi }
 │▷ .gm
 │▷ .tgm
 │▷ .gn
 │▷ .tgn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      ☚➶Other➶☛
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 
         ✪✪POWERD BY✪✪
    ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
  
             Thisan         
` , rowId:"rowid1"},
        {title: '☬ ADVANCE MENU ☬', description:`▷▷▷▷▷▷\n\n\n
╔═══════════════════════╗
   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
═════════════════════════
*🧚‍♂️ Command:* °.xmedia°
*➢ Description:* °A plugin that have 25 media tools.°
*🧚‍♂️ Command:* °.admin°
*➢ Description:* °To get the admin command list°
*🧚‍♂️ Command:* °.asiata°
*➢ Description:*°all commands°
*🧚‍♂️ Command* °.rlpack°
*➢ Description:* ASIATA LOGO COLLECTION 01°
*🧚‍♂️ Command:* °.lovepack°
*➢ Description:* °Send Love message to gf/bf.°
*🧚‍♂️ Command;* °.grp°
*➢ Description:* °Send Groups list°
*🧚‍♂️ Command:* °.warn1,.warn2,.warn3,.warn4
*➢ Description:* °Send Group Warm msg. Admin only Command°
*🧚‍♂️ Command:* °.rules°
*➢ Description: * °Send Group Rules°
*🧚‍♂️ Command:* °.sl°
*➢ Description:* °Chat with AI bot.°
*🧚‍♂️ Command:* °.switch°
*➢ Description:* °Turn on/off chat bot.
⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)°
*🧚‍♂️ Command:* °.anime°
*➢ Description:* °Send Different type ANIME images . Different anime pictures give to you..°
*🧚‍♂️ Command:* °.antispam°
*➢ Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°
*🧚‍♂️ Command:* °.mp3°
*➢ Description:* °Convert mp4 into mp3.°
*🧚‍♂️ Command:* °.photo°
*➢ Description:* °Convert sticker into an image.°
*🧚‍♂️ Command:* °.ffmpeg°
*➢ Description:* °Apply ffmpeg filter to a video
⌨️ Example: .ffmpeg fade=in:0:30°
*🧚‍♂️ Command:* °.gn°
*➢ Description:* °Send Gn wish with image.°
*🧚‍♂️ Command:* °.gm°
*➢ Description:* °Send Gm wish with image.°
*🧚‍♂️ Command:* °.info°
*➢ Description:* °Show chat details°
*🧚‍♂️ Command:* °.covid°
*➢ Description:* °Check information about Covid-19 of countries.
Example : .covid Sri Lanka°
*🧚‍♂️ Command:* °.meme°
*➢ Description:* °The photos you replied t
*➢ Description:* °Movies informations take.°
*🧚‍♂️ Command:* °.notes°
*➢ Description:* °Show your notes.°
*🧚‍♂️ Command:* °.save°
*➢ Description:* °Reply *.save* to a message or type *.save <your_note>*°
*🧚‍♂️ Command:* °.deleteNotes°
*➢ Description:* °Clear your all notes.°
*🧚‍♂️ Command:* °.ocr°
*➢ Description:* °Scan your picture into text.°
*🧚‍♂️ Command:* °.removebg°
*➢ Description:* °Removing background of image.°
*🧚‍♂️ Command:* °.report°
*➢ Description:* °Report someone in the group to admins.°
*🧚‍♂️ Command:* °.fsong°
*➢ Description:* °Uploading file type songs.°
*🧚‍♂️ Command:* °.song°
*➢ Description:* °Uploading mp3 type songs.°
*🧚‍♂️ Command:* °.video°
*➢ Description:* °Downloading videos from YouTube°
*🧚‍♂️ Command:* °.insta°
*➢ Description:* Download instagram videos.°
*🧚‍♂️ Command:* °.fb°
*➢ Description:* Download Facebook videos.°
*🧚‍♂️ Command:* °.trt°
*➢ Description:* °It translates with Google Translator. You must mention any message.°
*⌨️ Example:* °.trt en si (From English to Sinhala)°
*🧚‍♂️ Command:* °.spdf°
*➢ Description:* °Converts a Site into PDF°
*🧚‍♂️ Command:* °.quote°
*➢ Description:* °It Sends Random Quote°
*🧚‍♂️ Command:* °.currency°
*➢ Description:* °To convert currencies.°
*🧚‍♂️ Command:* °.tts°
*➢ Description:* °It translates words into voice messages.°
*🧚‍♂️ Command:* °.yt°
*➢ Description:* °Searchng videos on YouTube.°
*🧚‍♂️ Command:* °.wiki°
*➢ Description:* °Search Wikipedia.°
*🧚‍♂️ Command:* °.img°
*➢ Description:* °Downloading google images.°
*🧚‍♂️ Command:* °.wame°
*➢ Description:* °Get a link to the user chat.°
*🧚‍♂️ Command:* °.github°
*➢ Description:* °Stalk github profiles of given username.
⌨️ Example: .github Thisan01°
*🧚‍♂️ Command:* °.tk°
*➢ Description:* °Stalk tiktok profile to a given username.
⌨️ Example: .tK asiata°
*🧚‍♂️ Command:* °.ss°
*➢ Description:* °Take screenshot of given links°
*🧚‍♂️ Command:* °.mod°
*➢ Description:* °Search modded apk in Moddroid site.°
*🧚‍♂️ Command:* °.spoti°
*➢ Description:* °Search songs from spotify.°
*🧚‍♂️ Command:* °.animesay°
*➢ Description:* °Write text on anime girl s paper°
*🧚‍♂️ Command:* °.changesay°
*➢ Description:* °Weite chaged my mind themed memes°
*🧚‍♂️ Command:* °.trumpsay°
*➢ Description:* °Write text on Trump Twitter°
*🧚‍♂️ Command:* °.spotify°
*➢ Description:* °Download spotify songs.°
*🧚‍♂️ Command:* °.sticker°
*➢ Description:* °Make stickers to your images. Reply to an image.°
*🧚‍♂️ Command:* °.sticvid°
*➢ Description:* °Converts animated stickers to video.°
*🧚‍♂️ Command:* °.alive°
*➢ Description:* °Check bot online or not°
*🧚‍♂️ Command:* °.version°
*➢ Description:* °Check version of bot.°
*🧚‍♂️ Command:* °.tagadmin°
*➢ Description:* °Tag all group admins.°
*🧚‍♂️ Command:* °.tblend°
*➢ Description:* °Applies the selected TBlend effect to videos.°
*🧚‍♂️ Command:* °.carbon°
*➢ Description:* °Convert text into Carbon effect°
*🧚‍♂️ Command:* °.tgm°
*➢ Description:* °it sends good morning text message°
*🧚‍♂️ Command:* °.tgn°
*➢ Description:* °it sends good night text message°
*🧚‍♂️ Command:* °.ttp°
*➢ Description:* °Make text image°
*🧚‍♂️ Command:* °.attp°
*➢ Description:* °Make animated text stickers in Rainbow theme°
*🧚‍♂️ Command:* °.unaudio°
*➢ Description:* °Converts sound recording to an audio File.°
*🧚‍♂️ Command:* °.unvoice°
*➢ Description:* °Convert mp3 into a WA voice message°
*🧚‍♂️ Command:* °.vid2°
*➢ Description:* °Youtube Video Downloader V2 . Second option of yt vidio downloader... .°
*🧚‍♂️ Command:* °.weather°
*➢ Description:* °Check weather.°
*🧚‍♂️ Command:* °.speedtest°
*➢ Description:* °Check download and upload speed°
*🧚‍♂️ Command:* °.ping°
*➢ Description:* °Your ping.°
*🧚‍♂️ Command:* °.short°
*➢ Description:* °Shorten link.°
`, rowId:"rowid3"},
        {title: '☬ LOGO PACK 01 ☬', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║✖┋┋*ASIATA LOGO PACK 1*┋┋✖
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🧚‍♂️Cmd: *.phub*
╠══➢ ✔ Dec: *Send pornhub logo*
╠═➢ 🧚‍♂️ Ex: *.phub ASIATA*
║
╠═➢ 🧚‍♂️ Cmd: *.stone*
╠══➢ ✔ Dec: *Send stone like logo*
╠═➢ 🧚‍♂️Ex: *.stone ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glitch*
╠══➢ ✔ Dec: *Send glitch logo*
╠═➢ 🧚‍♂️ Ex: *.glitch ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.space*
╠══➢ ✔ Dec: *Send space logo*
╠═➢ 🧚‍♂️Ex: *.space ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.blood*
╠══➢ ✔ Dec: *Send blood hor logo*
╠═➢ 🧚‍♂️Ex: *.blood ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.blackpink*
╠══➢ ✔ Dec: *Send bpink logo*
╠═➢ 🧚‍♂️Ex: *.blackpink ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.wall*
╠══➢ ✔ Dec: *Send wall art logo*
╠═➢ 🧚‍♂️Ex: *.wall ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.coding*
╠══➢✔ Dec: *Send coding logo*
╠═➢ 🧚‍♂️ Ex: *.coding ASIATA*
║
╠═➢ 🧚‍♂️Cmd: .*.sand1*
╠══➢ ✔  Dec: *Send sand writting*
╠═➢ 🧚‍♂️ Ex: *.sand1 ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.sand2*
╠══➢ ✔ Dec: *Send sand writting*
╠═➢ 🧚‍♂️Ex: *.sand2 ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.sand3*
╠══➢ ✔ Dec: *Send sand writting*
╠═➢ 🧚‍♂️Ex: *.sand3 ASIATA *
║
╠═➢ 🧚‍♂️Cmd: *.beach*
╠══➢ ✔  Dec: *Send beach logo*
╠═➢ 🧚‍♂️Ex: *.beach ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.gradient*
╠══➢ ✔  Dec: *Send logo*
╠═➢ 🧚‍♂️ Ex: *.gradient ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.luxury*
╠══➢ ✔  Dec: *Send luxury logo*
╠═➢ 🧚‍♂️ Ex: *.luxury ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.sky*
╠══➢ ✔  Dec: *Send sky logo*
╠═➢ 🧚‍♂️ Ex: *.sky ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.winter*
╠══➢ ✔  Dec: *Send winter logo*
╠═➢ 🧚‍♂️ Ex: *.winter ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.christmas*
╠══➢ ✔  Dec: *Send xmas logo*
╠═➢ 🧚‍♂️ Ex: *.christmas ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.neon*
╠══➢ ✔  Dec: *Send neon logo*
╠═➢ 🧚‍♂️ Ex: *.neon ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.king*
╠══➢ ✔  Dec: *Send king logo*
╠═➢ 🧚‍♂️ Ex: *.king ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glue*
╠══➢ ✔  Dec: *Send Glue logo*
╠═➢ 🧚‍♂️ Ex: *.glue ASIATA*
║
║    ☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️
╚══════════════════════
`, rowId:"rowid4"},
        {title: '☬ FF PACK ☬', description:`▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
║         ✖┋┋FF PACK┋┋✖
║
╠═➢ 🧚‍♂️.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🧚‍♂️.ff10      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff11      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff12      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff13      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff14      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff15      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff16      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff17      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff18       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff19       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff20       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff21       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff22       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff23       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff24       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff25       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff26       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff27       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff28       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff29       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff30       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff31       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff32       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff33       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff34       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff35       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff36       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff37       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff38       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff39       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff41       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff42       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff43       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff44       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff45       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff46       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff47       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff48       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff49       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff50       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff51       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff52       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff53       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff54       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff55       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: THISAN 
║
║ `☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️
╚════════════════════
`, rowId:"rowid5"},
   {title: '☬ LOGO PACK 02 ☬', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║✖┋┋*ASIATA LOGO PACK 2*┋┋✖
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🧚‍♂️Cmd: *.wel*
╠══➢ ✔ Dec: *Send welcome logo*
╠═➢ 🧚‍♂️ Ex: *.wel ASIATA*
║
╠═➢ 🧚‍♂️ Cmd: *.bye*
╠══➢ ✔ Dec: *Send bye logo*
╠═➢ 🧚‍♂️Ex: *.bye ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.marvel*
╠══➢ ✔ Dec: *Send marve logo*
╠═➢ 🧚‍♂️ Ex: *.marvel ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.2marvel*
╠══➢ ✔ Dec: *Send marvel logo*
╠═➢ 🧚‍♂️Ex: *.2marvel ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.wolf*
╠══➢ ✔ Dec: *Send wolf logo*
╠═➢ 🧚‍♂️Ex: *.wolf ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.lava*
╠══➢ ✔ Dec: *Send lava logo*
╠═➢ 🧚‍♂️Ex: *.lava ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.xmas*
╠══➢ ✔ Dec: *Send xmas logo*
╠═➢ 🧚‍♂️Ex: *.xmas ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.round*
╠══➢✔ Dec: *Send round logo*
╠═➢ 🧚‍♂️ Ex: *.round { image url }*
║
╠═➢ 🧚‍♂️Cmd: .*.quot*
╠══➢ ✔  Dec: *Send quote logo*
╠═➢ 🧚‍♂️ Ex: *.quot ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.harta*
╠══➢ ✔ Dec: *Send harta logo*
╠═➢ 🧚‍♂️Ex: *.harta ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.1917*
╠══➢ ✔ Dec: *Send 1917 logo*
╠═➢ 🧚‍♂️Ex: *.1917 ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.minion*
╠══➢ ✔ Dec: *Send minion logo*
╠═➢ 🧚‍♂️Ex: *.minion ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.holo*
╠══➢ ✔  Dec: *Send holo logo*
╠═➢ 🧚‍♂️ Ex: *.holo ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.metalp*
╠══➢ ✔  Dec: *Send metalp logo*
╠═➢ 🧚‍♂️ Ex: *.metalp ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.avengers*
╠══➢ ✔  Dec: *Send avengers logo*
╠═➢ 🧚‍♂️ Ex: *.avengers ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.halloween*
╠══➢ ✔  Dec: *Send halloween logo*
╠═➢ 🧚‍♂️ Ex: *.halloween ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.horror*
╠══➢ ✔  Dec: *Send horror logo*
╠═➢ 🧚‍♂️ Ex: *.horror ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glossyc*
╠══➢ ✔  Dec: *Send glossy logo*
╠═➢ 🧚‍♂️ Ex: *.glossyc ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.deluxe*
╠══➢ ✔  Dec: *Send deluxe logo*
╠═➢ 🧚‍♂️ Ex: *.deluxe ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glossyb*
╠══➢ ✔  Dec: *Send glossy logo*
╠═➢ 🧚‍♂️ Ex: *.glossyb ASIATA *
║
╠═➢ 🧚‍♂️Cmd: *.joker*
╠══➢ ✔  Dec: *Send joker logo*
╠═➢ 🧚‍♂️ Ex: *.joker ASIATA*
║
║     ☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️
╚══════════════════════     
`, rowId:"rowid6"},
        {title: '☬ ATTP PACK ☬', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║     ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
║      ✖▰┋┋━ATTP PACK━┋┋▰✖
║
╠═➢ 🧚‍♂️.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🧚‍♂️.02attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.03attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.04attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.05attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.06attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.07attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.08attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.09attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.10attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.11attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.12attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.13attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.14attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.15attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.16attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.17attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.18attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.19attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.20attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.21attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.22attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.23attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.24attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.25attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.26attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.27attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.28attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.29attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.30attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.31attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.32attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.33attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.34attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.35attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.36attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.37attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.38attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.39attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.40attp       ❴your text❵
║send Text logo
║
║▷Creator: THISAN 
║
║ ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
╚═════════════════════╝
`, rowId:"rowid20"},
        {title: '☬ DOWNLOADER ☬', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │  ✖🧚‍♂️ Downloader 🧚‍♂️✖
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
`, rowId:"rowid9"},
        {title: '☬ ABOUT ASIATA BOT ☬', description:`▷▷▷▷▷▷\n\n\n
🧚‍♂️ Owner : Thisan 
🧚‍♂️ Bot             : ASIATA V 1.0.0 
🧚‍♂️ Language : Sinhala & English
🧚‍♂️ Sponcer Team : RAVANA TECH 
🧚‍♂️ Develop language : Node js
🧚‍♂️ Developer no : wa.me/+94766816809
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "☬ ASIATA Command Panel ☬", rows: rows}]
       
       const button = {
        buttonText: 'Click Me🌟',
        description: "☬ ASIATA ALL COMMAND ☬",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }
  
  }))
  
  }
else if (Config.WORKTYPE == 'private') {
  
  Asiata.addcommand({on: 'text', fromMe: true,  deleteCommand: false}, (async (message, match) => {    
  
  let menu = new RegExp('MENU')
  
  if (menu.test(message.message)) {
    
    var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶🌅*'
if (hrs >= 19 && hrs <= 24) wish = '*𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃🌟*'
    
    const rows = [
        {title: '☬ ALL MENU ☬', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │🧚‍♂️A̺͆s̺͆i̺͆a̺͆t̺͆a̺͆☬b̺͆o̺͆t̺͆🧚‍♂️
 ╰────────────────
 ╭────────────────
 │ හායිම් ▷ ෆෙන්ඩ්ස්
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   Asiata Work as
 │❤ `+Config.WORKTYPE+` ❤
 │
 ╰────────────────
 ╭────────────────
 │         ☚➶BOT➶☛
 │        ──────────
 │
 │▷ .asiata
 │▷ .alive
 │▷ .asia [ advance menu ]
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │       ☚➶Sticker➶☛
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │ ☚➶Text To Img➶☛
 │
 │▷ .rlpack
 │▷ .attppack
 │▷ .tlpack
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │  ☚➶Downloader➶☛
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │     ☚➶Groups➶☛
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │☚➶ONLINE STORE➶☛
 │
 │▷ .online store
 │ 
 │ ☬ ASIATA ONLINE ☬
 │     SHOPPING
 │
 │ ONLY SRI LANKAN 
 │    VISITORS.
 │
 ╰────────────────
 ╭────────────────
 │  ☚➶For owner➶☛
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      ASIATA BOT
 ╰────────────────
 ╭────────────────
 │    ☚➶Search➶☛
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .mod { app name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │☚➶Media Editor➶☛
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    ☚➶Random➶☛
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       😅Fun😉
 │
 │▷ .sl { hi }
 │▷ .gm
 │▷ .tgm
 │▷ .gn
 │▷ .tgn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      ☚➶Other➶☛
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 

         ✪✪POWERD BY✪✪
    ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
  
             Thisan         
` , rowId:"rowid1"},
        {title: '☬ ADVANCE MENU ☬', description:`▷▷▷▷▷▷\n\n\n
╔═══════════════════════╗
   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
═════════════════════════
*🧚‍♂️ Command:* °.xmedia°
*➢ Description:* °A plugin that have 25 media tools.°
*🧚‍♂️ Command:* °.admin°
*➢ Description:* °To get the admin command list°
*🧚‍♂️ Command:* °.asiata°
*➢ Description:*°all commands°
*🧚‍♂️ Command* °.rlpack°
*➢ Description:* ASIATA LOGO COLLECTION 01°
*🧚‍♂️ Command:* °.lovepack°
*➢ Description:* °Send Love message to gf/bf.°
*🧚‍♂️ Command;* °.grp°
*➢ Description:* °Send Groups list°
*🧚‍♂️ Command:* °.warn1,.warn2,.warn3,.warn4
*➢ Description:* °Send Group Warm msg. Admin only Command°
*🧚‍♂️ Command:* °.rules°
*➢ Description: * °Send Group Rules°
*🧚‍♂️ Command:* °.sl°
*➢ Description:* °Chat with AI bot.°
*🧚‍♂️ Command:* °.switch°
*➢ Description:* °Turn on/off chat bot.
⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)°
*🧚‍♂️ Command:* °.anime°
*➢ Description:* °Send Different type ANIME images . Different anime pictures give to you..°
*🧚‍♂️ Command:* °.antispam°
*➢ Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°
*🧚‍♂️ Command:* °.mp3°
*➢ Description:* °Convert mp4 into mp3.°
*🧚‍♂️ Command:* °.photo°
*➢ Description:* °Convert sticker into an image.°
*🧚‍♂️ Command:* °.ffmpeg°
*➢ Description:* °Apply ffmpeg filter to a video
⌨️ Example: .ffmpeg fade=in:0:30°
*🧚‍♂️ Command:* °.gn°
*➢ Description:* °Send Gn wish with image.°
*🧚‍♂️ Command:* °.gm°
*➢ Description:* °Send Gm wish with image.°
*🧚‍♂️ Command:* °.info°
*➢ Description:* °Show chat details°
*🧚‍♂️ Command:* °.covid°
*➢ Description:* °Check information about Covid-19 of countries.
Example : .covid Sri Lanka°
*🧚‍♂️ Command:* °.meme°
*➢ Description:* °The photos you replied to are memes.°
*🧚‍♂️ Command:* °.movie°
*➢ Description:* °Movies informations take.°
*🧚‍♂️ Command:* °.notes°
*➢ Description:* °Show your notes.°
*🧚‍♂️ Command:* °.save°
*➢ Description:* °Reply *.save* to a message or type *.save <your_note>*°
*🧚‍♂️ Command:* °.deleteNotes°
*➢ Description:* °Clear your all notes.°
*🧚‍♂️ Command:* °.ocr°
*➢ Description:* °Scan your picture into text.°
*🧚‍♂️ Command:* °.removebg°
*➢ Description:* °Removing background of image.°
*🧚‍♂️ Command:* °.report°
*➢ Description:* °Report someone in the group to admins.°
*🧚‍♂️ Command:* °.fsong°
*➢ Description:* °Uploading file type songs.°
*🧚‍♂️ Command:* °.song°
*➢ Description:* °Uploading mp3 type songs.°
*🧚‍♂️ Command:* °.video°
*➢ Description:* °Downloading videos from YouTube°
*🧚‍♂️ Command:* °.insta°
*➢ Description:* Download instagram videos.°
*🧚‍♂️ Command:* °.fb°
*➢ Description:* Download Facebook videos.°
*🧚‍♂️ Command:* °.trt°
*➢ Description:* °It translates with Google Translator. You must mention any message.°
*⌨️ Example:* °.trt en si (From English to Sinhala)°
*🧚‍♂️ Command:* °.spdf°
*➢ Description:* °Converts a Site into PDF°
*🧚‍♂️ Command:* °.quote°
*➢ Description:* °It Sends Random Quote°
*🧚‍♂️ Command:* °.currency°
*➢ Description:* °To convert currencies.°
*🧚‍♂️ Command:* °.tts°
*➢ Description:* °It translates words into voice messages.°
*🧚‍♂️ Command:* °.yt°
*➢ Description:* °Searchng videos on YouTube.°
*🧚‍♂️ Command:* °.wiki°
*➢ Description:* °Search Wikipedia.°
*🧚‍♂️ Command:* °.img°
*➢ Description:* °Downloading google images.°
*🧚‍♂️ Command:* °.wame°
*➢ Description:* °Get a link to the user chat.°
*🧚‍♂️ Command:* °.github°
*➢ Description:* °Stalk github profiles of given username.
⌨️ Example: .github Thisan01°
*🧚‍♂️ Command:* °.tk°
*➢ Description:* °Stalk tiktok profile to a given username.
⌨️ Example: .tK asiata°
*🧚‍♂️ Command:* °.ss°
*➢ Description:* °Take screenshot of given links°
*🧚‍♂️ Command:* °.mod°
*➢ Description:* °Search modded apk in Moddroid site.°
*🧚‍♂️ Command:* °.spoti°
*➢ Description:* °Search songs from spotify.°
*🧚‍♂️ Command:* °.animesay°
*➢ Description:* °Write text on anime girl s paper°
*🧚‍♂️ Command:* °.changesay°
*➢ Description:* °Weite chaged my mind themed memes°
*🧚‍♂️ Command:* °.trumpsay°
*➢ Description:* °Write text on Trump Twitter°
*🧚‍♂️ Command:* °.spotify°
*➢ Description:* °Download spotify songs.°
*🧚‍♂️ Command:* °.sticker°
*➢ Description:* °Make stickers to your images. Reply to an image.°
*🧚‍♂️ Command:* °.sticvid°
*➢ Description:* °Converts animated stickers to video.°
*🧚‍♂️ Command:* °.alive°
*➢ Description:* °Check bot online or not°
*🧚‍♂️ Command:* °.version°
*➢ Description:* °Check version of bot.°
*🧚‍♂️ Command:* °.tagadmin°
*➢ Description:* °Tag all group admins.°
*🧚‍♂️ Command:* °.tblend°
*➢ Description:* °Applies the selected TBlend effect to videos.°
*🧚‍♂️ Command:* °.carbon°
*➢ Description:* °Convert text into Carbon effect°
*🧚‍♂️ Command:* °.tgm°
*➢ Description:* °it sends good morning text message°
*🧚‍♂️ Command:* °.tgn°
*➢ Description:* °it sends good night text message°
*🧚‍♂️ Command:* °.ttp°
*➢ Description:* °Make text image°
*🧚‍♂️ Command:* °.attp°
*➢ Description:* °Make animated text stickers in Rainbow theme°
*🧚‍♂️ Command:* °.unaudio°
*➢ Description:* °Converts sound recording to an audio File.°
*🧚‍♂️ Command:* °.unvoice°
*➢ Description:* °Convert mp3 into a WA voice message°
*🧚‍♂️ Command:* °.vid2°
*➢ Description:* °Youtube Video Downloader V2 . Second option of yt vidio downloader... .°
*🧚‍♂️ Command:* °.weather°
*➢ Description:* °Check weather.°
*🧚‍♂️ Command:* °.speedtest°
*➢ Description:* °Check download and upload speed°
*🧚‍♂️ Command:* °.ping°
*➢ Description:* °Your ping.°
*🧚‍♂️ Command:* °.short°
*➢ Description:* °Shorten link.°
`, rowId:"rowid3"},
             {title: '☬ LOGO PACK 01 ☬', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║✖┋┋*ASIATA LOGO PACK 1*┋┋✖
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🧚‍♂️Cmd: *.phub*
╠══➢ ✔ Dec: *Send pornhub logo*
╠═➢ 🧚‍♂️ Ex: *.phub ASIATA*
║
╠═➢ 🧚‍♂️ Cmd: *.stone*
╠══➢ ✔ Dec: *Send stone like logo*
╠═➢ 🧚‍♂️Ex: *.stone ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glitch*
╠══➢ ✔ Dec: *Send glitch logo*
╠═➢ 🧚‍♂️ Ex: *.glitch ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.space*
╠══➢ ✔ Dec: *Send space logo*
╠═➢ 🧚‍♂️Ex: *.space ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.blood*
╠══➢ ✔ Dec: *Send blood hor logo*
╠═➢ 🧚‍♂️Ex: *.blood ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.blackpink*
╠══➢ ✔ Dec: *Send bpink logo*
╠═➢ 🧚‍♂️Ex: *.blackpink ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.wall*
╠══➢ ✔ Dec: *Send wall art logo*
╠═➢ 🧚‍♂️Ex: *.wall ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.coding*
╠══➢✔ Dec: *Send coding logo*
╠═➢ 🧚‍♂️ Ex: *.coding ASIATA*
║
╠═➢ 🧚‍♂️Cmd: .*.sand1*
╠══➢ ✔  Dec: *Send sand writting*
╠═➢ 🧚‍♂️ Ex: *.sand1 ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.sand2*
╠══➢ ✔ Dec: *Send sand writting*
╠═➢ 🧚‍♂️Ex: *.sand2 ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.sand3*
╠══➢ ✔ Dec: *Send sand writting*
╠═➢ 🧚‍♂️Ex: *.sand3 ASIATA *
║
╠═➢ 🧚‍♂️Cmd: *.beach*
╠══➢ ✔  Dec: *Send beach logo*
╠═➢ 🧚‍♂️Ex: *.beach ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.gradient*
╠══➢ ✔  Dec: *Send logo*
╠═➢ 🧚‍♂️ Ex: *.gradient ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.luxury*
╠══➢ ✔  Dec: *Send luxury logo*
╠═➢ 🧚‍♂️ Ex: *.luxury ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.sky*
╠══➢ ✔  Dec: *Send sky logo*
╠═➢ 🧚‍♂️ Ex: *.sky ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.winter*
╠══➢ ✔  Dec: *Send winter logo*
╠═➢ 🧚‍♂️ Ex: *.winter ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.christmas*
╠══➢ ✔  Dec: *Send xmas logo*
╠═➢ 🧚‍♂️ Ex: *.christmas ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.neon*
╠══➢ ✔  Dec: *Send neon logo*
╠═➢ 🧚‍♂️ Ex: *.neon ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.king*
╠══➢ ✔  Dec: *Send king logo*
╠═➢ 🧚‍♂️ Ex: *.king ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glue*
╠══➢ ✔  Dec: *Send Glue logo*
╠═➢ 🧚‍♂️ Ex: *.glue ASIATA*
║
║    ☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️
╚══════════════════════
`, rowId:"rowid4"},
        {title: '☬ FF PACK ┋', description:`▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
║         ✖┋┋FF PACK┋┋✖
║
╠═➢ 🧚‍♂️.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🧚‍♂️.ff10      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff11      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff12      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff13      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff14      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff15      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff16      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff17      ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff18       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff19       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff20       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff21       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff22       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff23       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff24       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff25       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff26       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff27       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff28       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff29       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff30       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff31       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff32       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff33       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff34       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff35       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff36       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff37       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff38       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff39       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff41       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff42       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff43       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff44       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff45       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff46       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff47       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff48       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff49       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff50       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff51       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff52       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff53       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff54       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff55       ❴your text❵
║send free fire logo
╠═➢ 🧚‍♂️.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: THISAN 
║
║ `☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️
╚═════════════════════╝
`, rowId:"rowid5"},
        {title: '☬ LOGO PACK 02 ☬', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║✖┋┋*ASIATA LOGO PACK 2*┋┋✖
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🧚‍♂️Cmd: *.wel*
╠══➢ ✔ Dec: *Send welcome logo*
╠═➢ 🧚‍♂️ Ex: *.wel ASIATA*
║
╠═➢ 🧚‍♂️ Cmd: *.bye*
╠══➢ ✔ Dec: *Send bye logo*
╠═➢ 🧚‍♂️Ex: *.bye ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.marvel*
╠══➢ ✔ Dec: *Send marve logo*
╠═➢ 🧚‍♂️ Ex: *.marvel ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.2marvel*
╠══➢ ✔ Dec: *Send marvel logo*
╠═➢ 🧚‍♂️Ex: *.2marvel ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.wolf*
╠══➢ ✔ Dec: *Send wolf logo*
╠═➢ 🧚‍♂️Ex: *.wolf ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.lava*
╠══➢ ✔ Dec: *Send lava logo*
╠═➢ 🧚‍♂️Ex: *.lava ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.xmas*
╠══➢ ✔ Dec: *Send xmas logo*
╠═➢ 🧚‍♂️Ex: *.xmas ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.round*
╠══➢✔ Dec: *Send round logo*
╠═➢ 🧚‍♂️ Ex: *.round { image url }*
║
╠═➢ 🧚‍♂️Cmd: .*.quot*
╠══➢ ✔  Dec: *Send quote logo*
╠═➢ 🧚‍♂️ Ex: *.quot ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.harta*
╠══➢ ✔ Dec: *Send harta logo*
╠═➢ 🧚‍♂️Ex: *.harta ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.1917*
╠══➢ ✔ Dec: *Send 1917 logo*
╠═➢ 🧚‍♂️Ex: *.1917 ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.minion*
╠══➢ ✔ Dec: *Send minion logo*
╠═➢ 🧚‍♂️Ex: *.minion ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.holo*
╠══➢ ✔  Dec: *Send holo logo*
╠═➢ 🧚‍♂️ Ex: *.holo ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.metalp*
╠══➢ ✔  Dec: *Send metalp logo*
╠═➢ 🧚‍♂️ Ex: *.metalp ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.avengers*
╠══➢ ✔  Dec: *Send avengers logo*
╠═➢ 🧚‍♂️ Ex: *.avengers ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.halloween*
╠══➢ ✔  Dec: *Send halloween logo*
╠═➢ 🧚‍♂️ Ex: *.halloween ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.horror*
╠══➢ ✔  Dec: *Send horror logo*
╠═➢ 🧚‍♂️ Ex: *.horror ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glossyc*
╠══➢ ✔  Dec: *Send glossy logo*
╠═➢ 🧚‍♂️ Ex: *.glossyc ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.deluxe*
╠══➢ ✔  Dec: *Send deluxe logo*
╠═➢ 🧚‍♂️ Ex: *.deluxe ASIATA*
║
╠═➢ 🧚‍♂️Cmd: *.glossyb*
╠══➢ ✔  Dec: *Send glossy logo*
╠═➢ 🧚‍♂️ Ex: *.glossyb ASIATA *
║
╠═➢ 🧚‍♂️Cmd: *.joker*
╠══➢ ✔  Dec: *Send joker logo*
╠═➢ 🧚‍♂️ Ex: *.joker ASIATA*
║
║     ☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️
╚══════════════════════
`, rowId:"rowid6"},
        {title: '☬ ATTP PACK ☬', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║     ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
║      ✖▰┋┋━ATTP PACK━┋┋▰✖
║
╠═➢ 🧚‍♂️.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🧚‍♂️.02attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.03attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.04attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.05attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.06attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.07attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.08attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.09attp      ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.10attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.11attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.12attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.13attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.14attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.15attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.16attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.17attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.18attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.19attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.20attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.21attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.22attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.23attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.24attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.25attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.26attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.27attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.28attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.29attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.30attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.31attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.32attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.33attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.34attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.35attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.36attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.37attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.38attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.39attp       ❴your text❵
║send Text logo
╠═➢ 🧚‍♂️.40attp       ❴your text❵
║send Text logo
║
║▷Creator: THISAN 
║
║ ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰
╚═════════════════════╝
`, rowId:"rowid20"},
        {title: '☬ DOWNLOADER ☬', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │  ✖🧚‍♂️ Downloader 🧚‍♂️✖
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
`, rowId:"rowid9"},
        {title: '☬ ABOUT ASIATA BOT ☬', description:`▷▷▷▷▷▷\n\n\n
🧚‍♂️ Owner : Thisan 
🧚‍♂️ Bot             : ASIATA V 1.0.0 
🧚‍♂️ Language : Sinhala & English
🧚‍♂️ Sponcer Team : RAVANA TECH 
🧚‍♂️ Develop language : Node js
🧚‍♂️ Developer no : wa.me/+94766816809
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "☬ ASIATA Command Panel ☬", rows: rows}]
       
       const button = {
        buttonText: 'Click Me🌟',
        description: "☬ ASIATA ALL COMMAND ☬",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }
  
  }))
  
  } 
