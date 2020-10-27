import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotesService } from './services/notes.service';
import { LogService } from './services/log.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    providers: [
        NotesService,
        LogService
    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
