import { Component } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected collapsed = true;

  constructor() { }

}
