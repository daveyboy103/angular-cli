import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get sample(): string {
    return this._sample;
  }
  title = 'BlueCrest';
  private _sample: string  = "Hello there";
}
