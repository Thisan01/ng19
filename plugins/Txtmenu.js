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

if (hrs < 12) wish = '*πΆπΎπΎπ³ πΌπΎππ½πΈπ½πΆβ*'
if (hrs >= 12 && hrs <= 17) wish = '*πΆπΎπΎπ³ π°π΅ππ΄ππ½πΎπΎπ½π*'
if (hrs >= 17 && hrs <= 19) wish = '*πΆπΎπΎπ³ π΄ππ΄π½πΈπ½πΆπ*'
if (hrs >= 19 && hrs <= 24) wish = '*πΆπΎπΎπ³ π½πΈπΆπ·ππ*'
    
    const rows = [
        {title: 'β¬ ALL MENU β¬', description: `β·β·β·β·β·β·\n\n\n
 β­ββββββββββββββββ
 βπ§ββοΈAΝΜΊsΝΜΊiΝΜΊaΝΜΊtΝΜΊaΝΜΊβ¬bΝΜΊoΝΜΊtΝΜΊπ§ββοΈ
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β ΰ·ΰ·ΰΆΊΰ·ΰΆΈΰ· β· ΰ·ΰ·ΰΆ±ΰ·ΰΆ©ΰ·ΰ·ΰ·
 β I Wish `+ wish + `
 β 
 βTimeβ` + time + `
 β
 β   Asiata Work as
 ββ€ `+Config.WORKTYPE+` β€
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β         ββΆBOTβΆβ
 β        ββββββββββ
 β
 ββ· .asiata
 ββ· .alive
 ββ· .asia [ advance menu ]
 ββ· .admin [ for owner ]
 ββ· .version
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       ββΆStickerβΆβ
 β
 ββ· .attp { text }
 ββ· .sticker
 ββ· .sticvid
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       ββΆUploderβΆβ
 β
 ββ· .uploadp [ reply a photo ]
 ββ· .uploadv [ reply a video ]
 β
 βUpload Your photo or video
 βto Telegraph & Give you link
 β 
 βwarn : you can upload less than 
 β       5mb source
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β ββΆText To ImgβΆβ
 β
 ββ· .rlpack
 ββ· .attppack
 ββ· .tlpack
 ββ· .ffpack
 ββ· .ttp { text }
 ββ· .dttp { text }
 ββ· .trumpsay { text }
 ββ· .changesay { text }
 ββ· .animesay { text }
 ββ· .meme { text }
 ββ· .carbon { text }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β  ββΆDownloaderβΆβ
 β
 ββ· .video { vid link }
 ββ· .vid2 { vid link }
 ββ· .down { status down }
 ββ· .song { song name }
 ββ· .fsong { song name }
 ββ· .play { song name }
 ββ· .img { name }
 ββ· .fb { link }
 ββ· .tiktok { link }
 ββ· .insta { link }
 ββ· .spotify { link }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β     ββΆGroupsβΆβ
 β
 ββ· .grp
 ββ· .rules
 ββ· .info
 ββ· .tagadmin
 ββ· .report
 ββ· .gname {change group n}
 ββ· .dis on { disapearing }
 ββ· .dis off { for owner }
 ββ· .warn1 [ for owner ]
 ββ· .warn2 [ for owner ]
 ββ· .warn3 [ for owner ]
 ββ· .warn4 [ for owner ]
 ββ· .tagall  [ for owner ]
 ββ· .ban [ for owner ]
 ββ· .add [ for owner ]
 ββ· .promote [ for owner ]
 ββ· .demote [ for owner ]
 ββ· .invite [ for owner ]
 ββ· .kickme [ for owner ]
 β
 β    use .admin Cmd for
 β      other commands
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 βββΆONLINE STOREβΆβ
 β
 ββ· .online store
 β 
 β β¬ ASIATA ONLINE β¬
 β     SHOPPING
 β
 β ONLY SRI LANKAN 
 β    VISITORS.
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β  ββΆFor ownerβΆβ
 β
 ββ· .name { change name }
 ββ· .pp { cha profilr pic}
 ββ· .bio { change bio }
 β
 β  Now you can change 
 β    your whatsapp 
 β name,profile pic,bio
 β      easy with
 β      ASIATA BOT
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β    ββΆSearchβΆβ
 β
 ββ· .yt { text }
 ββ· .spoti { text }
 ββ· .tk { name }
 ββ· .wiki { text }
 ββ· .movie { mov name }
 ββ· .github { name }
 ββ· .mod { app name }
 ββ· .weather { city }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 βββΆMedia EditorβΆβ
 β
 ββ· .xmedia
 ββ· .tblend
 ββ· .ocr
 ββ· .mp3 { vid to aud }
 ββ· .photo { stic to 4to }
 ββ· .ffmpeg { fade in:0:30 }
 ββ· .removebg
 ββ· .spdf
 ββ· .unaudio { mp3 to file }
 ββ· .unvoice { mp3 to voice }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β    ββΆRandomβΆβ
 β
 ββ· .quote
 ββ· .anime
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       πFunπ
 β
 ββ· .sl { hi }
 ββ· .gm
 ββ· .tgm
 ββ· .gn
 ββ· .tgn
 ββ· .tts { text }
 ββ· .ping [ for owner ]
 ββ· .antispam { text }
 β
 β°ββββββββββββββββ
 
 β­ββββββββββββββββ
 β      ββΆOtherβΆβ
 β
 ββ· .ss { link }
 ββ· .afk { bot is online }
 ββ· .short { link }
 ββ· .wame { get user link }
 ββ· .currency
 ββ· .trt { en si }
 ββ· .notes
 ββ· .save
 ββ· .deleteNotes
 ββ· .covid
 β°ββββββββββββββββ
 
         βͺβͺPOWERD BYβͺβͺ
    β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
  
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
if (hrs < 12) wish = '*πΆπΎπΎπ³ πΌπΎππ½πΈπ½πΆβ*'
if (hrs >= 12 && hrs <= 17) wish = '*πΆπΎπΎπ³ π°π΅ππ΄ππ½πΎπΎπ½π*'
if (hrs >= 17 && hrs <= 19) wish = '*πΆπΎπΎπ³ π΄ππ΄π½πΈπ½πΆπ*'
if (hrs >= 19 && hrs <= 24) wish = '*πΆπΎπΎπ³ π½πΈπΆπ·ππ*'
    
    const rows = [
        {title: 'β¬ ALL MENU β¬', description: `β·β·β·β·β·β·\n\n\n
 β­ββββββββββββββββ
 βπ§ββοΈAΝΜΊsΝΜΊiΝΜΊaΝΜΊtΝΜΊaΝΜΊβ¬bΝΜΊoΝΜΊtΝΜΊπ§ββοΈ
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β ΰ·ΰ·ΰΆΊΰ·ΰΆΈΰ· β· ΰ·ΰ·ΰΆ±ΰ·ΰΆ©ΰ·ΰ·ΰ·
 β I Wish `+ wish + `
 β 
 βTimeβ` + time + `
 β
 β   Asiata Work as
 ββ€ `+Config.WORKTYPE+` β€
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β         ββΆBOTβΆβ
 β        ββββββββββ
 β
 ββ· .asiata
 ββ· .alive
 ββ· .asia [ advance menu ]
 ββ· .admin [ for owner ]
 ββ· .version
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       ββΆStickerβΆβ
 β
 ββ· .attp { text }
 ββ· .sticker
 ββ· .sticvid
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       ββΆUploderβΆβ
 β
 ββ· .uploadp [ reply a photo ]
 ββ· .uploadv [ reply a video ]
 β
 βUpload Your photo or video
 βto Telegraph & Give you link
 β 
 βwarn : you can upload less than 
 β       5mb source
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β ββΆText To ImgβΆβ
 β
 ββ· .rlpack
 ββ· .attppack
 ββ· .tlpack
 ββ· .ffpack
 ββ· .ttp { text }
 ββ· .dttp { text }
 ββ· .trumpsay { text }
 ββ· .changesay { text }
 ββ· .animesay { text }
 ββ· .meme { text }
 ββ· .carbon { text }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β  ββΆDownloaderβΆβ
 β
 ββ· .video { vid link }
 ββ· .vid2 { vid link }
 ββ· .down { status down }
 ββ· .song { song name }
 ββ· .fsong { song name }
 ββ· .play { song name }
 ββ· .img { name }
 ββ· .fb { link }
 ββ· .tiktok { link }
 ββ· .insta { link }
 ββ· .spotify { link }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β     ββΆGroupsβΆβ
 β
 ββ· .grp
 ββ· .rules
 ββ· .info
 ββ· .tagadmin
 ββ· .report
 ββ· .gname {change group n}
 ββ· .dis on { disapearing }
 ββ· .dis off { for owner }
 ββ· .warn1 [ for owner ]
 ββ· .warn2 [ for owner ]
 ββ· .warn3 [ for owner ]
 ββ· .warn4 [ for owner ]
 ββ· .tagall  [ for owner ]
 ββ· .ban [ for owner ]
 ββ· .add [ for owner ]
 ββ· .promote [ for owner ]
 ββ· .demote [ for owner ]
 ββ· .invite [ for owner ]
 ββ· .kickme [ for owner ]
 β
 β    use .admin Cmd for
 β      other commands
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 βββΆONLINE STOREβΆβ
 β
 ββ· .online store
 β 
 β β¬ ASIATA ONLINE β¬
 β     SHOPPING
 β
 β ONLY SRI LANKAN 
 β    VISITORS.
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β  ββΆFor ownerβΆβ
 β
 ββ· .name { change name }
 ββ· .pp { cha profilr pic}
 ββ· .bio { change bio }
 β
 β  Now you can change 
 β    your whatsapp 
 β name,profile pic,bio
 β      easy with
 β      ASIATA BOT
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β    ββΆSearchβΆβ
 β
 ββ· .yt { text }
 ββ· .spoti { text }
 ββ· .tk { name }
 ββ· .wiki { text }
 ββ· .movie { mov name }
 ββ· .github { name }
 ββ· .mod { app name }
 ββ· .weather { city }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 βββΆMedia EditorβΆβ
 β
 ββ· .xmedia
 ββ· .tblend
 ββ· .ocr
 ββ· .mp3 { vid to aud }
 ββ· .photo { stic to 4to }
 ββ· .ffmpeg { fade in:0:30 }
 ββ· .removebg
 ββ· .spdf
 ββ· .unaudio { mp3 to file }
 ββ· .unvoice { mp3 to voice }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β    ββΆRandomβΆβ
 β
 ββ· .quote
 ββ· .anime
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       πFunπ
 β
 ββ· .sl { hi }
 ββ· .gm
 ββ· .tgm
 ββ· .gn
 ββ· .tgn
 ββ· .tts { text }
 ββ· .ping [ for owner ]
 ββ· .antispam { text }
 β
 β°ββββββββββββββββ
 
 β­ββββββββββββββββ
 β      ββΆOtherβΆβ
 β
 ββ· .ss { link }
 ββ· .afk { bot is online }
 ββ· .short { link }
 ββ· .wame { get user link }
 ββ· .currency
 ββ· .trt { en si }
 ββ· .notes
 ββ· .save
 ββ· .deleteNotes
 ββ· .covid
 β°ββββββββββββββββ
 
         βͺβͺPOWERD BYβͺβͺ
    β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
  
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
if (hrs < 12) wish = '*πΆπΎπΎπ³ πΌπΎππ½πΈπ½πΆβ*'
if (hrs >= 12 && hrs <= 17) wish = '*πΆπΎπΎπ³ π°π΅ππ΄ππ½πΎπΎπ½π*'
if (hrs >= 17 && hrs <= 19) wish = '*πΆπΎπΎπ³ π΄ππ΄π½πΈπ½πΆπ*'
if (hrs >= 19 && hrs <= 24) wish = '*πΆπΎπΎπ³ π½πΈπΆπ·ππ*'
    
    const rows = [
        {title: 'β¬ ALL MENU β¬', description: `β·β·β·β·β·β·\n\n\n
 β­ββββββββββββββββ
 βπ§ββοΈAΝΜΊsΝΜΊiΝΜΊaΝΜΊtΝΜΊaΝΜΊβ¬bΝΜΊoΝΜΊtΝΜΊπ§ββοΈ
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β ΰ·ΰ·ΰΆΊΰ·ΰΆΈΰ· β· ΰ·ΰ·ΰΆ±ΰ·ΰΆ©ΰ·ΰ·ΰ·
 β I Wish `+ wish + `
 β 
 βTimeβ` + time + `
 β
 β   Asiata Work as
 ββ€ `+Config.WORKTYPE+` β€
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β         ββΆBOTβΆβ
 β        ββββββββββ
 β
 ββ· .asiata
 ββ· .alive
 ββ· .asia [ advance menu ]
 ββ· .admin [ for owner ]
 ββ· .version
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       ββΆStickerβΆβ
 β
 ββ· .attp { text }
 ββ· .sticker
 ββ· .sticvid
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       ββΆUploderβΆβ
 β
 ββ· .uploadp [ reply a photo ]
 ββ· .uploadv [ reply a video ]
 β
 βUpload Your photo or video
 βto Telegraph & Give you link
 β 
 βwarn : you can upload less than 
 β       5mb source
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β ββΆText To ImgβΆβ
 β
 ββ· .rlpack
 ββ· .attppack
 ββ· .tlpack
 ββ· .ffpack
 ββ· .ttp { text }
 ββ· .dttp { text }
 ββ· .trumpsay { text }
 ββ· .changesay { text }
 ββ· .animesay { text }
 ββ· .meme { text }
 ββ· .carbon { text }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β  ββΆDownloaderβΆβ
 β
 ββ· .video { vid link }
 ββ· .vid2 { vid link }
 ββ· .down { status down }
 ββ· .song { song name }
 ββ· .fsong { song name }
 ββ· .play { song name }
 ββ· .img { name }
 ββ· .fb { link }
 ββ· .tiktok { link }
 ββ· .insta { link }
 ββ· .spotify { link }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β     ββΆGroupsβΆβ
 β
 ββ· .grp
 ββ· .rules
 ββ· .info
 ββ· .tagadmin
 ββ· .report
 ββ· .gname {change group n}
 ββ· .dis on { disapearing }
 ββ· .dis off { for owner }
 ββ· .warn1 [ for owner ]
 ββ· .warn2 [ for owner ]
 ββ· .warn3 [ for owner ]
 ββ· .warn4 [ for owner ]
 ββ· .tagall  [ for owner ]
 ββ· .ban [ for owner ]
 ββ· .add [ for owner ]
 ββ· .promote [ for owner ]
 ββ· .demote [ for owner ]
 ββ· .invite [ for owner ]
 ββ· .kickme [ for owner ]
 β
 β    use .admin Cmd for
 β      other commands
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 βββΆONLINE STOREβΆβ
 β
 ββ· .online store
 β 
 β β¬ ASIATA ONLINE β¬
 β     SHOPPING
 β
 β ONLY SRI LANKAN 
 β    VISITORS.
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β  ββΆFor ownerβΆβ
 β
 ββ· .name { change name }
 ββ· .pp { cha profilr pic}
 ββ· .bio { change bio }
 β
 β  Now you can change 
 β    your whatsapp 
 β name,profile pic,bio
 β      easy with
 β      ASIATA BOT
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β    ββΆSearchβΆβ
 β
 ββ· .yt { text }
 ββ· .spoti { text }
 ββ· .tk { name }
 ββ· .wiki { text }
 ββ· .movie { mov name }
 ββ· .github { name }
 ββ· .mod { app name }
 ββ· .weather { city }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 βββΆMedia EditorβΆβ
 β
 ββ· .xmedia
 ββ· .tblend
 ββ· .ocr
 ββ· .mp3 { vid to aud }
 ββ· .photo { stic to 4to }
 ββ· .ffmpeg { fade in:0:30 }
 ββ· .removebg
 ββ· .spdf
 ββ· .unaudio { mp3 to file }
 ββ· .unvoice { mp3 to voice }
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β    ββΆRandomβΆβ
 β
 ββ· .quote
 ββ· .anime
 β
 β°ββββββββββββββββ
 β­ββββββββββββββββ
 β       πFunπ
 β
 ββ· .sl { hi }
 ββ· .gm
 ββ· .tgm
 ββ· .gn
 ββ· .tgn
 ββ· .tts { text }
 ββ· .ping [ for owner ]
 ββ· .antispam { text }
 β
 β°ββββββββββββββββ
 
 β­ββββββββββββββββ
 β      ββΆOtherβΆβ
 β
 ββ· .ss { link }
 ββ· .afk { bot is online }
 ββ· .short { link }
 ββ· .wame { get user link }
 ββ· .currency
 ββ· .trt { en si }
 ββ· .notes
 ββ· .save
 ββ· .deleteNotes
 ββ· .covid
 β°ββββββββββββββββ
 
         βͺβͺPOWERD BYβͺβͺ
    β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
  
             Thisan         
 
`,quoted: message.data}) 
      
}

}));
}
