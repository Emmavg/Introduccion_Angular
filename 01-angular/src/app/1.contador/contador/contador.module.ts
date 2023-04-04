import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent,
    ],
    imports: [
        // Nos aporta librerias como ngIf o ngFor
        CommonModule 
    ]
})

export class ContadorModule{}