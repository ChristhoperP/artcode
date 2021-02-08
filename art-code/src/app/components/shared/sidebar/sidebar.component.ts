import { Component, Renderer2 , OnInit } from '@angular/core';
import { ComunicationserviceService } from "../../../services/comunicationservice.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  activo = true

  constructor(private renderer: Renderer2, public comunicationserviceService: ComunicationserviceService) { }

  ngOnInit(): void {
  }

}
