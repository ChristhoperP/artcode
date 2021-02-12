import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-code-css',
  templateUrl: './code-css.component.html',
  styleUrls: ['./code-css.component.scss']
})
export class CodeCssComponent implements OnInit {

  @Output() changeCSS = new EventEmitter();
  public content:any;

  constructor() { }

  ngOnInit(): void {
  }

  emitChange(){
    this.changeCSS.emit( this.content );
  }

}
