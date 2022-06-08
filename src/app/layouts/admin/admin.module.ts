import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { PasswordModule } from "primeng/password";

import { AdminRoutingModule } from "./admin.routing.module";
import { AdminComponent } from './admin.component';
import { CreateComponent } from "../../pages/create/create.component";
import { LoginComponent } from "../../pages/login/login.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { AuthService } from "../../services/auth.service";
@NgModule({
  declarations: [
    AdminComponent,
    CreateComponent,
    LoginComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CardModule,
    ToastModule,
    PasswordModule,
    InputTextModule
  ],
  providers: [
    AuthService,
    MessageService
  ]
})
export class AdminModule { }
