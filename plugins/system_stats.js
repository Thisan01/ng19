

const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asiata.addcommand({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'I am Fine π€­'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'Bad Day πͺ'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/751bab3a465bbe2500948.jpg',
    contentText: "β· How Are You β·",
    footerText: 'ASIATA BOT β·',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/751bab3a465bbe2500948.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. π§ββοΈ```\n\nπ§ββοΈ My name : β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°\n\nπ§ββοΈ Developer: HIRUWA\n\nπ§ββοΈThank You For Using β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'I am Fine π€­'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'Bad Day πͺ'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/751bab3a465bbe2500948.jpg',
    contentText: "β· CLICK MENU BUTTON TO GET MENU β·",
    footerText: 'BY ASIATA BOT β·',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Asiata.addcommand({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asiata.addcommand({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 Public'+
                `\n\nπ Check github for bot: https://github.com/Thisan01/Sl-Asiata`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Asiata.addcommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'I am Fine π€­'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'Bad Day πͺ'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/751bab3a465bbe2500948.jpg',
    contentText: "β€ HOW ARE YOU β€",
    footerText: 'BY ASIATA BOT β·',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/751bab3a465bbe2500948.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. π§ββοΈ```\n\nπ§ββοΈ My name : β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°\n\nπ§ββοΈ Developer: THISAN\n\nπ§ββοΈThank You For Using β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'i am Fine π€­'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: 'Bad Day πͺ'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/751bab3a465bbe2500948.jpg',
    contentText: "β€ HOW ARE YOU β€",
    footerText: 'BY ASIATA BOT β·',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n**' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Asiata.addcommand({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asiata.addcommand({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*β°βπ§ββοΈκ±Κ α΄κ±Ιͺα΄α΄α΄ Κα΄α΄πββ°*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 - Public'+
                `\n\nπ Check github for bot:  https://github.com/Thisan01/Sl-Asiata`
           , MessageType.text);
            
        }));
}
