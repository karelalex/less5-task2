import {MessageService} from './message.service';
import {InjectionToken} from '@angular/core';

export const injectAUFactory = () => {
  return new MessageService('AU');
};

export const injectAIFactory = () => {
  return new MessageService('Ай');
};

export const AnotherMessage = new InjectionToken<MessageService>('AIMessageService');
