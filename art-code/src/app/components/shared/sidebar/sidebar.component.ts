import { Component, Renderer2 , OnInit } from '@angular/core';
import { ComunicationserviceService } from "../../../services/comunicationservice.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  activo = true

  
  constructor(private renderer: Renderer2, private comunicationserviceService: ComunicationserviceService) { }

  //sidebar:any = this.el.nativeElement.querySelector("")

  ngOnInit(): void {
  }

  activation(){
    this.activo = !this.activo
    this.comunicationserviceService.activo = !this.comunicationserviceService.activo
  }

}
