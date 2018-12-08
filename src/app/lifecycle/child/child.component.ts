import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, DoCheck {

  testValue = 500;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("Value Change : " + this.testValue);
  }
  

}
