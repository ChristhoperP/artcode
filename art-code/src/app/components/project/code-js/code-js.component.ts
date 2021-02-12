import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-code-js',
  templateUrl: './code-js.component.html',
  styleUrls: ['./code-js.component.scss']
})
export class CodeJsComponent implements OnInit {

  @Output() changeJS = new EventEmitter();
  public content:any;

  constructor() { }

  ngOnInit(): void {
  }

  emitChange(){
    this.changeJS.emit( this.content );
  }
}
