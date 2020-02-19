import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = {
    UserId: undefined,
    User_Name: undefined,
    User_Mobile_Number: undefined
  }

  constructor() { }
}
