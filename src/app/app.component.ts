import { Component } from '@angular/core';
import { RevealerAnimation } from './animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [RevealerAnimation]
})
export class AppComponent  {
  name = 'Angular';
  list: string[] = [
    "item",
    "item",
    "item"
  ];
  shown: boolean = true;

  addItem() {
    this.list.push("item");
  }

  removeItem() {
    this.list.pop()
  }

  toggleItem() {
    this.shown = !this.shown;
  }

}
