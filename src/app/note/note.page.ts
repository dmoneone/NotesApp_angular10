import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../notes/notes.component';
import { NotesService } from '../shared/services/notes.service';

@Component({
    selector: 'app-note-page',
    styleUrls: ['./note.page.scss'],
    templateUrl: './note.page.html'
})
export class NoteComponent implements OnInit {
    public note: Note | null = null;
    public currentId: string;
    constructor(
        private notesService: NotesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.currentId = params.id;
        });

        this.notesService.getNote(this.currentId).subscribe(data => this.note = data.note);
    }

    public removeNote(): void {
        this.notesService.deleteNote(this.currentId).subscribe(() => this.router.navigate(['..']));
    }
}

