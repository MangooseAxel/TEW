import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEW-app';
  activeCategory:string = 'all';

  changeCategory(text: string): void {
    this.activeCategory = text;
  }
}
