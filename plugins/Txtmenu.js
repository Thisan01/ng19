/* DEVELOPER Thisan01
Don't copy this I take action for you
Creater of Asiata 
*/


const Asiata = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: config.TIME })

if (config.WORKTYPE == 'public') {
  


asiata.addcommand({pattern: 'asiata', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

  if (config.BTN == 'txt') {
    
    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/751bab3a465bbe2500948.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: config.TIME }).split(' ')[1]

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
 
`,quoted: message.data}) 
    
}

}));

asiata.addcommand({pattern: 'asiata', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

  if (config.BTN == 'txt') {
    
    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/751bab3a465bbe2500948.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: config.TIME }).split(' ')[1]

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
 
`,quoted: message.data}) 

}
  
}));
    
}

  
  
else if (config.WORKTYPE == 'private' ) {
  
  
    asiata.addcommand({pattern: 'asiata', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {
      
    if (config.BTN == 'txt') {
    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/751bab3a465bbe2500948.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: config.TIME }).split(' ')[1]

    var wish = ''
     

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
 
`,quoted: message.data}) 
      
}

}));
}
