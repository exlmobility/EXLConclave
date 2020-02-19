import { ApiService } from "../providers/api.service";


declare var window: any

function isSecure(): Promise<boolean> {

    var server = ApiService.BASE_URL;
    var fingerprint = ApiService.fingerprint

    return new Promise((resolve, reject) => {

        window.plugins.sslCertificateChecker.check(
            (success) => {
                console.log('SSL pinning success!', success);
                return resolve(true)
            },
            message => {
                console.log('SSL pinning CONNECTION_NOT_SECURE!');
                if (message === "CONNECTION_NOT_SECURE") {
                    return resolve(false)
                    // There is likely a man in the middle attack going on, be careful!
                } else if (message.indexOf("CONNECTION_FAILED") > -1) {
                    return reject("CONNECTION FAILED, Check Internet Connectivity ");
                    // There was no connection (yet). Internet may be down. Try again (a few times) after a little timeout.
                }
            },
            server,
            fingerprint);
    })

}

export var SSL = {
    isSecure: isSecure
}