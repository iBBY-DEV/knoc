import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-elements',
  templateUrl: './navbar-elements.component.html',
  styleUrls: ['./navbar-elements.component.css']
})
export class NavbarElementsComponent implements OnInit {
  menu = [ 'element', 'element_1', 'element_2', 'element_3', 'element_4' ]
  constructor() { }

  ngOnInit() {
  }

}
