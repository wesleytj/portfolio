import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-visitor',
  templateUrl: './button-visitor.component.html',
  styleUrls: ['./button-visitor.component.scss']
})
export class ButtonVisitorComponent implements OnInit {
  txt = 'Visitar';
  constructor() { }

  ngOnInit() {
  }

}
