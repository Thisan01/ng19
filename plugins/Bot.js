const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asiata.addcommand({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/751bab3a465bbe2500948.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️ 

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
█-----║║║╠─║─║─║║║║║╠─-----█
█-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█


☬𝐂𝐑𝐄𝐀𝐓𝐄𝐑▰Thisan Indusara
☬𝐎𝐖𝐍𝐄𝐑 ▰Mihiranga Manujaya

✔This repository help to enjoy network yourself✔
✖Education first another second✖

╔══╗░░░░╔╦╗░░╔═════╗
║╚═╬════╬╣╠═╗║░▀░▀░║
╠═╗║╔╗╔╗║║║╩╣║╚═══╝║
╚══╩╝╚╝╚╩╩╩═╝╚═════╝

☬ https://youtu.be/GVTABBcRZ2c
╔╗╔╦╗
║║╠╣╠╦═╗
║╚╣║═╣╩╣
╚═╩╩╩╩═╝
👨‍💻Language▰ NODE.JS
👨‍💻Devaloper▰Ravana Tech
SᑭOᑎSEᗪ ᗷY 2021 © ᖇᗩᐯᗩᑎᗩ TEᑕᕼ
`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asiata.addcommand({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/751bab3a465bbe2500948.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:`☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
█-----║║║╠─║─║─║║║║║╠─-----█
█-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█


☬𝐂𝐑𝐄𝐀𝐓𝐄𝐑▰Thisan Indusara
☬𝐎𝐖𝐍𝐄𝐑 ▰Mihiranga Manujaya

✔This repository help to enjoy network yourself✔
✖Education first another second✖

╔══╗░░░░╔╦╗░░╔═════╗
║╚═╬════╬╣╠═╗║░▀░▀░║
╠═╗║╔╗╔╗║║║╩╣║╚═══╝║
╚══╩╝╚╝╚╩╩╩═╝╚═════╝

☬ https://youtu.be/GVTABBcRZ2c
╔╗╔╦╗
║║╠╣╠╦═╗
║╚╣║═╣╩╣
╚═╩╩╩╩═╝
👨‍💻Language▰ NODE.JS
👨‍💻Devaloper▰Ravana Tech
SᑭOᑎSEᗪ ᗷY 2021 © ᖇᗩᐯᗩᑎᗩ TEᑕᕼ` })

    }));
  
  Asiata.addcommand({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/751bab3a465bbe2500948.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `☬s̑̈t̑̈ȃ̈y̑̈ s̑̈ȃ̈f̑̈ȇ̈t̑̈y̑̈ ȃ̈t̑̈ h̑̈ȏ̈m̑̈ȇ̈🧚‍♂️

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
█-----║║║╠─║─║─║║║║║╠─-----█
█-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█


☬𝐂𝐑𝐄𝐀𝐓𝐄𝐑▰Thisan Indusara
☬𝐎𝐖𝐍𝐄𝐑 ▰Mihiranga Manujaya

✔This repository help to enjoy network yourself✔
✖Education first another second✖

╔══╗░░░░╔╦╗░░╔═════╗
║╚═╬════╬╣╠═╗║░▀░▀░║
╠═╗║╔╗╔╗║║║╩╣║╚═══╝║
╚══╩╝╚╝╚╩╩╩═╝╚═════╝

☬ https://youtu.be/GVTABBcRZ2c
╔╗╔╦╗
║║╠╣╠╦═╗
║╚╣║═╣╩╣
╚═╩╩╩╩═╝
👨‍💻Language▰ NODE.JS
👨‍💻Devaloper▰Ravana Tech
SᑭOᑎSEᗪ ᗷY 2021 © ᖇᗩᐯᗩᑎᗩ TEᑕᕼ `  ,quoted: message.data})

    }));
}
