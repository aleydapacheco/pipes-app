import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basicsPage.component.html',
  styleUrls: ['./basicsPage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicsPageComponent { 

  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = "FernanDO HerrERA"

  public customDate: Date = new Date();
}
