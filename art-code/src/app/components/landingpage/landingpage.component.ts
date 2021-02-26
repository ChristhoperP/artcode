import { Component, Input, OnInit } from '@angular/core';
import { ComunicationserviceService } from "../../services/comunicationservice.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  public anima:Array<boolean> = [];

  constructor(public comunicationserviceService: ComunicationserviceService) { }

  ngOnInit(): void {
  }

  

}
