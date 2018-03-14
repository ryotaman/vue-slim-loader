"use strict";
const exec = require('child_process').exec;

const vueSlimLoader = function(content) {
  const callback = this.async();
  try {
    if(content == ""){
      callback(null, "");
      return;
    }else{
      exec(`echo '${content}' | slimrb`, (err,stdo,stde) => {
        if(err){
          callback(err);
        }else{
          callback(null, stdo);
        }
      });
    }
  } catch (e) {
    callback(e);
    return;
  }
}
module.exports = vueSlimLoader;
