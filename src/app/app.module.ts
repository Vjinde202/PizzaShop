import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ItemListComponent,
    DeleteComponent,
    HeaderComponent,
    LinkComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
