import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  admins =  [
    {  id:  1,  firstName:  'aziz', lastName: 'ajmi', email: 'ajmiaziz109@gmail.com', password: '123456789', role: 'admin' },
    {  id:  2,  firstName:  'mayssa', lastName: 'karoui', email: 'mayssa109@gmail.com', password: '1234567', role: 'admin' },
    {  id:  3,  firstName:  'takwa', lastName: 'form', email: 'takwa109@gmail.com', password: '1234789', role: 'admin' },
    {  id:  4,  firstName:  'yousef', lastName: 'jimi', email: 'youssef@gmail.com', password: '12345678', role: 'admin' }
   ];

   return {admins};

  }
}