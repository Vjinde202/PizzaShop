import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  //{path:'items',component:InsertComponent},
  {path:'add',component:InsertComponent},
  {path:'getPizzas',component:ItemListComponent},
  {path:'deletePizza?id=',component:DeleteComponent},
  {path:'', redirectTo:'items',pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }