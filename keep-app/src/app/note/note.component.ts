import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../models/note';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input()
  notes?:Note[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
