import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string;
  constructor(message: string) { this.message = message; }
  getMessage = () => {alert(this.message); };
}
