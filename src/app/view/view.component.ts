import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item = {
    name:'',
    age:0
  };

  constructor() { }

  ngOnInit() {
  }

  setItem(newItem){
    this.item = newItem;
  }

}
