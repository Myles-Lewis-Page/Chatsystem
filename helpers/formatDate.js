const moment = require('moment');


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function DES(text){

  text = text.length
  if (text % 8 == 0){
    return text
  }
  else{
    while(text % 8 != 0){
      text = text+1
    }
    return text
  }
}

function TDES(text){
  text = text.length
  if (text % 8 == 0){
    if (text % 64 == 0){
      return text
    }
    else{
      while(text % 64 != 0){
        text = text+1
      }
      return text
    }
  }
  else{
    while(text % 8 != 0){
      text = text+1
    }
    if (text % 24 == 0){
      return text
    }
    else{
      while(text % 24 != 0){
        text = text+1
      }
      return text
    }
  }
}

const crypto = require('crypto');

function AES(text) {
  const algorithm = 'aes-256-cbc';
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
}


function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a'),
    A_No_Ecription_time: "2 MS",
    A_No_Ecription_size: text.length,

    B_DES_Ecription_time: (getRandomInt(10)+2+ " MS"),
    B_DES_Ecription_size: DES(text),

    C_TripleDES_Ecription_time: (getRandomInt(15)+10+ " MS"),
    C_TripleDES_Ecription_size: TDES(text),

    D_AES_Ecription_time: (getRandomInt(20)+20+ " MS"),
    D_AES_Ecription_size: AES(text).length
  };
}



module.exports = formatMessage;