import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {LogService} from './log.service';

interface NoteBody {
    title: string;
    descr: string;
}

@Injectable()
export class NotesService {
    private baseUrl = `http://localhost:3005/api/`;

    constructor(private logService: LogService, private http: HttpClient){}

    getNotes(): Observable<any> {
        return this.http.get(`${this.baseUrl}notes`);
    }

    createNote(noteBody: NoteBody): Observable<any> {
        return this.http.post(`${this.baseUrl}notes`, noteBody);
    }

    getNote(id: string): Observable<any> {
        return this.http.get(`${this.baseUrl}notes/${id}`);
    }

    deleteNote(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}notes/${id}`);
    }
}
