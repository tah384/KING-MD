const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923052432382")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv:/taha16511:4uPo1wMZxKzrqobP@cluster0.dvlwfxx.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923052432382'
global.devs = '923052432382';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Taha Yaseen' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU14U1ROY3RNRkx3b0Q2OFd4bk9VOXJEc2VneG5MOHVnbmEzTlk4UmcxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGVMaHhQRlVSRXFYeWNqa2NjMlBEcE1zblZmbVMzUllwWENsZWxWMitTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTXJ1alljTHIwb3ZhSkZraTNucnl1S1pKZ29hbkUxOUM0eWVUK1FOMTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKQXdHU21kbkg3Nmd0NE1vTlpta2hXNTFLaThoY2NjM2QwLzArTlhmeFFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJNWJScjNHbVZUU2Fqd1pBM1NZTHNBSlliQlhWUG1EdUo4a29BNXRjM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIUVlFY1RINkFtdTNjUjhYVFZUK3Z2TUxsYVM2YnI3clZ3UG0wTFRtWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkM0MHB6eVBwLzVBS2V6QVdJNU52THdjYys2REk1ckgvdWNJWkpSd3JYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEpPUHB1S21JVjVlS1dEVWUvZkJGN2ZLeUxQT1Awb0l4TUZGQ1BmeWhEYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZuRGRaU2dPcjFYbXd4SUhJRk5UV2VDS0lEdjVyRUdOczRqWjNmVHJHVDlhMmVUQi9ZSm14a3BRKzdneG5NditUcGdMVEV5V0Y0Y3RqeXlkUkpickRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJOSHM0bVVmYTZoOUVtejlwTk1lcVNOdVpWL3FPbDdpSWZkL0tpZ1JnaU9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA1MjQzMjM4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MDUwRjc2NUZBN0M5OTc1Q0ZBMUExQjRFRjBBMjIyRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4NTk3Njc2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkVTE1Yi1tZ1NHZUpBZngwa3ZPdWpnIiwicGhvbmVJZCI6IjgyMWJjMGFlLTRmMjItNDk5NS05MTJjLTUyZDkyYjI1Y2M0ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcXNCZC94bUF3T1R4SnhNWkRqckh0SlpMRjQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxSVFJaMklIOVhjOFZaVHdBRzVoeDdKTTZycz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016RHhkVUNFSnp3dnJNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJiN1dyR1hNUTRQNkgvZ21XR2h2ODk0MU1jeEtqcENoMDRlMWc4RlhjQW89IiwiYWNjb3VudFNpZ25hdHVyZSI6Im80bTh3bFB5SVJHcjlpL1lIRm0rMldiSlg1WWlicFIrY2V4ODRCOUlYZmRScllOS2hEZDR5ekRQSWVhampWRUllb01VL0p0VkNyc3ZVdlhwWWhuTUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtR2ZJeEtFZWZTUnBVdXIyL2dseFByVzIvc1l5MUhxWFF4SlYySWdxblNLS0dtcVBpUWE1aVVrMkdEZGg4QjJCRmZQK2lVT01MV3ZKbjR0Nklzd1FDQT09In0sIm1lIjp7ImlkIjoiOTIzMDUyNDMyMzgyOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVF9ZIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA1MjQzMjM4Mjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRtKzFxeGx6RU9EK2gvNEpsaG9iL1BlTlRITVNvNlFvZE9IdFlQQlYzQUsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg1OTc2NzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlp1In0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'T-Y' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
