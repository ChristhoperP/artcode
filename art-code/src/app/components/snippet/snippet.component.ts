import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComunicationserviceService } from 'src/app/services/comunicationservice.service';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit, OnDestroy {

  public content:any;

  constructor(public comunicationserviceService: ComunicationserviceService) { }

  ngOnInit(): void {
    this.comunicationserviceService.proyect_snippet = true;
  }

  ngOnDestroy(): void{
    this.comunicationserviceService.proyect_snippet = false;
  }

}
