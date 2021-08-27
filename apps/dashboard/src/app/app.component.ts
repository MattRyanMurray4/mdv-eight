import { Component } from '@angular/core';

@Component({
  selector: 'mafias-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mafia-Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'gangsters', icon: 'view_list', title: 'Gangster-List' },
  ];
}
