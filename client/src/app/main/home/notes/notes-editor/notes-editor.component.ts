import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { toHTML } from 'ngx-editor';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.scss']
})
export class NotesEditorComponent implements OnInit, OnDestroy {

  editor: Editor;
  html: '';
  // const html = toHTML(jsonDoc, schema); // schema is optional

  ngOnInit(): void {
    this.editor = new Editor();
    this.editor.commands
  .textColor('red')
  .insertText('Hello world!')
  .focus()
  .scrollIntoView()
  .exec();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
