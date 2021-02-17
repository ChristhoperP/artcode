import { Component, OnInit } from '@angular/core';
import { ComunicationserviceService } from 'src/app/services/comunicationservice.service';

@Component({
  selector: 'app-my-unit',
  templateUrl: './my-unit.component.html',
  styleUrls: ['./my-unit.component.scss']
})
export class MyUnitComponent implements OnInit {

  public folders:Array<string> = ["Folder 1", "Folder 2", "Folder 3", "Folder 4", "Folder 5"]

  constructor(public comunicationserviceService: ComunicationserviceService) { }

  ngOnInit(): void {
  }

}
