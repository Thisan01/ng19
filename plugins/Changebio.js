/*Codded by 2021 Thisan01
මේක කොපි රයිට් ගහල අහුවෙන්න එපා😒 කොපි කරාට සමකරන්න බෑ අන්න ඒකයි*/


const Asiata = require('../events');
const Config = require('../config');
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asiata');
const fs = require("fs")
const kawa = fs.readFileSync('./Voice/kawa.mp3')

Asiata.addcommand({pattern: 'bio ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {
 

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Need Bio👨‍💻');
    
    await message.client.setStatus(match[1]);
    await message.client.sendMessage(message.jid,'🧚‍♂️ Succesfully Change Your Bio '+(match[1])+' ✖🧚‍♂️',MessageType.text);
    }
));
