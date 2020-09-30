import {Component, Host, Inject, OnInit, Optional} from '@angular/core';
import {Serv2Service} from '../serv2.service';
import {Serv1Service} from '../serv1.service';
import {Serv3Service} from '../serv3.service';
import {Serv4Service} from '../serv4.service';
import {MessageService} from '../message.service';
import {AnotherMessage, injectAIFactory, injectAUFactory} from '../provider';

@Component({
  selector: 'app-child',
  template: `<div>
    <p>Сервис 1 в родительском компоненете: {{serv1 ? serv1.message : 'Сервис не найден'}}</p>
    <p>Сервис 2 в этом компоненте: {{serv2 ? serv2.message : 'Сервис не найден'}}</p>
    <p>Сервис 3 во вью провайдере родительского компонента: {{serv3 ? serv3.message : 'Сервис не найден'}}</p>
    <p>Сервис 4 на самом верху иерархии, но без аннотации @Host: {{serv4 ? serv4.message : 'Сервис не найден'}}</p>
    <p>Сервис сообщений <button (click)="message.getMessage()">АУ</button> <button (click)="message2.getMessage()">Ай</button> </p>
  </div>`,
  providers: [Serv2Service,
    {provide: MessageService,
    useFactory: injectAUFactory,
   },
    {provide: AnotherMessage,
    useFactory: injectAIFactory,
    }]
})
export class ChildComponent{

  constructor(
    @Optional() @Host() public serv1: Serv1Service,
    @Optional() @Host() public serv2: Serv2Service,
    @Optional() @Host() public serv3: Serv3Service,
    @Optional() public serv4: Serv4Service,
    public message: MessageService,
    @Inject(AnotherMessage) public message2: MessageService
            ) { }

}
