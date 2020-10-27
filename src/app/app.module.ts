import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.page';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: NotesComponent},
  { path: 'notes/:id', component: NoteComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
