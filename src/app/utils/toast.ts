import { Plugins } from '@capacitor/core';
import { async } from '@angular/core/testing';
const { Toast } = Plugins;

async function show(message) {
  await Toast.show({ text: message, position : "bottom" });
}

function warn(message){
  show(message);
}

export var ToastMessage = {
  warn: warn
}