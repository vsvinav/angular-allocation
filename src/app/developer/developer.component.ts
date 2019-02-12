import { Component, OnInit } from '@angular/core';
import Developer from '../developer';
import { FormControl, FormGroup } from '@angular/forms';
import mockdata from '../mock-data';
import Technology from '../Technology';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  // addUser = new FormGroup({
    devname = new FormControl('');
    // devid : new FormControl('')
  // });
  developers: Developer[];
  constructor() { }
  // getDevelopersFromServer(){}
  ngOnInit() {
    // this.developers=this.getDevelopersFromServer(this.technology);
    this.developers = mockdata.Developer;
  }
add() {
  const d: Developer = new Developer(
    this.developers.length,
    this.devname.value,
    [Technology.PYTHON]
  );
  this.developers.push(d);
  this.devname.setValue('');
}
}
