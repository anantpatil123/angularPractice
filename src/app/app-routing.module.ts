import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";


const routes : Routes = [
    {
        path:'',pathMatch:'full',component:HomeComponent
    },
    {
        path:'home',pathMatch:'full',component:HomeComponent
    },
    {
        path:'login',pathMatch:'full',component:LoginComponent
    },
    {
        path:'**',pathMatch:'full',component:PageNotFoundComponent
    }

]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}