import { NgModule } from '@angular/core';

//En esta seccion se importaran todos los modulos a usarse por Angular!
//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    //MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    PanelMenuModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimeNgModule { }
