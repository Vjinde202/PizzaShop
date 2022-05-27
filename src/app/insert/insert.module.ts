import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { DeleteComponent } from '../delete/delete.component';


@NgModule({
  declarations: [
    InsertComponent, ItemListComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
 exports:[
     InsertComponent,
     
 ]
})
export class AppModule { }
