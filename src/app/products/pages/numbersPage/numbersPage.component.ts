
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbersPage.component.html',
  styleUrls: ['./numbersPage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumbersPageComponent {

  public totalSells: number = 5000000.35;
  public percent: number = 78.231;

 }
