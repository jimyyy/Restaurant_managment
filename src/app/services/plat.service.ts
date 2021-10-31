import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpclient:HttpClient) { }

  public addplat(plat,img:File){
    
      let formData = new FormData();
      formData.append('platName',plat.platName);
      formData.append('price',plat.price);
      formData.append('description',plat.description);
      formData.append('idchef',plat.idchef);
      formData.append('img',img);
      return this.httpclient.post<{message : string}>(`${this.SERVER_URL + '/api/addplat'}`, formData)
 }

 public getplat(id){
  return this.httpclient.get<{plat:any}>(`${this.SERVER_URL + '/api/allplat'}/${id}`); 
}


public getplats(){ 
  return this.httpclient.get<{plats:any}>(this.SERVER_URL + '/api/allplats');
}


public deleteplat(id){
  return this.httpclient.delete<{message:string}>(`${this.SERVER_URL + '/api/deleteplat'}/${id}`)
}



public updateplat(plat) {
  return this.httpclient.put<{message:string}>(`${this.SERVER_URL + '/api/updateplat'}/${plat._id}`, plat)
}




}
