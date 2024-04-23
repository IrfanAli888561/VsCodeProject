import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First Page';
  DisplayVal = '';
  color = "red";
  count = 0;
  userData:any
  
  getName(val:string)
  {
    alert(val)
  }
  getValue(val:string)
  {
    console.warn(val)
    this.DisplayVal = val
  }
  counter(){
    this.count ++;
  }
  counter1(){
    this.count --;
  }
updateColor(){
  this.color = "blue";
}
getData(data:any)
{
  console.warn(data)
  this.userData = data;
}

}
