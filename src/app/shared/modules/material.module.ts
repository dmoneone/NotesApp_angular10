import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    exports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatListModule,
        MatCardModule
    ]
})
export class MaterialModule { }
