import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name:   'Superman',
      canFly: true,
      color:  Color.blue,
    },
    {
      name:   'Batman',
      canFly: false,
      color:  Color.green,
    },
    {
      name:   'Linterna Verde',
      canFly: true,
      color:  Color.yellow,
    },
    {
      name:   'Iron Man',
      canFly: true,
      color:  Color.red,
    },
    {
      name:   'Thor',
      canFly: true,
      color:  Color.black,
    },
    {
      name:   'Capitan America',
      canFly: false,
      color:  Color.blue,
    }
]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
    console.log(this.isUpperCase);
  }

  changeOrder( value: keyof Hero ){
    this.orderBy = value;
  }

}
