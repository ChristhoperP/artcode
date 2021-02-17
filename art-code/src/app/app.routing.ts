import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

//Import components
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { ProjectComponent } from "./components/project/project.component";
import { SnippetComponent } from "./components/snippet/snippet.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { MyUnitComponent } from "./components/my-unit/my-unit.component";

//Path array
const appRoutes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'home', component: LandingpageComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'create-project', component: ProjectComponent},
    {path: 'create-snippet', component: SnippetComponent},
    {path: 'user/profile', component: ProfileComponent},
    {path: 'my-unit', component: MyUnitComponent},
    {path: '**', component: LandingpageComponent}
];

//Export module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);