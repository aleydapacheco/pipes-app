import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommonPage.component.html',
  styleUrls: ['./uncommonPage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncommonPageComponent {
   //i18nSelect
   public name: string = 'Fernando';
   public gender: 'male' | 'female' = 'male';
   public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
   }

   changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
   }

   //i18nPlural
   public clients: string[] = ['Maria','Eduardo','Melissa','Pedro','Sandra'];
   public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.',
   }

   deleteClient():void {
      this.clients.shift();
   }

   //KeyValue Pipe
   public person = {
    name: 'Fernando',
    age: 36,
    address: "Ottawa, Canada",
   }

   public myObservableTimer: Observable<number>= interval(2000).pipe(
    tap( value => console.log('tap:', value))
   );

   public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500);
   })

 }
