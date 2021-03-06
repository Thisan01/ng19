const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Asiata = require('../events');
const Config = require('../config');
const UNQ = "π¨βπ»dont type words after command π¨βπ»"
const DDO = "π¨βπ» turn on disappering mode π¨βπ»"
const ONO = "π¨βπ» Sucsessfuly Turned on π¨βπ»"
const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asiata.addcommand({pattern: 'dis on ?(.*)', fromMe: true, desc: DDO,dontAddCMDList: true }, (async (message, match) => {    

        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 604800);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));


Asiata.addcommand({pattern: 'dis off ?(.*)', fromMe: true, desc: DDO,dontAddCMDList: true }, (async (message, match) => {   

        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,'π¨βπ» Disapearing off π¨βπ»',MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));

module.exports = {
    checkImAdmin: checkImAdmin
};
