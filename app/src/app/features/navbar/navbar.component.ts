import { Component, OnInit } from '@angular/core';
import { NAVPAGES } from './navigation.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages = NAVPAGES;

  constructor() { }

  ngOnInit() {
  }

}
