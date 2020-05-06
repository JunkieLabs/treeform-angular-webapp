import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BlankContainerComponent } from './ui/container/blank-container/blank-container.component';
import { WebappContainerComponent } from './ui/container/webapp-container/webapp-container.component';


const routes: Routes = [

  // {
  //   path: "",
  //   redirectTo:"angular",
  //   pathMatch:"full"
  // },
  {
    path: "angular",
    component: BlankContainerComponent,
    children: [
      {
        path: "",
        loadChildren: ()=>import('./ui/components/angular-default/angular-default.module').then(m=>m.AngularDefaultModule)
      }
    ]
  },
  {
    path: "",
    component: WebappContainerComponent,
    children: [
      {
        path: "test",
        loadChildren: ()=>import('./ui/components/test/test.module').then(m=>m.TestModule)
      },
      {
        path: "",
        loadChildren: ()=>import('./ui/components/angular-default/angular-default.module').then(m=>m.AngularDefaultModule)
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
