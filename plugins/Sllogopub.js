const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ð§ââï¸"

if (Config.WORKTYPE == 'public') {
   
   
   Asiata.addcommand({ pattern: 'rlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/751bab3a465bbe2500948.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `âââââââââââââââââââââââ
ââââ*ASIATA LOGO PACK 1*âââ
â ââââââââââââââââââââââ
â
â   `+Config.CAPTION+`
â
â ââ¢ ð§ââï¸Cmd: *.phub*
â âââ¢ â Dec: *Send pornhub logo*
â ââ¢ ð§ââï¸ Ex: *.phub ASIATA*
â
â ââ¢ ð§ââï¸ Cmd: *.stone*
â âââ¢ â Dec: *Send stone like logo*
â ââ¢ ð§ââï¸Ex: *.stone ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.glitch*
â âââ¢ â Dec: *Send glitch logo*
â ââ¢ ð§ââï¸ Ex: *.glitch ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.space*
â âââ¢ â Dec: *Send space logo*
â ââ¢ ð§ââï¸Ex: *.space ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.blood*
â âââ¢ â Dec: *Send blood hor logo*
â ââ¢ ð§ââï¸Ex: *.blood ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.blackpink*
â âââ¢ â Dec: *Send bpink logo*
â ââ¢ ð§ââï¸Ex: *.blackpink ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.wall*
â âââ¢ â Dec: *Send wall art logo*
â ââ¢ ð§ââï¸Ex: *.wall ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.coding*
â âââ¢â Dec: *Send coding logo*
â ââ¢ ð§ââï¸ Ex: *.coding ASIATA*
â
â ââ¢ ð§ââï¸Cmd: .*.sand1*
â âââ¢ â  Dec: *Send sand writting*
â ââ¢ ð§ââï¸ Ex: *.sand1 ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.sand2*
â âââ¢ â Dec: *Send sand writting*
â ââ¢ ð§ââï¸Ex: *.sand2 ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.sand3*
â âââ¢ â Dec: *Send sand writting*
â ââ¢ ð§ââï¸Ex: *.sand3 ASIATA *
â
â ââ¢ ð§ââï¸Cmd: *.beach*
â âââ¢ â  Dec: *Send beach logo*
â ââ¢ ð§ââï¸Ex: *.beach ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.gradient*
â âââ¢ â  Dec: *Send logo*
â ââ¢ ð§ââï¸ Ex: *.gradient ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.luxury*
â âââ¢ â  Dec: *Send luxury logo*
â ââ¢ ð§ââï¸ Ex: *.luxury ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.sky*
â âââ¢ â  Dec: *Send sky logo*
â ââ¢ ð§ââï¸ Ex: *.sky ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.winter*
â âââ¢ â  Dec: *Send winter logo*
â ââ¢ ð§ââï¸ Ex: *.winter ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.christmas*
â âââ¢ â  Dec: *Send xmas logo*
â ââ¢ ð§ââï¸ Ex: *.christmas ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.neon*
â âââ¢ â  Dec: *Send neon logo*
â ââ¢ ð§ââï¸ Ex: *.neon ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.king*
â âââ¢ â  Dec: *Send king logo*
â ââ¢ ð§ââï¸ Ex: *.king ASIATA*
â
â ââ¢ ð§ââï¸Cmd: *.glue*
â âââ¢ â  Dec: *Send Glue logo*
â ââ¢ ð§ââï¸ Ex: *.glue ASIATA*
â
â    â¬sÌÌtÌÌaÌÌyÌÌ sÌÌaÌÌfÌÌeÌÌtÌÌyÌÌ aÌÌtÌÌ hÌÌoÌÌmÌÌeÌÌð§ââï¸
âââââââââââââââââââââââ`,quoted: message.data})

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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ°  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ°  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ°  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ°  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ°  ',quoted: message.data})
   
   }));
   
   
     Asiata.addcommand({ pattern: 'blood ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'blackpink ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'coding ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'wall ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sand1 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'beach ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'gradient ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'luxury ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sky ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'winter ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'christmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})
    }));
      
     Asiata.addcommand({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'king ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
      Asiata.addcommand({ pattern: 'sand2 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'sand3 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ',quoted: message.data})

    }));
      
      
      Asiata.addcommand({ pattern: 'glue ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sl = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(sl.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°âð§ââï¸ê±Ê á´ê±Éªá´á´á´ Êá´á´ðââ° ' ,quoted: message.data})

    }));
      
      
      
      
   
}
