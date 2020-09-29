import { Component } from '@angular/core';
import {Serv1Service} from './serv1.service';
import {Serv3Service} from './serv3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Serv1Service],
  viewProviders: [Serv3Service]
})
export class AppComponent {
  title = 'less5-task2';
}
