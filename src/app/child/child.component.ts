import {Component, Host, OnInit, Optional} from '@angular/core';
import {Serv2Service} from '../serv2.service';
import {Serv1Service} from '../serv1.service';
import {Serv3Service} from '../serv3.service';

@Component({
  selector: 'app-child',
  template: `<div>
    <p>Сервис 1 в родительском компоненете {{serv1 ? serv1.message : 'Сервис не найден'}}</p>
    <p>Сервис 2 в этом компоненте {{serv2 ? serv2.message : 'Сервис не найден'}}</p>
    <p>Сервис 3 во вью провайдере родительского компонента {{serv3 ? serv3.message : 'Сервис не найден'}}</p>
  </div>`,
  providers: [Serv2Service]
})
export class ChildComponent implements OnInit {

  constructor(
    @Optional() @Host() public serv1: Serv1Service,
    @Optional() @Host() public serv2: Serv2Service,
    @Optional() @Host() public serv3: Serv3Service
            ) { }

  ngOnInit(): void {
  }

}
