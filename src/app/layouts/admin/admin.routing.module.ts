import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "../../pages/login/login.component";
import { CreateComponent } from "../../pages/create/create.component";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create',
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
