import { Component } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
})
export class AppComponent {
  title = 'curriculum';
}
