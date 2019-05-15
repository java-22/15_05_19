import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Vasya';
  isInput = true;
  isShow = true;
  btnText = 'Hide';
  names = ['Vasya','Petya','Sofa'];

  changeTitle(){
    this.title = 'New title';
    this.isInput = !this.isInput;
  }

  setTitle(event){
    this.title = event.target.value;
  }

  changeVisibility(){
    this.isShow = !this.isShow;
    this.btnText = this.isShow ? 'Hide' : 'Show';
  }
}
