/*රෙපෝ එක කොපි කරන්න හිතන් ඉන්නවනම් ඒක තේරුමක් නැති වැඩක්
නිකන් තමුසෙගෙ කාලෙ කා ගන්නෙ නැතුව පාඩුවේ ඉදහන්*/



const Asiata = require('../events');
const Config = require('../config');
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asiata');
const fs = require("fs")

Asiata.addcommand({pattern: 'name ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {
 

    if (match[1] === '') return await message.client.sendMessage(message.jid,'need name☬');
    
    await message.client.updateProfileName(match[1]);
    await message.client.sendMessage(message.jid,'☬ Successfully Change Your name as '+(match[1])+' ☬',MessageType.text);
    }
));
