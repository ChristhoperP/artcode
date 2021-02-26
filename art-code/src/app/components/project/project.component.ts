import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ComunicationserviceService } from 'src/app/services/comunicationservice.service';

const TYPE_CSS = 'text/css'
const TYPE_JS = 'text/javascript'
const TYPE_HTML = 'text/html'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  public html:string = `<p>Hola mundo</p>`;
  public css:string = `p{
                          color: blue;
                      }`;
  public js:string = `function hola() {
                          alert("Hola mundo")
                      }`;
  public url:any;
  
  constructor(
    private sanitizer: DomSanitizer,
    public comunicationserviceService: ComunicationserviceService
  ) { this.updatePage() }

  ngOnInit(): void {
    this.comunicationserviceService.proyect_snippet = true;
  }

  ngOnDestroy(): void{
    this.comunicationserviceService.proyect_snippet = false;
  }

  getBlob(code, type){
    let blob = new Blob([code], {type})
    return URL.createObjectURL(blob);
  }

  getURL(html, css, js){
    const css_url = this.getBlob(css, TYPE_CSS);
    const js_url = this.getBlob(js, TYPE_JS);

    const page = `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    ${css && `<link rel="stylesheet" href="${css_url}">`}
                </head>
                <body>
                    ${html || ''}
                    ${js && `<script src="${js_url}"></script>`}
                </body>
                </html>`
    
    return this.getBlob(page, TYPE_HTML)
  }

  updatePage(){
    this.url = this.getURL(this.html, this.css, this.js);
  }

  getSafeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
