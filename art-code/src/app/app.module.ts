import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from "./app.routing";

import { SafeURLPipe } from "./pipes/safe-url.pipe";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CodeHtmlComponent } from './components/project/code-html/code-html.component';
import { ProjectComponent } from './components/project/project.component';

import { HighlightJsModule } from 'ngx-highlight-js';

import { FormsModule } from "@angular/forms";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { CodeCssComponent } from './components/project/code-css/code-css.component';
import { CodeJsComponent } from './components/project/code-js/code-js.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { MyUnitComponent } from './components/my-unit/my-unit.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { PlansComponent } from './components/plans/plans.component';
import { SharedWithMeComponent } from './components/shared-with-me/shared-with-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    FooterComponent,
    SidebarComponent,
    SignUpComponent,
    SignInComponent,
    CodeHtmlComponent,
    ProjectComponent,
    CodeCssComponent,
    CodeJsComponent,
    SafeURLPipe,
    ProfileComponent,
    MyUnitComponent,
    SnippetComponent,
    PlansComponent,
    SharedWithMeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HighlightJsModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
