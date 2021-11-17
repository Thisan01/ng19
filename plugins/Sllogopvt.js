const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🧚‍♂️"

if (Config.WORKTYPE == 'private') {
   
   
   Asiata.addcommand({ pattern: 'rlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/751bab3a465bbe2500948.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔══════════════════════
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
╚══════════════════════`,quoted: message.data})

    }));

   Asiata.addcommand({pattern: 'gamma ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://api.lolhuman.xyz/api/meme8?apikey=d3be4b65ca9dab633c773d66&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'stone ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/stone-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'glitch ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/glitch-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'space ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/space-3d?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'phub ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/phub?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰  ',quoted: message.data})
   
   }));
   
   
     Asiata.addcommand({ pattern: 'blood ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'blackpink ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'coding ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'wall ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sand1 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'beach ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'gradient ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'luxury ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sky ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'winter ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'christmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})
    }));
      
     Asiata.addcommand({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'king ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      Asiata.addcommand({ pattern: 'sand2 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'sand3 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ',quoted: message.data})

    }));
      
      
      Asiata.addcommand({ pattern: 'glue ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ▰✖🧚‍♂️ꜱʟ ᴀꜱɪᴀᴛᴀ ʙᴏᴛ🌟✖▰ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
