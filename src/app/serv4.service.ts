import { Injectable } from '@angular/core';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class Serv4Service {
  message = 'Сервис 4 с нами';
  constructor() {
  }
}
