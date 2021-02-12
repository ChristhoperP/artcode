import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-code-html',
  templateUrl: './code-html.component.html',
  styleUrls: ['./code-html.component.scss']
})
export class CodeHtmlComponent implements OnInit {

  @Output() changeHtml = new EventEmitter();
  public content:any;

  constructor() { }

  ngOnInit(): void {
  }

  emitChange(){
    this.changeHtml.emit( this.content );
  }

}
