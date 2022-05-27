import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id!:number;

  items: Items = new Items();

  constructor(private activatedRouter:ActivatedRoute, 
               private itemService : ItemServiceService,
               private router:Router) { }

  ngOnInit(): void {

    this.id=this.activatedRouter.snapshot.params['id'];

    console.log("delete component :-"+this.id);
  }
  doDeleteOnServer()
  {
    console.log("Id "+this.id);
    this.itemService.deletePizza(this.id).subscribe(
      data=>{
        console.log("data deleted "+this.id);
      },
      error=>console.log(error)
    );
    this.router.navigate(['Items']);
   
  }
}
