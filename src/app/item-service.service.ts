import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  a= 'http://localhost:8080';
  e = this.a+'/add';
  getPizzaEnd=this.a+'/getPizzas';
  getDelete = this.a+'/deletePizza';
  

  constructor(private http:HttpClient) { }

  insertPizza(items:Items):Observable<Object>
  {
    console.log(''+this.a);
    console.log('Pizza Added called'+this.e);
    return this.http.post<Items>(`${this.e}`, items);
    
  }
  
  getAllPizzaList():Observable<Items[]>
  {
    console.log('items inside - get called');
    return this.http.get<Items[]>(`${this.getPizzaEnd}`);
  } 

  deletePizza(id: number):Observable<Items>
  {
    console.log('delete method called');
    let actualEndPoint=this.getDelete+'?id'+'='+id;
    
    return this.http.delete<Items>(`${actualEndPoint}`);
  }
  


  
}
