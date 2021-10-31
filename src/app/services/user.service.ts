import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //SERVER_URL: string = "http://localhost:8080/api/";
  SERVER_URL: string = "http://localhost:3000";


  constructor(private httpClient: HttpClient) { }

  public getusers(){ 
    return this.httpClient.get<{users:any}>(this.SERVER_URL + '/api/allusers');
}

public getuser(id){
    return this.httpClient.get<{user:any}>(`${this.SERVER_URL + '/api/allusers'}/${id}`); 
}
public createuser(user){
   return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/adduser'}`, user)
}

public deleteuser(id){
   return this.httpClient.delete<{message:string}>(`${this.SERVER_URL + '/api/deleteuser'}/${id}`)
}
public updateuser(user) {
   return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/updateuser'}/${user._id}`, user)
}

public login(user){
   return this.httpClient.post<{findedUser:any}>(this.SERVER_URL + '/api/login',user)
}

public createchef(user){
   return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/add-chef'}`, user)


}

getPdf(){
   return this.httpClient.get<{ message: String}>(`${this.SERVER_URL}/users/generateFile/pdf`);
}

public createreservation(user){
   return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/addreservation'}`, user)
}
   




}
