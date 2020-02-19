import { Injectable } from '@angular/core';
import { AES } from '../utils/AESEncryption';
import { SSL } from '../utils/SslPinning';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '64C68A43-E315-49AA-8F60-E9A46590648F';

  // UAT
  public static BASE_URL = 'https://exlmobility-uat.exlservice.com/IncidentManagement';
  public static fingerprint = "F4 C6 63 DF B2 E6 4B 98 C4 EC 7B AE 5B D9 35 3A 57 F5 67 DD 48 7D CE 7D 55 C5 CD D1 EE E8 2A 27";

  // PROD
  // public static   BASE_URL = 'https://exlmobility.exlservice.com/Sentinel';
  //  public static  fingerprint = "F4 C6 63 DF B2 E6 4B 98 C4 EC 7B AE 5B D9 35 3A 57 F5 67 DD 48 7D CE 7D 55 C5 CD D1 EE E8 2A 27";

  // Third party testing pupose only
  //  public static  fingerprint = "2B F9 91 94 7D 5C 7A B9 27 F0 08 08 4D BE 02 86 29 A8 F6 43 7C 18 01 FE B8 CD 72 AC 0C 64 12 F5";



  constructor(private http: HTTP) {

  }



  async doLogin(userName, password) {

    let data = {
      userName: AES.encrypt(userName),
      Password: AES.encrypt(password),

    }


    try {
      let response = await this.postRequest('/api/UserLogin/UserLogin', data);
      return Promise.resolve(response);
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }

  }



  async postRequest(endPoint, data) {

    // try {
    //   var isSecure = await SSL.isSecure();
    //   if (!isSecure) {
    //     return Promise.reject("CONNECTION_NOT_SECURE");
    //   }
    // } catch (error) {
    //   return Promise.reject(error)
    // }

    const options = {
      method: 'post',
      data: data,
      serializer: 'json',
      timeout: 30 * 1000,
      headers: { 'API_KEY': this.API_KEY, 'Content-Type': 'application/json' }
    };

    console.log("request", options);
    try {
      let response = await this.http.sendRequest(`${ApiService.BASE_URL}${endPoint}`, options);
      console.log("response", response);
      if (response && response.status == 200) {
        return Promise.resolve(JSON.parse(response.data));
      } else {

      }


    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }


  }

}
