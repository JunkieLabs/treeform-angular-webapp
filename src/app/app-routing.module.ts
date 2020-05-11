import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BlankContainerComponent } from './ui/container/blank-container/blank-container.component';


const routes: Routes = [

  {
    path: "",
    redirectTo:"contact-us",
    pathMatch:"full"
  },
  {
    path: "",
    component: BlankContainerComponent,
    children: [
      {
        path: "angular",
        loadChildren: ()=>import('./ui/components/angular-default/angular-default.module').then(m=>m.AngularDefaultModule)
      },
      {
        path: "contact-us",
        loadChildren: ()=>import('./ui/components/contact-us/contact-us.module').then(m=>m.ContactUsModule)
      }
    ]
  }
];

const ROOT_ROUTING: ModuleWithProviders = RouterModule.forRoot(
  routes,

  {
    preloadingStrategy: PreloadAllModules,
    useHash: false,
    enableTracing: false,
    scrollPositionRestoration: "top"
  }
);

@NgModule({
  imports: [ROOT_ROUTING],
  exports: [RouterModule]
})
export class AppRoutingModule { }
