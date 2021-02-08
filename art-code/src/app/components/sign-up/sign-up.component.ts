import { Component, OnInit } from '@angular/core';
import { ComunicationserviceService } from 'src/app/services/comunicationservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public comunicationserviceService: ComunicationserviceService) { }

  ngOnInit(): void {
  }

}
