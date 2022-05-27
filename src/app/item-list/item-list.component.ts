import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items!: Items[];

  totalRecords:number=0;
  page:number=1;
  constructor(private itemService:ItemServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  private getPizzas()
  {
    this.itemService.getAllPizzaList().subscribe(
      data=>{
        this.items=data;
        this.totalRecords=data.length;
      },
      err=>
      {
        console.log(err.error);
      }
    );
  }

}
