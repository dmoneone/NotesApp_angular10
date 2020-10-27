import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../shared/services/notes.service';

export interface Note {
    title: string;
    descr: string;
    date: string;
    id: string;
}

@Component({
    selector: 'app-notes',
    styleUrls: ['./notes.component.scss'],
    templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
    public FORM_NEW_NOTE_TITLE = 'title' as const;
    public FORM_NEW_NOTE_DESCR = 'descr' as const;
    public notes: Note[];

    private newNoteId = '';

    formGroup: FormGroup;

    constructor(private notesService: NotesService, private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit(): void {
      this.initForm();

      this.notesService.getNotes().subscribe((data) => {
        this.notes = data.notes;
      });
    }

    private initForm(): void {
        this.formGroup = this.formBuilder.group({
            [this.FORM_NEW_NOTE_TITLE]: [
                '',
                Validators.compose([
                ])
            ],
            [this.FORM_NEW_NOTE_DESCR]: [
                '',
                Validators.compose([
                ])
            ],
        });
    }

    public createNote(): void {
        const noteBody = this.formGroup.value;
        this.notesService.createNote(noteBody).subscribe(data => {
            this.newNoteId = data.id;

            const newNote: Note = {
                title: noteBody.title,
                descr: noteBody.descr,
                date: new Date().toDateString(),
                id: this.newNoteId
            };

            this.notes.push(newNote);
        });
    }

    public clearField(filed: string): void {
        this.formGroup.controls[filed].setValue('');
    }

    public navigateToNote(id: string): void {
        this.router.navigate([`notes/${id}`]);
    }
}
