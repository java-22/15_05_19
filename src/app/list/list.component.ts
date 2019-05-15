import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output('myRowClick') personEmitter: EventEmitter<{name:string,age:number}> = new EventEmitter();
  names = [
    {
      name:'Vasya',
      age:23
    },
    {
      name:'Sofa',
      age: 25
    },
    {
      name: 'Petya',
      age:30
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onItemClick(indx){
    this.personEmitter.emit(this.names[indx]);
  }

}
