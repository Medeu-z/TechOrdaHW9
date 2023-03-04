import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isActive: Boolean = false;

  onClickHandler() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
}
