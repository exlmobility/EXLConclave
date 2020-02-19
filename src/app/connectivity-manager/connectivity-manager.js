import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

handler;
isConnected = true;

function subscribe() {
    handler = Network.addListener('networkStatusChange', (status) => {
        console.log("Network status changed", status);
        isConnected = status.connected
    });
}

function unsubscribe() {
    if (handler) {
        handler.remove();
    }
}

async function isConnectedRightNow() {
    let status = await Network.getStatus();
    return Promise.resolve(status.connected)
}


export var ConnectivityManager = {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    status: status,
    isConnected: isConnected,
    isConnectedRightNow: isConnectedRightNow
}