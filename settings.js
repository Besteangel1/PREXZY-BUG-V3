const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2347063956321"
global.ownername = "Precious Ayomide👑"
global.ytname = "YT: Prexzyvilla"
global.socialm = "GitHub: Prexzybooster"
global.location = "Nigeria, Osun, Osogbo"

global.ownernumber = '2347063956321'  //creator number
global.ownername = 'Precious Ayomide👑' //owner name
global.botname = '𝕻𝕽𝕰𝖃𝖄 𝕭𝖀𝕾 𝕻3' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '👑Prexzy\n\nContact: +2347063956321'

//console view/theme
global.themeemoji = '🪀'
global.wm = "PREXZYVILLA."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//text bug
global.xbugtex = {
xtxt: '🚨PREXZYVILLA🚨',
}
global.bimg ='noiseKey":{"private":{"type":"Buffer","data":"kKKYCms39gvFaM/Xp5Mun/fYvYABoZ9vkerGbB8jYEA="},"public":{"type":"Buffer","data":"NNCb9LUZ61eC59/xk30eR91+hEjXcPpSVqLor1Okrz0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MD2xncAwE9ye7sTHCKarhDjC/YHj98CX/CoF8WoaOVI="},"public":{"type":"Buffer","data":"e7UakT/WSPxKqoXPHzaANM6VIqt0WN+Zheby4yftd34="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WDua5o3UIavgaGvuguVv7pXzfvVGMXBdeqL61iggh3I="},"public":{"type":"Buffer","data":"XUoQHhlYe6bE9wSv99ByXDJNxSe2eyDeTChEy0KqjRw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cJqQiaG1bY/p8T2PT2oSf6ieYyYJVIPfZykYVVhWFXQ="},"public":{"type":"Buffer","data":"rqqmZD1DtO5GGGpOSX5ihknO6Q+s1lfWy75bgGafbkI="}},"signature":{"type":"Buffer","data":"LC9U2Xo1nyo3vafKyccrerBxwM0WbzUVgqOjL6NRVo4RDQqMkJtHXhmZOTkowSRlyz32550dEJa4xVoELdpKDg=="},"keyId":1},"registrationId":85,"advSecretKey":"aEQ0/6yzKtUPkytcdh/OlSljV1ttdmFavsmnAg9Eb1E=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"o_KGD4ZrS0O9pvETsBTJ1g","phoneId":"9ecb4fb2-fd2e-4dd7-8295-1acb7237e331","identityId":{"type":"Buffer","data":"VqbAvryOCNWeRY+i0MwrMT19IaE="},"registered":true,"backupToken":{"type":"Buffer","data":"eViK4YgRTFMCtrUADBgNvDxXdQE="},"registration":{},"pairingCode":"F3D74H2Q","me":{"id":"2250100282598:64@s.whatsapp.net","lid":"274667923333217:64@lid"},"account":{"details":"CJTtqNAFEKuu7rgGGAIgACgA","accountSignatureKey":"UnnrHXYn8t7ggpwRCLNOSk7s4naOnipr8+A3g8EM2Bw=","accountSignature":"TSlitwQDcLTanxAcUTvOAM76ktA0qNVDu1uQSdXWNsfgIqT3WLOj6c0+03OZ24p/VLb+urvQ0nf6BAjmfOl6AQ==","deviceSignature":"Jun1JauQ82qntZdQZ0vWUdv55dYCoblpV5+XAW843vc4LywhxctxP9ABRXxrgZrFVH9ks9utxdiJ89+zcxBvDQ=="},"signalIdentities":[{"identifier":{"name":"2250100282598:64@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVJ56x12J/Le4IKcEQizTkpO7OJ2jp4qa/PgN4PBDNgc"}}],"platform":"android","lastAccountSyncTimestamp":1729861423,"myAppStateKeyId":"AAAAAAe1"}'
//reply messages
global.mess = {
    done: 'ᴅᴏɴᴇ ᴀsᴀᴘ!',
    prem: '𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖈𝖆𝖓 𝖇𝖊 𝖚𝖘𝖊𝖉 𝖇𝖞 𝖕𝖗𝖊𝖒𝖎𝖚𝖒 𝖚𝖘𝖊𝖗 𝖔𝖓𝖑𝖞',
    admin: '𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖈𝖆𝖓 𝖇𝖊 𝖚𝖘𝖊𝖉 𝖇𝖞 𝖆𝖉𝖒𝖎𝖓 𝖔𝖓𝖑𝖞',
    botAdmin: '𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖈𝖆𝖓 𝖔𝖓𝖑𝖞 𝖇𝖊 𝖚𝖘𝖊𝖉 𝖜𝖍𝖊𝖓 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖆 𝖌𝖗𝖔𝖚𝖕 𝖆𝖉𝖒𝖎𝖓 ',
    owner: '𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖈𝖆𝖓 𝖇𝖊 𝖚𝖘𝖊𝖉 𝖇𝖞 𝖔𝖜𝖓𝖊𝖗 𝖔𝖓𝖑𝖞',
    group: '𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖎𝖘 𝖔𝖓𝖑𝖞 𝖋𝖔𝖗 𝖌𝖗𝖔𝖚𝖕𝖘',
    private: '𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖎𝖘 𝖔𝖓𝖑𝖞 𝖋𝖔𝖗 𝖕𝖗𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖆𝖙𝖘',
    wait: 'ᴘʀᴏᴄᴇssɪɴɢ ',    
    error: 'ᴇʀʀᴏʀ!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
