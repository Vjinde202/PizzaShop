import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { Items } from '../items';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  items: Items= new Items();

  constructor(private itemService : ItemServiceService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.items);
    this.doSaveToServer();
    alert('Added Successfully');

  }
  doSaveToServer()
  {
    this.itemService.insertPizza(this.items).subscribe(
      data=>
      {
        console.log("Data Saved"+data);
       
      },
      error=>
      {
        console.log(error);
      }
    );
  }

}
