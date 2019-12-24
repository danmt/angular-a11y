import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home';
  articles = [
    { title: 'Article D', type: 'type-d' },
    { title: 'Article C', type: 'type-c' },
    { title: 'Article B', type: 'type-b' },
    { title: 'Article A', type: 'type-a' }
  ];
}
