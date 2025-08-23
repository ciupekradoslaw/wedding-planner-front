import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    // this.translate.addLangs(['pl']);
    // this.translate.setFallbackLang('pl');
    // this.translate.use('pl');
  }
}
