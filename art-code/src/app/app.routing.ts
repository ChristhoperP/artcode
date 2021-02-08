import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

//Import components
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";

//Path array
const appRoutes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'home', component: LandingpageComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: '**', component: LandingpageComponent}
];

//Export module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);