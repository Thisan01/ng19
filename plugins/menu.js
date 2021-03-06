/* Copyright (C) 2021 Thisan01
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Thisan - Asiata 
*/

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
        
if (Config.BTN == 'btn') {

Asiata.addcommand({pattern: 'asiata', fromMe: false}, (async (message, match) => {
// ASIATA LISTβ€
        var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

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

` , rowId:"rowid1"},
        {title: 'β¬ ADVANCE MENU β¬', description:`β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββββ
   β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
βββββββββββββββββββββββββ
*π§ββοΈ Command:* Β°.xmediaΒ°
*β’ Description:* Β°A plugin that have 25 media tools.Β°
*π§ββοΈ Command:* Β°.adminΒ°
*β’ Description:* Β°To get the admin command listΒ°
*π§ββοΈ Command:* Β°.asiataΒ°
*β’ Description:*Β°all commandsΒ°
*π§ββοΈ Command* Β°.rlpackΒ°
*β’ Description:* ASIATA LOGO COLLECTION 01Β°
*π§ββοΈ Command:* Β°.lovepackΒ°
*β’ Description:* Β°Send Love message to gf/bf.Β°
*π§ββοΈ Command;* Β°.grpΒ°
*β’ Description:* Β°Send Groups listΒ°
*π§ββοΈ Command:* Β°.warn1,.warn2,.warn3,.warn4
*β’ Description:* Β°Send Group Warm msg. Admin only CommandΒ°
*π§ββοΈ Command:* Β°.rulesΒ°
*β’ Description: * Β°Send Group RulesΒ°
*π§ββοΈ Command:* Β°.slΒ°
*β’ Description:* Β°Chat with AI bot.Β°
*π§ββοΈ Command:* Β°.switchΒ°
*β’ Description:* Β°Turn on/off chat bot.
β¨οΈ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)Β°
*π§ββοΈ Command:* Β°.animeΒ°
*β’ Description:* Β°Send Different type ANIME images . Different anime pictures give to you..Β°
*π§ββοΈ Command:* Β°.antispamΒ°
*β’ Description:* Β°This command for any emergency situation about any kind of WhatsApp SPAM in GroupΒ°
*π§ββοΈ Command:* Β°.mp3Β°
*β’ Description:* Β°Convert mp4 into mp3.Β°
*π§ββοΈ Command:* Β°.photoΒ°
*β’ Description:* Β°Convert sticker into an image.Β°
*π§ββοΈ Command:* Β°.ffmpegΒ°
*β’ Description:* Β°Apply ffmpeg filter to a video
β¨οΈ Example: .ffmpeg fade=in:0:30Β°
*π§ββοΈ Command:* Β°.gnΒ°
*β’ Description:* Β°Send Gn wish with image.Β°
*π§ββοΈ Command:* Β°.gmΒ°
*β’ Description:* Β°Send Gm wish with image.Β°
*π§ββοΈ Command:* Β°.infoΒ°
*β’ Description:* Β°Show chat detailsΒ°
*π§ββοΈ Command:* Β°.covidΒ°
*β’ Description:* Β°Check information about Covid-19 of countries.
Example : .covid Sri LankaΒ°
*π§ββοΈ Command:* Β°.memeΒ°
*β’ Description:* Β°The photos you replied t
*β’ Description:* Β°Movies informations take.Β°
*π§ββοΈ Command:* Β°.notesΒ°
*β’ Description:* Β°Show your notes.Β°
*π§ββοΈ Command:* Β°.saveΒ°
*β’ Description:* Β°Reply *.save* to a message or type *.save <your_note>*Β°
*π§ββοΈ Command:* Β°.deleteNotesΒ°
*β’ Description:* Β°Clear your all notes.Β°
*π§ββοΈ Command:* Β°.ocrΒ°
*β’ Description:* Β°Scan your picture into text.Β°
*π§ββοΈ Command:* Β°.removebgΒ°
*β’ Description:* Β°Removing background of image.Β°
*π§ββοΈ Command:* Β°.reportΒ°
*β’ Description:* Β°Report someone in the group to admins.Β°
*π§ββοΈ Command:* Β°.fsongΒ°
*β’ Description:* Β°Uploading file type songs.Β°
*π§ββοΈ Command:* Β°.songΒ°
*β’ Description:* Β°Uploading mp3 type songs.Β°
*π§ββοΈ Command:* Β°.videoΒ°
*β’ Description:* Β°Downloading videos from YouTubeΒ°
*π§ββοΈ Command:* Β°.instaΒ°
*β’ Description:* Download instagram videos.Β°
*π§ββοΈ Command:* Β°.fbΒ°
*β’ Description:* Download Facebook videos.Β°
*π§ββοΈ Command:* Β°.trtΒ°
*β’ Description:* Β°It translates with Google Translator. You must mention any message.Β°
*β¨οΈ Example:* Β°.trt en si (From English to Sinhala)Β°
*π§ββοΈ Command:* Β°.spdfΒ°
*β’ Description:* Β°Converts a Site into PDFΒ°
*π§ββοΈ Command:* Β°.quoteΒ°
*β’ Description:* Β°It Sends Random QuoteΒ°
*π§ββοΈ Command:* Β°.currencyΒ°
*β’ Description:* Β°To convert currencies.Β°
*π§ββοΈ Command:* Β°.ttsΒ°
*β’ Description:* Β°It translates words into voice messages.Β°
*π§ββοΈ Command:* Β°.ytΒ°
*β’ Description:* Β°Searchng videos on YouTube.Β°
*π§ββοΈ Command:* Β°.wikiΒ°
*β’ Description:* Β°Search Wikipedia.Β°
*π§ββοΈ Command:* Β°.imgΒ°
*β’ Description:* Β°Downloading google images.Β°
*π§ββοΈ Command:* Β°.wameΒ°
*β’ Description:* Β°Get a link to the user chat.Β°
*π§ββοΈ Command:* Β°.githubΒ°
*β’ Description:* Β°Stalk github profiles of given username.
β¨οΈ Example: .github Thisan01Β°
*π§ββοΈ Command:* Β°.tkΒ°
*β’ Description:* Β°Stalk tiktok profile to a given username.
β¨οΈ Example: .tK asiataΒ°
*π§ββοΈ Command:* Β°.ssΒ°
*β’ Description:* Β°Take screenshot of given linksΒ°
*π§ββοΈ Command:* Β°.modΒ°
*β’ Description:* Β°Search modded apk in Moddroid site.Β°
*π§ββοΈ Command:* Β°.spotiΒ°
*β’ Description:* Β°Search songs from spotify.Β°
*π§ββοΈ Command:* Β°.animesayΒ°
*β’ Description:* Β°Write text on anime girl s paperΒ°
*π§ββοΈ Command:* Β°.changesayΒ°
*β’ Description:* Β°Weite chaged my mind themed memesΒ°
*π§ββοΈ Command:* Β°.trumpsayΒ°
*β’ Description:* Β°Write text on Trump TwitterΒ°
*π§ββοΈ Command:* Β°.spotifyΒ°
*β’ Description:* Β°Download spotify songs.Β°
*π§ββοΈ Command:* Β°.stickerΒ°
*β’ Description:* Β°Make stickers to your images. Reply to an image.Β°
*π§ββοΈ Command:* Β°.sticvidΒ°
*β’ Description:* Β°Converts animated stickers to video.Β°
*π§ββοΈ Command:* Β°.aliveΒ°
*β’ Description:* Β°Check bot online or notΒ°
*π§ββοΈ Command:* Β°.versionΒ°
*β’ Description:* Β°Check version of bot.Β°
*π§ββοΈ Command:* Β°.tagadminΒ°
*β’ Description:* Β°Tag all group admins.Β°
*π§ββοΈ Command:* Β°.tblendΒ°
*β’ Description:* Β°Applies the selected TBlend effect to videos.Β°
*π§ββοΈ Command:* Β°.carbonΒ°
*β’ Description:* Β°Convert text into Carbon effectΒ°
*π§ββοΈ Command:* Β°.agmΒ°
*β’ Description:* Β°it sends good morning text messageΒ°
*π§ββοΈ Command:* Β°.agnΒ°
*β’ Description:* Β°it sends good night text messageΒ°
*π§ββοΈ Command:* Β°.ttpΒ°
*β’ Description:* Β°Make text imageΒ°
*π§ββοΈ Command:* Β°.attpΒ°
*β’ Description:* Β°Make animated text stickers in Rainbow themeΒ°
*π§ββοΈ Command:* Β°.unaudioΒ°
*β’ Description:* Β°Converts sound recording to an audio File.Β°
*π§ββοΈ Command:* Β°.unvoiceΒ°
*β’ Description:* Β°Convert mp3 into a WA voice messageΒ°
*π§ββοΈ Command:* Β°.vid2Β°
*β’ Description:* Β°Youtube Video Downloader V2 . Second option of yt vidio downloader... .Β°
*π§ββοΈ Command:* Β°.weatherΒ°
*β’ Description:* Β°Check weather.Β°
*π§ββοΈ Command:* Β°.speedtestΒ°
*β’ Description:* Β°Check download and upload speedΒ°
*π§ββοΈ Command:* Β°.pingΒ°
*β’ Description:* Β°Your ping.Β°
*π§ββοΈ Command:* Β°.shortΒ°
*β’ Description:* Β°Shorten link.Β°
`, rowId:"rowid3"},
        {title: 'β¬ LOGO PACK 01 β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
ββββ*ASIATA LOGO PACK 1*βββ
β ββββββββββββββββββββββ
β
β   `+Config.CAPTION+`
β
β ββ’ π§ββοΈCmd: *.phub*
β βββ’ β Dec: *Send pornhub logo*
β ββ’ π§ββοΈ Ex: *.phub ASIATA*
β
β ββ’ π§ββοΈ Cmd: *.stone*
β βββ’ β Dec: *Send stone like logo*
β ββ’ π§ββοΈEx: *.stone ASIATA*
β
β ββ’ π§ββοΈCmd: *.glitch*
β βββ’ β Dec: *Send glitch logo*
β ββ’ π§ββοΈ Ex: *.glitch ASIATA*
β
β ββ’ π§ββοΈCmd: *.space*
β βββ’ β Dec: *Send space logo*
β ββ’ π§ββοΈEx: *.space ASIATA*
β
β ββ’ π§ββοΈCmd: *.blood*
β βββ’ β Dec: *Send blood hor logo*
β ββ’ π§ββοΈEx: *.blood ASIATA*
β
β ββ’ π§ββοΈCmd: *.blackpink*
β βββ’ β Dec: *Send bpink logo*
β ββ’ π§ββοΈEx: *.blackpink ASIATA*
β
β ββ’ π§ββοΈCmd: *.wall*
β βββ’ β Dec: *Send wall art logo*
β ββ’ π§ββοΈEx: *.wall ASIATA*
β
β ββ’ π§ββοΈCmd: *.coding*
β βββ’β Dec: *Send coding logo*
β ββ’ π§ββοΈ Ex: *.coding ASIATA*
β
β ββ’ π§ββοΈCmd: .*.sand1*
β βββ’ β  Dec: *Send sand writting*
β ββ’ π§ββοΈ Ex: *.sand1 ASIATA*
β
β ββ’ π§ββοΈCmd: *.sand2*
β βββ’ β Dec: *Send sand writting*
β ββ’ π§ββοΈEx: *.sand2 ASIATA*
β
β ββ’ π§ββοΈCmd: *.sand3*
β βββ’ β Dec: *Send sand writting*
β ββ’ π§ββοΈEx: *.sand3 ASIATA *
β
β ββ’ π§ββοΈCmd: *.beach*
β βββ’ β  Dec: *Send beach logo*
β ββ’ π§ββοΈEx: *.beach ASIATA*
β
β ββ’ π§ββοΈCmd: *.gradient*
β βββ’ β  Dec: *Send logo*
β ββ’ π§ββοΈ Ex: *.gradient ASIATA*
β
β ββ’ π§ββοΈCmd: *.luxury*
β βββ’ β  Dec: *Send luxury logo*
β ββ’ π§ββοΈ Ex: *.luxury ASIATA*
β
β ββ’ π§ββοΈCmd: *.sky*
β βββ’ β  Dec: *Send sky logo*
β ββ’ π§ββοΈ Ex: *.sky ASIATA*
β
β ββ’ π§ββοΈCmd: *.winter*
β βββ’ β  Dec: *Send winter logo*
β ββ’ π§ββοΈ Ex: *.winter ASIATA*
β
β ββ’ π§ββοΈCmd: *.christmas*
β βββ’ β  Dec: *Send xmas logo*
β ββ’ π§ββοΈ Ex: *.christmas ASIATA*
β
β ββ’ π§ββοΈCmd: *.neon*
β βββ’ β  Dec: *Send neon logo*
β ββ’ π§ββοΈ Ex: *.neon ASIATA*
β
β ββ’ π§ββοΈCmd: *.king*
β βββ’ β  Dec: *Send king logo*
β ββ’ π§ββοΈ Ex: *.king ASIATA*
β
β ββ’ π§ββοΈCmd: *.glue*
β βββ’ β  Dec: *Send Glue logo*
β ββ’ π§ββοΈ Ex: *.glue ASIATA*
β
β    β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββββ
`, rowId:"rowid4"},
        {title: 'β¬ FF PACK β¬', description:`β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
β      β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
β         βββFF PACKβββ
β
β ββ’ π§ββοΈ.ff9       β΄your textβ΅
βsend fiee fire logo
β ββ’ π§ββοΈ.ff10      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff11      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff12      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff13      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff14      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff15      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff16      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff17      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff18       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff19       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff20       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff21       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff22       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff23       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff24       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff25       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff26       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff27       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff28       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff29       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff30       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff31       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff32       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff33       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff34       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff35       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff36       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff37       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff38       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff39       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff40       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff40       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff41       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff42       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff43       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff44       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff45       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff46       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff47       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff48       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff49       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff50       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff51       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff52       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff53       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff54       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff55       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff56       β΄your textβ΅
βsend free fire logo
β
β
ββ·Creator: THISAN 
β
β `β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββ
`, rowId:"rowid5"},
   {title: 'β¬ LOGO PACK 02 β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
ββββ*ASIATA LOGO PACK 2*βββ
β ββββββββββββββββββββββ
β
β   `+Config.CAPTION+`
β
β ββ’ π§ββοΈCmd: *.wel*
β βββ’ β Dec: *Send welcome logo*
β ββ’ π§ββοΈ Ex: *.wel ASIATA*
β
β ββ’ π§ββοΈ Cmd: *.bye*
β βββ’ β Dec: *Send bye logo*
β ββ’ π§ββοΈEx: *.bye ASIATA*
β
β ββ’ π§ββοΈCmd: *.marvel*
β βββ’ β Dec: *Send marve logo*
β ββ’ π§ββοΈ Ex: *.marvel ASIATA*
β
β ββ’ π§ββοΈCmd: *.2marvel*
β βββ’ β Dec: *Send marvel logo*
β ββ’ π§ββοΈEx: *.2marvel ASIATA*
β
β ββ’ π§ββοΈCmd: *.wolf*
β βββ’ β Dec: *Send wolf logo*
β ββ’ π§ββοΈEx: *.wolf ASIATA*
β
β ββ’ π§ββοΈCmd: *.lava*
β βββ’ β Dec: *Send lava logo*
β ββ’ π§ββοΈEx: *.lava ASIATA*
β
β ββ’ π§ββοΈCmd: *.xmas*
β βββ’ β Dec: *Send xmas logo*
β ββ’ π§ββοΈEx: *.xmas ASIATA*
β
β ββ’ π§ββοΈCmd: *.round*
β βββ’β Dec: *Send round logo*
β ββ’ π§ββοΈ Ex: *.round { image url }*
β
β ββ’ π§ββοΈCmd: .*.quot*
β βββ’ β  Dec: *Send quote logo*
β ββ’ π§ββοΈ Ex: *.quot ASIATA*
β
β ββ’ π§ββοΈCmd: *.harta*
β βββ’ β Dec: *Send harta logo*
β ββ’ π§ββοΈEx: *.harta ASIATA*
β
β ββ’ π§ββοΈCmd: *.1917*
β βββ’ β Dec: *Send 1917 logo*
β ββ’ π§ββοΈEx: *.1917 ASIATA*
β
β ββ’ π§ββοΈCmd: *.minion*
β βββ’ β Dec: *Send minion logo*
β ββ’ π§ββοΈEx: *.minion ASIATA*
β
β ββ’ π§ββοΈCmd: *.holo*
β βββ’ β  Dec: *Send holo logo*
β ββ’ π§ββοΈ Ex: *.holo ASIATA*
β
β ββ’ π§ββοΈCmd: *.metalp*
β βββ’ β  Dec: *Send metalp logo*
β ββ’ π§ββοΈ Ex: *.metalp ASIATA*
β
β ββ’ π§ββοΈCmd: *.avengers*
β βββ’ β  Dec: *Send avengers logo*
β ββ’ π§ββοΈ Ex: *.avengers ASIATA*
β
β ββ’ π§ββοΈCmd: *.halloween*
β βββ’ β  Dec: *Send halloween logo*
β ββ’ π§ββοΈ Ex: *.halloween ASIATA*
β
β ββ’ π§ββοΈCmd: *.horror*
β βββ’ β  Dec: *Send horror logo*
β ββ’ π§ββοΈ Ex: *.horror ASIATA*
β
β ββ’ π§ββοΈCmd: *.glossyc*
β βββ’ β  Dec: *Send glossy logo*
β ββ’ π§ββοΈ Ex: *.glossyc ASIATA*
β
β ββ’ π§ββοΈCmd: *.deluxe*
β βββ’ β  Dec: *Send deluxe logo*
β ββ’ π§ββοΈ Ex: *.deluxe ASIATA*
β
β ββ’ π§ββοΈCmd: *.glossyb*
β βββ’ β  Dec: *Send glossy logo*
β ββ’ π§ββοΈ Ex: *.glossyb ASIATA *
β
β ββ’ π§ββοΈCmd: *.joker*
β βββ’ β  Dec: *Send joker logo*
β ββ’ π§ββοΈ Ex: *.joker ASIATA*
β
β     β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββββ     
`, rowId:"rowid6"},
        {title: 'β¬ ATTP PACK β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
β     β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
β      ββ°βββATTP PACKββββ°β
β
β ββ’ π§ββοΈ.01attp      β΄your textβ΅
βsend fiee fire logo
β ββ’ π§ββοΈ.02attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.03attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.04attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.05attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.06attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.07attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.08attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.09attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.10attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.11attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.12attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.13attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.14attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.15attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.16attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.17attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.18attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.19attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.20attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.21attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.22attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.23attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.24attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.25attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.26attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.27attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.28attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.29attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.30attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.31attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.32attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.33attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.34attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.35attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.36attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.37attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.38attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.39attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.40attp       β΄your textβ΅
βsend Text logo
β
ββ·Creator: THISAN 
β
β β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
βββββββββββββββββββββββ

`, rowId:"rowid20"},
        {title: 'β¬ DOWNLOADER β¬', description: `β·β·β·β·β·β·\n\n\n
 β­ββββββββββββββββ
 β  βπ§ββοΈ Downloader π§ββοΈβ
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
`, rowId:"rowid9"},
        {title: 'β¬ ABOUT ASIATA BOT β¬', description:`β·β·β·β·β·β·\n\n\n
π§ββοΈ Owner : Thisan 
π§ββοΈ Bot             : ASIATA V 1.0.0 
π§ββοΈ Language : Sinhala & English
π§ββοΈ Sponcer Team : RAVANA TECH 
π§ββοΈ Develop language : Node js
π§ββοΈ Developer no : wa.me/+94766816809
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "β¬ ASIATA Command Panel β¬", rows: rows}]
       
       const button = {
        buttonText: 'Click Meπ',
        description: "β¬ ASIATA ALL COMMAND β¬",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
        
    Asiata.addcommand({pattern: 'asiata', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
// ASIATA LISTβ€

var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

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
` , rowId:"rowid1"},
        {title: 'β¬ ADVANCE MENU β¬', description:`β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββββ
   β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
βββββββββββββββββββββββββ
*π§ββοΈ Command:* Β°.xmediaΒ°
*β’ Description:* Β°A plugin that have 25 media tools.Β°
*π§ββοΈ Command:* Β°.adminΒ°
*β’ Description:* Β°To get the admin command listΒ°
*π§ββοΈ Command:* Β°.asiataΒ°
*β’ Description:*Β°all commandsΒ°
*π§ββοΈ Command* Β°.rlpackΒ°
*β’ Description:* ASIATA LOGO COLLECTION 01Β°
*π§ββοΈ Command:* Β°.lovepackΒ°
*β’ Description:* Β°Send Love message to gf/bf.Β°
*π§ββοΈ Command;* Β°.grpΒ°
*β’ Description:* Β°Send Groups listΒ°
*π§ββοΈ Command:* Β°.warn1,.warn2,.warn3,.warn4
*β’ Description:* Β°Send Group Warm msg. Admin only CommandΒ°
*π§ββοΈ Command:* Β°.rulesΒ°
*β’ Description: * Β°Send Group RulesΒ°
*π§ββοΈ Command:* Β°.slΒ°
*β’ Description:* Β°Chat with AI bot.Β°
*π§ββοΈ Command:* Β°.switchΒ°
*β’ Description:* Β°Turn on/off chat bot.
β¨οΈ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)Β°
*π§ββοΈ Command:* Β°.animeΒ°
*β’ Description:* Β°Send Different type ANIME images . Different anime pictures give to you..Β°
*π§ββοΈ Command:* Β°.antispamΒ°
*β’ Description:* Β°This command for any emergency situation about any kind of WhatsApp SPAM in GroupΒ°
*π§ββοΈ Command:* Β°.mp3Β°
*β’ Description:* Β°Convert mp4 into mp3.Β°
*π§ββοΈ Command:* Β°.photoΒ°
*β’ Description:* Β°Convert sticker into an image.Β°
*π§ββοΈ Command:* Β°.ffmpegΒ°
*β’ Description:* Β°Apply ffmpeg filter to a video
β¨οΈ Example: .ffmpeg fade=in:0:30Β°
*π§ββοΈ Command:* Β°.gnΒ°
*β’ Description:* Β°Send Gn wish with image.Β°
*π§ββοΈ Command:* Β°.gmΒ°
*β’ Description:* Β°Send Gm wish with image.Β°
*π§ββοΈ Command:* Β°.infoΒ°
*β’ Description:* Β°Show chat detailsΒ°
*π§ββοΈ Command:* Β°.covidΒ°
*β’ Description:* Β°Check information about Covid-19 of countries.
Example : .covid Sri LankaΒ°
*π§ββοΈ Command:* Β°.memeΒ°
*β’ Description:* Β°The photos you replied t
*β’ Description:* Β°Movies informations take.Β°
*π§ββοΈ Command:* Β°.notesΒ°
*β’ Description:* Β°Show your notes.Β°
*π§ββοΈ Command:* Β°.saveΒ°
*β’ Description:* Β°Reply *.save* to a message or type *.save <your_note>*Β°
*π§ββοΈ Command:* Β°.deleteNotesΒ°
*β’ Description:* Β°Clear your all notes.Β°
*π§ββοΈ Command:* Β°.ocrΒ°
*β’ Description:* Β°Scan your picture into text.Β°
*π§ββοΈ Command:* Β°.removebgΒ°
*β’ Description:* Β°Removing background of image.Β°
*π§ββοΈ Command:* Β°.reportΒ°
*β’ Description:* Β°Report someone in the group to admins.Β°
*π§ββοΈ Command:* Β°.fsongΒ°
*β’ Description:* Β°Uploading file type songs.Β°
*π§ββοΈ Command:* Β°.songΒ°
*β’ Description:* Β°Uploading mp3 type songs.Β°
*π§ββοΈ Command:* Β°.videoΒ°
*β’ Description:* Β°Downloading videos from YouTubeΒ°
*π§ββοΈ Command:* Β°.instaΒ°
*β’ Description:* Download instagram videos.Β°
*π§ββοΈ Command:* Β°.fbΒ°
*β’ Description:* Download Facebook videos.Β°
*π§ββοΈ Command:* Β°.trtΒ°
*β’ Description:* Β°It translates with Google Translator. You must mention any message.Β°
*β¨οΈ Example:* Β°.trt en si (From English to Sinhala)Β°
*π§ββοΈ Command:* Β°.spdfΒ°
*β’ Description:* Β°Converts a Site into PDFΒ°
*π§ββοΈ Command:* Β°.quoteΒ°
*β’ Description:* Β°It Sends Random QuoteΒ°
*π§ββοΈ Command:* Β°.currencyΒ°
*β’ Description:* Β°To convert currencies.Β°
*π§ββοΈ Command:* Β°.ttsΒ°
*β’ Description:* Β°It translates words into voice messages.Β°
*π§ββοΈ Command:* Β°.ytΒ°
*β’ Description:* Β°Searchng videos on YouTube.Β°
*π§ββοΈ Command:* Β°.wikiΒ°
*β’ Description:* Β°Search Wikipedia.Β°
*π§ββοΈ Command:* Β°.imgΒ°
*β’ Description:* Β°Downloading google images.Β°
*π§ββοΈ Command:* Β°.wameΒ°
*β’ Description:* Β°Get a link to the user chat.Β°
*π§ββοΈ Command:* Β°.githubΒ°
*β’ Description:* Β°Stalk github profiles of given username.
β¨οΈ Example: .github Thisan01Β°
*π§ββοΈ Command:* Β°.tkΒ°
*β’ Description:* Β°Stalk tiktok profile to a given username.
β¨οΈ Example: .tK asiataΒ°
*π§ββοΈ Command:* Β°.ssΒ°
*β’ Description:* Β°Take screenshot of given linksΒ°
*π§ββοΈ Command:* Β°.modΒ°
*β’ Description:* Β°Search modded apk in Moddroid site.Β°
*π§ββοΈ Command:* Β°.spotiΒ°
*β’ Description:* Β°Search songs from spotify.Β°
*π§ββοΈ Command:* Β°.animesayΒ°
*β’ Description:* Β°Write text on anime girl s paperΒ°
*π§ββοΈ Command:* Β°.changesayΒ°
*β’ Description:* Β°Weite chaged my mind themed memesΒ°
*π§ββοΈ Command:* Β°.trumpsayΒ°
*β’ Description:* Β°Write text on Trump TwitterΒ°
*π§ββοΈ Command:* Β°.spotifyΒ°
*β’ Description:* Β°Download spotify songs.Β°
*π§ββοΈ Command:* Β°.stickerΒ°
*β’ Description:* Β°Make stickers to your images. Reply to an image.Β°
*π§ββοΈ Command:* Β°.sticvidΒ°
*β’ Description:* Β°Converts animated stickers to video.Β°
*π§ββοΈ Command:* Β°.aliveΒ°
*β’ Description:* Β°Check bot online or notΒ°
*π§ββοΈ Command:* Β°.versionΒ°
*β’ Description:* Β°Check version of bot.Β°
*π§ββοΈ Command:* Β°.tagadminΒ°
*β’ Description:* Β°Tag all group admins.Β°
*π§ββοΈ Command:* Β°.tblendΒ°
*β’ Description:* Β°Applies the selected TBlend effect to videos.Β°
*π§ββοΈ Command:* Β°.carbonΒ°
*β’ Description:* Β°Convert text into Carbon effectΒ°
*π§ββοΈ Command:* Β°.agmΒ°
*β’ Description:* Β°it sends good morning text messageΒ°
*π§ββοΈ Command:* Β°.agnΒ°
*β’ Description:* Β°it sends good night text messageΒ°
*π§ββοΈ Command:* Β°.ttpΒ°
*β’ Description:* Β°Make text imageΒ°
*π§ββοΈ Command:* Β°.attpΒ°
*β’ Description:* Β°Make animated text stickers in Rainbow themeΒ°
*π§ββοΈ Command:* Β°.unaudioΒ°
*β’ Description:* Β°Converts sound recording to an audio File.Β°
*π§ββοΈ Command:* Β°.unvoiceΒ°
*β’ Description:* Β°Convert mp3 into a WA voice messageΒ°
*π§ββοΈ Command:* Β°.vid2Β°
*β’ Description:* Β°Youtube Video Downloader V2 . Second option of yt vidio downloader... .Β°
*π§ββοΈ Command:* Β°.weatherΒ°
*β’ Description:* Β°Check weather.Β°
*π§ββοΈ Command:* Β°.speedtestΒ°
*β’ Description:* Β°Check download and upload speedΒ°
*π§ββοΈ Command:* Β°.pingΒ°
*β’ Description:* Β°Your ping.Β°
*π§ββοΈ Command:* Β°.shortΒ°
*β’ Description:* Β°Shorten link.Β°
`, rowId:"rowid3"},
        {title: 'β¬ LOGO PACK 01 β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
ββββ*ASIATA LOGO PACK 1*βββ
β ββββββββββββββββββββββ
β
β   `+Config.CAPTION+`
β
β ββ’ π§ββοΈCmd: *.phub*
β βββ’ β Dec: *Send pornhub logo*
β ββ’ π§ββοΈ Ex: *.phub ASIATA*
β
β ββ’ π§ββοΈ Cmd: *.stone*
β βββ’ β Dec: *Send stone like logo*
β ββ’ π§ββοΈEx: *.stone ASIATA*
β
β ββ’ π§ββοΈCmd: *.glitch*
β βββ’ β Dec: *Send glitch logo*
β ββ’ π§ββοΈ Ex: *.glitch ASIATA*
β
β ββ’ π§ββοΈCmd: *.space*
β βββ’ β Dec: *Send space logo*
β ββ’ π§ββοΈEx: *.space ASIATA*
β
β ββ’ π§ββοΈCmd: *.blood*
β βββ’ β Dec: *Send blood hor logo*
β ββ’ π§ββοΈEx: *.blood ASIATA*
β
β ββ’ π§ββοΈCmd: *.blackpink*
β βββ’ β Dec: *Send bpink logo*
β ββ’ π§ββοΈEx: *.blackpink ASIATA*
β
β ββ’ π§ββοΈCmd: *.wall*
β βββ’ β Dec: *Send wall art logo*
β ββ’ π§ββοΈEx: *.wall ASIATA*
β
β ββ’ π§ββοΈCmd: *.coding*
β βββ’β Dec: *Send coding logo*
β ββ’ π§ββοΈ Ex: *.coding ASIATA*
β
β ββ’ π§ββοΈCmd: .*.sand1*
β βββ’ β  Dec: *Send sand writting*
β ββ’ π§ββοΈ Ex: *.sand1 ASIATA*
β
β ββ’ π§ββοΈCmd: *.sand2*
β βββ’ β Dec: *Send sand writting*
β ββ’ π§ββοΈEx: *.sand2 ASIATA*
β
β ββ’ π§ββοΈCmd: *.sand3*
β βββ’ β Dec: *Send sand writting*
β ββ’ π§ββοΈEx: *.sand3 ASIATA *
β
β ββ’ π§ββοΈCmd: *.beach*
β βββ’ β  Dec: *Send beach logo*
β ββ’ π§ββοΈEx: *.beach ASIATA*
β
β ββ’ π§ββοΈCmd: *.gradient*
β βββ’ β  Dec: *Send logo*
β ββ’ π§ββοΈ Ex: *.gradient ASIATA*
β
β ββ’ π§ββοΈCmd: *.luxury*
β βββ’ β  Dec: *Send luxury logo*
β ββ’ π§ββοΈ Ex: *.luxury ASIATA*
β
β ββ’ π§ββοΈCmd: *.sky*
β βββ’ β  Dec: *Send sky logo*
β ββ’ π§ββοΈ Ex: *.sky ASIATA*
β
β ββ’ π§ββοΈCmd: *.winter*
β βββ’ β  Dec: *Send winter logo*
β ββ’ π§ββοΈ Ex: *.winter ASIATA*
β
β ββ’ π§ββοΈCmd: *.christmas*
β βββ’ β  Dec: *Send xmas logo*
β ββ’ π§ββοΈ Ex: *.christmas ASIATA*
β
β ββ’ π§ββοΈCmd: *.neon*
β βββ’ β  Dec: *Send neon logo*
β ββ’ π§ββοΈ Ex: *.neon ASIATA*
β
β ββ’ π§ββοΈCmd: *.king*
β βββ’ β  Dec: *Send king logo*
β ββ’ π§ββοΈ Ex: *.king ASIATA*
β
β ββ’ π§ββοΈCmd: *.glue*
β βββ’ β  Dec: *Send Glue logo*
β ββ’ π§ββοΈ Ex: *.glue ASIATA*
β
β    β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββββ
`, rowId:"rowid4"},
        {title: 'β¬ FF PACK β¬', description:`β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
β      β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
β         βββFF PACKβββ
β
β ββ’ π§ββοΈ.ff9       β΄your textβ΅
βsend fiee fire logo
β ββ’ π§ββοΈ.ff10      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff11      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff12      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff13      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff14      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff15      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff16      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff17      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff18       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff19       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff20       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff21       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff22       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff23       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff24       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff25       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff26       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff27       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff28       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff29       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff30       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff31       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff32       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff33       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff34       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff35       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff36       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff37       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff38       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff39       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff40       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff40       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff41       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff42       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff43       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff44       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff45       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff46       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff47       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff48       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff49       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff50       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff51       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff52       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff53       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff54       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff55       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff56       β΄your textβ΅
βsend free fire logo
β
β
ββ·Creator: THISAN 
β
β `β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββ
`, rowId:"rowid5"},
   {title: 'β¬ LOGO PACK 02 β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
ββββ*ASIATA LOGO PACK 2*βββ
β ββββββββββββββββββββββ
β
β   `+Config.CAPTION+`
β
β ββ’ π§ββοΈCmd: *.wel*
β βββ’ β Dec: *Send welcome logo*
β ββ’ π§ββοΈ Ex: *.wel ASIATA*
β
β ββ’ π§ββοΈ Cmd: *.bye*
β βββ’ β Dec: *Send bye logo*
β ββ’ π§ββοΈEx: *.bye ASIATA*
β
β ββ’ π§ββοΈCmd: *.marvel*
β βββ’ β Dec: *Send marve logo*
β ββ’ π§ββοΈ Ex: *.marvel ASIATA*
β
β ββ’ π§ββοΈCmd: *.2marvel*
β βββ’ β Dec: *Send marvel logo*
β ββ’ π§ββοΈEx: *.2marvel ASIATA*
β
β ββ’ π§ββοΈCmd: *.wolf*
β βββ’ β Dec: *Send wolf logo*
β ββ’ π§ββοΈEx: *.wolf ASIATA*
β
β ββ’ π§ββοΈCmd: *.lava*
β βββ’ β Dec: *Send lava logo*
β ββ’ π§ββοΈEx: *.lava ASIATA*
β
β ββ’ π§ββοΈCmd: *.xmas*
β βββ’ β Dec: *Send xmas logo*
β ββ’ π§ββοΈEx: *.xmas ASIATA*
β
β ββ’ π§ββοΈCmd: *.round*
β βββ’β Dec: *Send round logo*
β ββ’ π§ββοΈ Ex: *.round { image url }*
β
β ββ’ π§ββοΈCmd: .*.quot*
β βββ’ β  Dec: *Send quote logo*
β ββ’ π§ββοΈ Ex: *.quot ASIATA*
β
β ββ’ π§ββοΈCmd: *.harta*
β βββ’ β Dec: *Send harta logo*
β ββ’ π§ββοΈEx: *.harta ASIATA*
β
β ββ’ π§ββοΈCmd: *.1917*
β βββ’ β Dec: *Send 1917 logo*
β ββ’ π§ββοΈEx: *.1917 ASIATA*
β
β ββ’ π§ββοΈCmd: *.minion*
β βββ’ β Dec: *Send minion logo*
β ββ’ π§ββοΈEx: *.minion ASIATA*
β
β ββ’ π§ββοΈCmd: *.holo*
β βββ’ β  Dec: *Send holo logo*
β ββ’ π§ββοΈ Ex: *.holo ASIATA*
β
β ββ’ π§ββοΈCmd: *.metalp*
β βββ’ β  Dec: *Send metalp logo*
β ββ’ π§ββοΈ Ex: *.metalp ASIATA*
β
β ββ’ π§ββοΈCmd: *.avengers*
β βββ’ β  Dec: *Send avengers logo*
β ββ’ π§ββοΈ Ex: *.avengers ASIATA*
β
β ββ’ π§ββοΈCmd: *.halloween*
β βββ’ β  Dec: *Send halloween logo*
β ββ’ π§ββοΈ Ex: *.halloween ASIATA*
β
β ββ’ π§ββοΈCmd: *.horror*
β βββ’ β  Dec: *Send horror logo*
β ββ’ π§ββοΈ Ex: *.horror ASIATA*
β
β ββ’ π§ββοΈCmd: *.glossyc*
β βββ’ β  Dec: *Send glossy logo*
β ββ’ π§ββοΈ Ex: *.glossyc ASIATA*
β
β ββ’ π§ββοΈCmd: *.deluxe*
β βββ’ β  Dec: *Send deluxe logo*
β ββ’ π§ββοΈ Ex: *.deluxe ASIATA*
β
β ββ’ π§ββοΈCmd: *.glossyb*
β βββ’ β  Dec: *Send glossy logo*
β ββ’ π§ββοΈ Ex: *.glossyb ASIATA *
β
β ββ’ π§ββοΈCmd: *.joker*
β βββ’ β  Dec: *Send joker logo*
β ββ’ π§ββοΈ Ex: *.joker ASIATA*
β
β     β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββββ     
`, rowId:"rowid6"},
        {title: 'β¬ ATTP PACK β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
β     β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
β      ββ°βββATTP PACKββββ°β
β
β ββ’ π§ββοΈ.01attp      β΄your textβ΅
βsend fiee fire logo
β ββ’ π§ββοΈ.02attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.03attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.04attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.05attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.06attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.07attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.08attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.09attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.10attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.11attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.12attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.13attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.14attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.15attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.16attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.17attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.18attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.19attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.20attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.21attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.22attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.23attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.24attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.25attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.26attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.27attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.28attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.29attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.30attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.31attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.32attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.33attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.34attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.35attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.36attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.37attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.38attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.39attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.40attp       β΄your textβ΅
βsend Text logo
β
ββ·Creator: THISAN 
β
β β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
βββββββββββββββββββββββ
`, rowId:"rowid20"},
        {title: 'β¬ DOWNLOADER β¬', description: `β·β·β·β·β·β·\n\n\n
 β­ββββββββββββββββ
 β  βπ§ββοΈ Downloader π§ββοΈβ
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
`, rowId:"rowid9"},
        {title: 'β¬ ABOUT ASIATA BOT β¬', description:`β·β·β·β·β·β·\n\n\n
π§ββοΈ Owner : Thisan 
π§ββοΈ Bot             : ASIATA V 1.0.0 
π§ββοΈ Language : Sinhala & English
π§ββοΈ Sponcer Team : RAVANA TECH 
π§ββοΈ Develop language : Node js
π§ββοΈ Developer no : wa.me/+94766816809

`, rowId:"rowid9"},
        {title: 'π±π° ADMIN PANEL π±π°', description: `β·β·β·β·β·β·\n\n\n
β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°\n\nπ COMMAND: *.ban*\nβΉοΈ DESCRIPTION: Remove someone from the group. Mention the message or tag a person to use command.\n\nπ COMMAND: *.add*\nβΉοΈ DESCRIPTION: Adds someone to the group.\n\nπ COMMAND: *.mute*\nβΉοΈ DESCRIPTION: Mute group chat. Messages can only be sent by admin. \n\nπ COMMAND: *.unmute*\nβΉοΈ DESCRIPTION: Remove group chat mute. Anyone can send a message.\n\nπ COMMAND: *.clear*\nβΉοΈ DESCRIPTION: Clearing chat.\n\nπ COMMAND: *.name*\nβΉοΈ DESCRIPTION: Change group name. \n\nπ COMMAND: *.promote*\nβΉοΈ DESCRIPTION: Promoting members to admin.\n\nπ COMMAND: *.demote*\nβΉοΈ DESCRIPTION: Demoting admins.\n\nπ COMMAND: *.myplugin*\nβΉοΈ DESCRIPTION: To view the current plugin list from β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°.\n\nπ COMMAND: *.plug*\nβΉοΈ DESCRIPTION: Install external plugins.\n\nπ COMMAND: *.unplug*\nβΉοΈ DESCRIPTION: Removes the plugin.\n\nπ COMMAND: *.invite*\nβΉοΈ DESCRIPTION: Provides group invitation link.\n\nπ COMMAND: *.afk*\nβΉοΈ DESCRIPTION: It turns bot bot AFK - Away From Keyboard.\n\nπ COMMAND: *.restart*\nβ’ DESCRIPTION: Restart the bot.\n\nπ COMMAND: *.shutdown*\nβ’ DESCRIPTION: Shutdown the Bot.\n\nπ COMMAND: *.setvar*\nβ’ DESCRIPTION: Change heroku config vars.\n\nπ COMMAND: *.getvar*\nβ’ DESCRIPTION: Get heroku config var.\n\nπ COMMAND: *.speedtest*\nβ’ DESCRIPTION:Check download and upload speed.\n\nπ COMMAND: *.filter*\nβΉοΈ DESCRIPTION: It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.\n\nπ COMMAND: *.stop*\nβΉοΈ DESCRIPTION: Stops the filters you added earlier.\n\nπ COMMAND: *.welcome*\nβΉοΈ DESCRIPTION: It sets the welcome message.\n\nπ COMMAND: *.goodbye*\nβΉοΈ DESCRIPTION: Sets the goodbye  message.\n\nπ COMMAND: *.kickme*\nβΉοΈ DESCRIPTION: It removes the bot from the group that provided the command.\n\nπ COMMAND: *.pp*\nβΉοΈ DESCRIPTION: The photo you mention mentions the bot profile photo.\n\nπ COMMAND: *.block*\nβΉοΈ DESCRIPTION: Block tagged user.\n\nπ COMMAND: *.unblock*\nβΉοΈ DESCRIPTION: Unblock tagged user.\n\nπ COMMAND: *.jid*\nβΉοΈ DESCRIPTION: Giving user JID.\n\nπ COMMAND *.tagall*\nβΉοΈ DESCRIPTION: Tag everyone in group.\n\nπ COMMAND: *.up*\nβΉοΈ DESCRIPTION: Check for updates.\n\nπ COMMAND: *.upasiata*\nβΉοΈ DESCRIPTION: To update your bot.\n\nπ COMMAND: *.dyno*\nβΉοΈ DESCRIPTION: Showing heroku dyno hours.\n\nπ COMMAND: *.sysd*\nβΉοΈ DESCRIPTION: Show system properties.\n\nπ COMMAND: *.scam*\nβΉοΈ DESCRIPTION: Scam actions for 5min.\n\nπ COMMAND: *.antilink*\nβΉοΈ DESCRIPTION: Anti link on Ex: .antilink on/off\n\nπ COMMAND: *.antibad*\nβΉοΈ DESCRIPTION: Remove bad word users Ex: .antibad on/off\n\nπ COMMAND: *.chatbot*\nβΉοΈDESCRIPTION: Auto chat on Ex: .chatbot on/off\nβ Command: .voice on/off\nβ· Description: Activate and deactivate voice chat\n\nβ Command: .public β· Description: set bot as public\n\n β Command: .private\nβ· Description: Set your bot as private\n\n*β οΈ The above command only works for Admin, Bot and SUDO numbers.\n\nβ°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°*
`, rowId:"rowid10"},
        {title: 'π² Work Type PUBLIC π²', description: "β·β·β·β·β·β·\n\n\nType .public to public mode", rowId:"rowid9"},
        {title: 'π² Work Type PRIVATE π²', description:"β·β·β·β·β·β·\n\n\nType .private to private mode", rowId:"rowid2"}
       ]
       
       const sections = [{title: "π ASIATA Command Panel π", rows: rows}]
       
       const button = {
        buttonText: 'Click Meπ«',
        description: "π ASIATA COMMAND PANEL π",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage, {quoted: message.data })
    
    }));
        
}
}

else if (Config.WORKTYPE == 'private') {
        
if (Config.BTN == 'btn') {
        
Asiata.addcommand({pattern: 'asiata', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
// ASIATA LISTβ€

var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

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
` , rowId:"rowid1"},
        {title: 'β¬ ADVANCE MENU β¬', description:`β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββββ
   β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
βββββββββββββββββββββββββ
*π§ββοΈ Command:* Β°.xmediaΒ°
*β’ Description:* Β°A plugin that have 25 media tools.Β°
*π§ββοΈ Command:* Β°.adminΒ°
*β’ Description:* Β°To get the admin command listΒ°
*π§ββοΈ Command:* Β°.asiataΒ°
*β’ Description:*Β°all commandsΒ°
*π§ββοΈ Command* Β°.rlpackΒ°
*β’ Description:* ASIATA LOGO COLLECTION 01Β°
*π§ββοΈ Command:* Β°.lovepackΒ°
*β’ Description:* Β°Send Love message to gf/bf.Β°
*π§ββοΈ Command;* Β°.grpΒ°
*β’ Description:* Β°Send Groups listΒ°
*π§ββοΈ Command:* Β°.warn1,.warn2,.warn3,.warn4
*β’ Description:* Β°Send Group Warm msg. Admin only CommandΒ°
*π§ββοΈ Command:* Β°.rulesΒ°
*β’ Description: * Β°Send Group RulesΒ°
*π§ββοΈ Command:* Β°.slΒ°
*β’ Description:* Β°Chat with AI bot.Β°
*π§ββοΈ Command:* Β°.switchΒ°
*β’ Description:* Β°Turn on/off chat bot.
β¨οΈ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)Β°
*π§ββοΈ Command:* Β°.animeΒ°
*β’ Description:* Β°Send Different type ANIME images . Different anime pictures give to you..Β°
*π§ββοΈ Command:* Β°.antispamΒ°
*β’ Description:* Β°This command for any emergency situation about any kind of WhatsApp SPAM in GroupΒ°
*π§ββοΈ Command:* Β°.mp3Β°
*β’ Description:* Β°Convert mp4 into mp3.Β°
*π§ββοΈ Command:* Β°.photoΒ°
*β’ Description:* Β°Convert sticker into an image.Β°
*π§ββοΈ Command:* Β°.ffmpegΒ°
*β’ Description:* Β°Apply ffmpeg filter to a video
β¨οΈ Example: .ffmpeg fade=in:0:30Β°
*π§ββοΈ Command:* Β°.gnΒ°
*β’ Description:* Β°Send Gn wish with image.Β°
*π§ββοΈ Command:* Β°.gmΒ°
*β’ Description:* Β°Send Gm wish with image.Β°
*π§ββοΈ Command:* Β°.infoΒ°
*β’ Description:* Β°Show chat detailsΒ°
*π§ββοΈ Command:* Β°.covidΒ°
*β’ Description:* Β°Check information about Covid-19 of countries.
Example : .covid Sri LankaΒ°
*π§ββοΈ Command:* Β°.memeΒ°
*β’ Description:* Β°The photos you replied t
*β’ Description:* Β°Movies informations take.Β°
*π§ββοΈ Command:* Β°.notesΒ°
*β’ Description:* Β°Show your notes.Β°
*π§ββοΈ Command:* Β°.saveΒ°
*β’ Description:* Β°Reply *.save* to a message or type *.save <your_note>*Β°
*π§ββοΈ Command:* Β°.deleteNotesΒ°
*β’ Description:* Β°Clear your all notes.Β°
*π§ββοΈ Command:* Β°.ocrΒ°
*β’ Description:* Β°Scan your picture into text.Β°
*π§ββοΈ Command:* Β°.removebgΒ°
*β’ Description:* Β°Removing background of image.Β°
*π§ββοΈ Command:* Β°.reportΒ°
*β’ Description:* Β°Report someone in the group to admins.Β°
*π§ββοΈ Command:* Β°.fsongΒ°
*β’ Description:* Β°Uploading file type songs.Β°
*π§ββοΈ Command:* Β°.songΒ°
*β’ Description:* Β°Uploading mp3 type songs.Β°
*π§ββοΈ Command:* Β°.videoΒ°
*β’ Description:* Β°Downloading videos from YouTubeΒ°
*π§ββοΈ Command:* Β°.instaΒ°
*β’ Description:* Download instagram videos.Β°
*π§ββοΈ Command:* Β°.fbΒ°
*β’ Description:* Download Facebook videos.Β°
*π§ββοΈ Command:* Β°.trtΒ°
*β’ Description:* Β°It translates with Google Translator. You must mention any message.Β°
*β¨οΈ Example:* Β°.trt en si (From English to Sinhala)Β°
*π§ββοΈ Command:* Β°.spdfΒ°
*β’ Description:* Β°Converts a Site into PDFΒ°
*π§ββοΈ Command:* Β°.quoteΒ°
*β’ Description:* Β°It Sends Random QuoteΒ°
*π§ββοΈ Command:* Β°.currencyΒ°
*β’ Description:* Β°To convert currencies.Β°
*π§ββοΈ Command:* Β°.ttsΒ°
*β’ Description:* Β°It translates words into voice messages.Β°
*π§ββοΈ Command:* Β°.ytΒ°
*β’ Description:* Β°Searchng videos on YouTube.Β°
*π§ββοΈ Command:* Β°.wikiΒ°
*β’ Description:* Β°Search Wikipedia.Β°
*π§ββοΈ Command:* Β°.imgΒ°
*β’ Description:* Β°Downloading google images.Β°
*π§ββοΈ Command:* Β°.wameΒ°
*β’ Description:* Β°Get a link to the user chat.Β°
*π§ββοΈ Command:* Β°.githubΒ°
*β’ Description:* Β°Stalk github profiles of given username.
β¨οΈ Example: .github Thisan01Β°
*π§ββοΈ Command:* Β°.tkΒ°
*β’ Description:* Β°Stalk tiktok profile to a given username.
β¨οΈ Example: .tK asiataΒ°
*π§ββοΈ Command:* Β°.ssΒ°
*β’ Description:* Β°Take screenshot of given linksΒ°
*π§ββοΈ Command:* Β°.modΒ°
*β’ Description:* Β°Search modded apk in Moddroid site.Β°
*π§ββοΈ Command:* Β°.spotiΒ°
*β’ Description:* Β°Search songs from spotify.Β°
*π§ββοΈ Command:* Β°.animesayΒ°
*β’ Description:* Β°Write text on anime girl s paperΒ°
*π§ββοΈ Command:* Β°.changesayΒ°
*β’ Description:* Β°Weite chaged my mind themed memesΒ°
*π§ββοΈ Command:* Β°.trumpsayΒ°
*β’ Description:* Β°Write text on Trump TwitterΒ°
*π§ββοΈ Command:* Β°.spotifyΒ°
*β’ Description:* Β°Download spotify songs.Β°
*π§ββοΈ Command:* Β°.stickerΒ°
*β’ Description:* Β°Make stickers to your images. Reply to an image.Β°
*π§ββοΈ Command:* Β°.sticvidΒ°
*β’ Description:* Β°Converts animated stickers to video.Β°
*π§ββοΈ Command:* Β°.aliveΒ°
*β’ Description:* Β°Check bot online or notΒ°
*π§ββοΈ Command:* Β°.versionΒ°
*β’ Description:* Β°Check version of bot.Β°
*π§ββοΈ Command:* Β°.tagadminΒ°
*β’ Description:* Β°Tag all group admins.Β°
*π§ββοΈ Command:* Β°.tblendΒ°
*β’ Description:* Β°Applies the selected TBlend effect to videos.Β°
*π§ββοΈ Command:* Β°.carbonΒ°
*β’ Description:* Β°Convert text into Carbon effectΒ°
*π§ββοΈ Command:* Β°.agmΒ°
*β’ Description:* Β°it sends good morning text messageΒ°
*π§ββοΈ Command:* Β°.agnΒ°
*β’ Description:* Β°it sends good night text messageΒ°
*π§ββοΈ Command:* Β°.ttpΒ°
*β’ Description:* Β°Make text imageΒ°
*π§ββοΈ Command:* Β°.attpΒ°
*β’ Description:* Β°Make animated text stickers in Rainbow themeΒ°
*π§ββοΈ Command:* Β°.unaudioΒ°
*β’ Description:* Β°Converts sound recording to an audio File.Β°
*π§ββοΈ Command:* Β°.unvoiceΒ°
*β’ Description:* Β°Convert mp3 into a WA voice messageΒ°
*π§ββοΈ Command:* Β°.vid2Β°
*β’ Description:* Β°Youtube Video Downloader V2 . Second option of yt vidio downloader... .Β°
*π§ββοΈ Command:* Β°.weatherΒ°
*β’ Description:* Β°Check weather.Β°
*π§ββοΈ Command:* Β°.speedtestΒ°
*β’ Description:* Β°Check download and upload speedΒ°
*π§ββοΈ Command:* Β°.pingΒ°
*β’ Description:* Β°Your ping.Β°
*π§ββοΈ Command:* Β°.shortΒ°
*β’ Description:* Β°Shorten link.Β°
`, rowId:"rowid3"},
        {title: 'β¬ LOGO PACK 01 β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
ββββ*ASIATA LOGO PACK 1*βββ
β ββββββββββββββββββββββ
β
β   `+Config.CAPTION+`
β
β ββ’ π§ββοΈCmd: *.phub*
β βββ’ β Dec: *Send pornhub logo*
β ββ’ π§ββοΈ Ex: *.phub ASIATA*
β
β ββ’ π§ββοΈ Cmd: *.stone*
β βββ’ β Dec: *Send stone like logo*
β ββ’ π§ββοΈEx: *.stone ASIATA*
β
β ββ’ π§ββοΈCmd: *.glitch*
β βββ’ β Dec: *Send glitch logo*
β ββ’ π§ββοΈ Ex: *.glitch ASIATA*
β
β ββ’ π§ββοΈCmd: *.space*
β βββ’ β Dec: *Send space logo*
β ββ’ π§ββοΈEx: *.space ASIATA*
β
β ββ’ π§ββοΈCmd: *.blood*
β βββ’ β Dec: *Send blood hor logo*
β ββ’ π§ββοΈEx: *.blood ASIATA*
β
β ββ’ π§ββοΈCmd: *.blackpink*
β βββ’ β Dec: *Send bpink logo*
β ββ’ π§ββοΈEx: *.blackpink ASIATA*
β
β ββ’ π§ββοΈCmd: *.wall*
β βββ’ β Dec: *Send wall art logo*
β ββ’ π§ββοΈEx: *.wall ASIATA*
β
β ββ’ π§ββοΈCmd: *.coding*
β βββ’β Dec: *Send coding logo*
β ββ’ π§ββοΈ Ex: *.coding ASIATA*
β
β ββ’ π§ββοΈCmd: .*.sand1*
β βββ’ β  Dec: *Send sand writting*
β ββ’ π§ββοΈ Ex: *.sand1 ASIATA*
β
β ββ’ π§ββοΈCmd: *.sand2*
β βββ’ β Dec: *Send sand writting*
β ββ’ π§ββοΈEx: *.sand2 ASIATA*
β
β ββ’ π§ββοΈCmd: *.sand3*
β βββ’ β Dec: *Send sand writting*
β ββ’ π§ββοΈEx: *.sand3 ASIATA *
β
β ββ’ π§ββοΈCmd: *.beach*
β βββ’ β  Dec: *Send beach logo*
β ββ’ π§ββοΈEx: *.beach ASIATA*
β
β ββ’ π§ββοΈCmd: *.gradient*
β βββ’ β  Dec: *Send logo*
β ββ’ π§ββοΈ Ex: *.gradient ASIATA*
β
β ββ’ π§ββοΈCmd: *.luxury*
β βββ’ β  Dec: *Send luxury logo*
β ββ’ π§ββοΈ Ex: *.luxury ASIATA*
β
β ββ’ π§ββοΈCmd: *.sky*
β βββ’ β  Dec: *Send sky logo*
β ββ’ π§ββοΈ Ex: *.sky ASIATA*
β
β ββ’ π§ββοΈCmd: *.winter*
β βββ’ β  Dec: *Send winter logo*
β ββ’ π§ββοΈ Ex: *.winter ASIATA*
β
β ββ’ π§ββοΈCmd: *.christmas*
β βββ’ β  Dec: *Send xmas logo*
β ββ’ π§ββοΈ Ex: *.christmas ASIATA*
β
β ββ’ π§ββοΈCmd: *.neon*
β βββ’ β  Dec: *Send neon logo*
β ββ’ π§ββοΈ Ex: *.neon ASIATA*
β
β ββ’ π§ββοΈCmd: *.king*
β βββ’ β  Dec: *Send king logo*
β ββ’ π§ββοΈ Ex: *.king ASIATA*
β
β ββ’ π§ββοΈCmd: *.glue*
β βββ’ β  Dec: *Send Glue logo*
β ββ’ π§ββοΈ Ex: *.glue ASIATA*
β
β    β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββββ
`, rowId:"rowid4"},
        {title: 'β¬ FF PACK β¬', description:`β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
β      β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
β         βββFF PACKβββ
β
β ββ’ π§ββοΈ.ff9       β΄your textβ΅
βsend fiee fire logo
β ββ’ π§ββοΈ.ff10      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff11      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff12      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff13      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff14      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff15      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff16      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff17      β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff18       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff19       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff20       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff21       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff22       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff23       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff24       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff25       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff26       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff27       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff28       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff29       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff30       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff31       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff32       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff33       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff34       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff35       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff36       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff37       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff38       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff39       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff40       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff40       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff41       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff42       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff43       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff44       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff45       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff46       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff47       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff48       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff49       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff50       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff51       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff52       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff53       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff54       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff55       β΄your textβ΅
βsend free fire logo
β ββ’ π§ββοΈ.ff56       β΄your textβ΅
βsend free fire logo
β
β
ββ·Creator: THISAN 
β
β `β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββ
`, rowId:"rowid5"},
   {title: 'β¬ LOGO PACK 02 β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
ββββ*ASIATA LOGO PACK 2*βββ
β ββββββββββββββββββββββ
β
β   `+Config.CAPTION+`
β
β ββ’ π§ββοΈCmd: *.wel*
β βββ’ β Dec: *Send welcome logo*
β ββ’ π§ββοΈ Ex: *.wel ASIATA*
β
β ββ’ π§ββοΈ Cmd: *.bye*
β βββ’ β Dec: *Send bye logo*
β ββ’ π§ββοΈEx: *.bye ASIATA*
β
β ββ’ π§ββοΈCmd: *.marvel*
β βββ’ β Dec: *Send marve logo*
β ββ’ π§ββοΈ Ex: *.marvel ASIATA*
β
β ββ’ π§ββοΈCmd: *.2marvel*
β βββ’ β Dec: *Send marvel logo*
β ββ’ π§ββοΈEx: *.2marvel ASIATA*
β
β ββ’ π§ββοΈCmd: *.wolf*
β βββ’ β Dec: *Send wolf logo*
β ββ’ π§ββοΈEx: *.wolf ASIATA*
β
β ββ’ π§ββοΈCmd: *.lava*
β βββ’ β Dec: *Send lava logo*
β ββ’ π§ββοΈEx: *.lava ASIATA*
β
β ββ’ π§ββοΈCmd: *.xmas*
β βββ’ β Dec: *Send xmas logo*
β ββ’ π§ββοΈEx: *.xmas ASIATA*
β
β ββ’ π§ββοΈCmd: *.round*
β βββ’β Dec: *Send round logo*
β ββ’ π§ββοΈ Ex: *.round { image url }*
β
β ββ’ π§ββοΈCmd: .*.quot*
β βββ’ β  Dec: *Send quote logo*
β ββ’ π§ββοΈ Ex: *.quot ASIATA*
β
β ββ’ π§ββοΈCmd: *.harta*
β βββ’ β Dec: *Send harta logo*
β ββ’ π§ββοΈEx: *.harta ASIATA*
β
β ββ’ π§ββοΈCmd: *.1917*
β βββ’ β Dec: *Send 1917 logo*
β ββ’ π§ββοΈEx: *.1917 ASIATA*
β
β ββ’ π§ββοΈCmd: *.minion*
β βββ’ β Dec: *Send minion logo*
β ββ’ π§ββοΈEx: *.minion ASIATA*
β
β ββ’ π§ββοΈCmd: *.holo*
β βββ’ β  Dec: *Send holo logo*
β ββ’ π§ββοΈ Ex: *.holo ASIATA*
β
β ββ’ π§ββοΈCmd: *.metalp*
β βββ’ β  Dec: *Send metalp logo*
β ββ’ π§ββοΈ Ex: *.metalp ASIATA*
β
β ββ’ π§ββοΈCmd: *.avengers*
β βββ’ β  Dec: *Send avengers logo*
β ββ’ π§ββοΈ Ex: *.avengers ASIATA*
β
β ββ’ π§ββοΈCmd: *.halloween*
β βββ’ β  Dec: *Send halloween logo*
β ββ’ π§ββοΈ Ex: *.halloween ASIATA*
β
β ββ’ π§ββοΈCmd: *.horror*
β βββ’ β  Dec: *Send horror logo*
β ββ’ π§ββοΈ Ex: *.horror ASIATA*
β
β ββ’ π§ββοΈCmd: *.glossyc*
β βββ’ β  Dec: *Send glossy logo*
β ββ’ π§ββοΈ Ex: *.glossyc ASIATA*
β
β ββ’ π§ββοΈCmd: *.deluxe*
β βββ’ β  Dec: *Send deluxe logo*
β ββ’ π§ββοΈ Ex: *.deluxe ASIATA*
β
β ββ’ π§ββοΈCmd: *.glossyb*
β βββ’ β  Dec: *Send glossy logo*
β ββ’ π§ββοΈ Ex: *.glossyb ASIATA *
β
β ββ’ π§ββοΈCmd: *.joker*
β βββ’ β  Dec: *Send joker logo*
β ββ’ π§ββοΈ Ex: *.joker ASIATA*
β
β     β¬sΜΜtΜΜaΜΜyΜΜ sΜΜaΜΜfΜΜeΜΜtΜΜyΜΜ aΜΜtΜΜ hΜΜoΜΜmΜΜeΜΜπ§ββοΈ
βββββββββββββββββββββββ     
`, rowId:"rowid6"},
        {title: 'β¬ ATTP PACK β¬', description: `β·β·β·β·β·β·\n\n\n
βββββββββββββββββββββββ
β     β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
β      ββ°βββATTP PACKββββ°β
β
β ββ’ π§ββοΈ.01attp      β΄your textβ΅
βsend fiee fire logo
β ββ’ π§ββοΈ.02attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.03attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.04attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.05attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.06attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.07attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.08attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.09attp      β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.10attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.11attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.12attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.13attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.14attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.15attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.16attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.17attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.18attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.19attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.20attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.21attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.22attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.23attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.24attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.25attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.26attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.27attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.28attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.29attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.30attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.31attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.32attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.33attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.34attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.35attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.36attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.37attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.38attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.39attp       β΄your textβ΅
βsend Text logo
β ββ’ π§ββοΈ.40attp       β΄your textβ΅
βsend Text logo
β
ββ·Creator: THISAN 
β
β β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°
βββββββββββββββββββββββ

`, rowId:"rowid20"},
        {title: 'β¬ DOWNLOADER β¬', description: `β·β·β·β·β·β·\n\n\n
 β­ββββββββββββββββ
 β  βπ§ββοΈ Downloader π§ββοΈβ
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
`, rowId:"rowid9"},
        {title: 'β¬ ABOUT ASIATA BOT β¬', description:`β·β·β·β·β·β·\n\n\n
π§ββοΈ Owner : Thisan 
π§ββοΈ Bot             : ASIATA V 1.0.0 
π§ββοΈ Language : Sinhala & English
π§ββοΈ Sponcer Team : RAVANA TECH 
π§ββοΈ Develop language : Node js
π§ββοΈ Developer no : wa.me/+94766816809
`, rowId:"rowid9"},
        {title: 'π±π° ADMIN PANEL π±π°', description: `β·β·β·β·β·β·\n\n\n
β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°\n\nπ COMMAND: *.ban*\nβΉοΈ DESCRIPTION: Remove someone from the group. Mention the message or tag a person to use command.\n\nπ COMMAND: *.add*\nβΉοΈ DESCRIPTION: Adds someone to the group.\n\nπ COMMAND: *.mute*\nβΉοΈ DESCRIPTION: Mute group chat. Messages can only be sent by admin. \n\nπ COMMAND: *.unmute*\nβΉοΈ DESCRIPTION: Remove group chat mute. Anyone can send a message.\n\nπ COMMAND: *.clear*\nβΉοΈ DESCRIPTION: Clearing chat.\n\nπ COMMAND: *.name*\nβΉοΈ DESCRIPTION: Change group name. \n\nπ COMMAND: *.promote*\nβΉοΈ DESCRIPTION: Promoting members to admin.\n\nπ COMMAND: *.demote*\nβΉοΈ DESCRIPTION: Demoting admins.\n\nπ COMMAND: *.myplugin*\nβΉοΈ DESCRIPTION: To view the current plugin list from β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°.\n\nπ COMMAND: *.plug*\nβΉοΈ DESCRIPTION: Install external plugins.\n\nπ COMMAND: *.unplug*\nβΉοΈ DESCRIPTION: Removes the plugin.\n\nπ COMMAND: *.invite*\nβΉοΈ DESCRIPTION: Provides group invitation link.\n\nπ COMMAND: *.afk*\nβΉοΈ DESCRIPTION: It turns bot bot AFK - Away From Keyboard.\n\nπ COMMAND: *.restart*\nβ’ DESCRIPTION: Restart the bot.\n\nπ COMMAND: *.shutdown*\nβ’ DESCRIPTION: Shutdown the Bot.\n\nπ COMMAND: *.setvar*\nβ’ DESCRIPTION: Change heroku config vars.\n\nπ COMMAND: *.getvar*\nβ’ DESCRIPTION: Get heroku config var.\n\nπ COMMAND: *.speedtest*\nβ’ DESCRIPTION:Check download and upload speed.\n\nπ COMMAND: *.filter*\nβΉοΈ DESCRIPTION: It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.\n\nπ COMMAND: *.stop*\nβΉοΈ DESCRIPTION: Stops the filters you added earlier.\n\nπ COMMAND: *.welcome*\nβΉοΈ DESCRIPTION: It sets the welcome message.\n\nπ COMMAND: *.goodbye*\nβΉοΈ DESCRIPTION: Sets the goodbye  message.\n\nπ COMMAND: *.kickme*\nβΉοΈ DESCRIPTION: It removes the bot from the group that provided the command.\n\nπ COMMAND: *.pp*\nβΉοΈ DESCRIPTION: The photo you mention mentions the bot profile photo.\n\nπ COMMAND: *.block*\nβΉοΈ DESCRIPTION: Block tagged user.\n\nπ COMMAND: *.unblock*\nβΉοΈ DESCRIPTION: Unblock tagged user.\n\nπ COMMAND: *.jid*\nβΉοΈ DESCRIPTION: Giving user JID.\n\nπ COMMAND *.tagall*\nβΉοΈ DESCRIPTION: Tag everyone in group.\n\nπ COMMAND: *.up*\nβΉοΈ DESCRIPTION: Check for updates.\n\nπ COMMAND: *.upasiata*\nβΉοΈ DESCRIPTION: To update your bot.\n\nπ COMMAND: *.dyno*\nβΉοΈ DESCRIPTION: Showing heroku dyno hours.\n\nπ COMMAND: *.sysd*\nβΉοΈ DESCRIPTION: Show system properties.\n\nπ COMMAND: *.scam*\nβΉοΈ DESCRIPTION: Scam actions for 5min.\n\nπ COMMAND: *.antilink*\nβΉοΈ DESCRIPTION: Anti link on Ex: .antilink on/off\n\nπ COMMAND: *.antibad*\nβΉοΈ DESCRIPTION: Remove bad word users Ex: .antibad on/off\n\nπ COMMAND: *.chatbot*\nβΉοΈDESCRIPTION: Auto chat on Ex: .chatbot on/off\nβ Command: .voice on/off\nβ· Description: Activate and deactivate voice chat\n\nβ Command: .public β· Description: set bot as public\n\n β Command: .private\nβ· Description: Set your bot as private\n\n*β οΈ The above command only works for Admin, Bot and SUDO numbers.\n\nβ°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°*
`, rowId:"rowid10"},
        {title: 'π² Work Type PUBLIC π²', description: "β·β·β·β·β·β·\n\n\nType .public to public mode", rowId:"rowid9"},
        {title: 'π² Work Type PRIVATE π²', description:"β·β·β·β·β·β·\n\n\nType .private to private mode", rowId:"rowid2"}
       ]
       
       const sections = [{title: "π ASIATA Command Panel π", rows: rows}]
       
       const button = {
        buttonText: 'Click Meπ«',
        description: "π ASIATA COMMAND PANEL π",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage, {quoted: message.data })
    
    }));
}

}
