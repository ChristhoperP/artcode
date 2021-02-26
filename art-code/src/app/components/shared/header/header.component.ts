import { Component, OnInit } from '@angular/core';
import { ComunicationserviceService } from 'src/app/services/comunicationservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged:boolean = true;

  constructor(public comunicationserviceService: ComunicationserviceService) { }

  ngOnInit(): void {
  }

}
