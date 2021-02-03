import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

//Import components
import { LandingpageComponent } from "./components/landingpage/landingpage.component";

//Path array
const appRoutes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'home', component: LandingpageComponent},
    {path: '**', component: LandingpageComponent}
];

//Export module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);