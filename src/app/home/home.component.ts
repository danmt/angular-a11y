import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  articles = [
    { title: 'Article A', type: 'type-a' },
    { title: 'Article B', type: 'type-b' },
    { title: 'Article C', type: 'type-c' },
    { title: 'Article D', type: 'type-d' }
  ];
}
