import { Component, OnInit } from '@angular/core';
import { ComunicationserviceService } from 'src/app/services/comunicationservice.service';

@Component({
  selector: 'app-shared-with-me',
  templateUrl: './shared-with-me.component.html',
  styleUrls: ['./shared-with-me.component.scss']
})
export class SharedWithMeComponent implements OnInit {

  public folders:Array<string> = ["Folder 1", "Folder 2", "Folder 3", "Folder 4", "Folder 5"]

  constructor(public comunicationserviceService: ComunicationserviceService) { }

  ngOnInit(): void {
  }

}
