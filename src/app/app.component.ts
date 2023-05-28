import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public counter: number = 0;

  constructor() {}

  public increment(): void {
    this.counter += 1;
  }

  public decrement(): void {
    this.counter -= 1;
  }

  public reset(): void {
    this.counter = 0;
  }
}
