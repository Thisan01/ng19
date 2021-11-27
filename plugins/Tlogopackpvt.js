/*PLEASE RESPECT TO DEVALOPER OF ASIATA DO NOT COPY PASTE THIS*/


const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ☬"

if (Config.WORKTYPE == 'private') {
   
   
   Asiata.addcommand({ pattern: 'tlpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var sl = await axios.get(`https://telegra.ph/file/751bab3a465bbe2500948.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔══════════════════════
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
╚══════════════════════     `,quoted: message.data})

    }));

   Asiata.addcommand({pattern: 'wel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sl = await axios.get(`https://leyscoders-api.herokuapp.com/api/welcome?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sl.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'bye ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sl = await axios.get(`https://leyscoders-api.herokuapp.com/api/leave?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sl.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sl = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sl.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: '2marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sl = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios2?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sl.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'wolf ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sl = await axios.
      get(`https://pencarikode.xyz/api/textpro/wolf?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid,Buffer.from(sl.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   
     Asiata.addcommand({ pattern: 'harta ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'quot ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'round ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'lava ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/lava?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '1917 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/1917-style?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'minion ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/minion-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'holo ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'metalp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-purple?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'avengers ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/avengers-logo?text=Asiata&text2=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'halloween ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/halloween?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'horror ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/blood?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})
    }));
      
     Asiata.addcommand({ pattern: 'xmas ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/xmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'glossyc ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      Asiata.addcommand({ pattern: 'deluxe ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/deluxe-gold?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'glossyb ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      
      
      Asiata.addcommand({ pattern: 'joker ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/joker?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
