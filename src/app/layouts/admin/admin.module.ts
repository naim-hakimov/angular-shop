import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from "primeng/api";
import { PasswordModule } from "primeng/password";

import { AdminRoutingModule } from "./admin.routing.module";
import { AdminComponent } from './admin.component';
import { CreateComponent } from "../../components/modals/create/create.component";
import { LoginComponent } from "../../pages/admin/login/login.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { AuthService } from "../../_services/auth.service";
import { HomeComponent } from "../../pages/admin/home/home.component";
import { LocalStorageService } from "../../_services/local-storage.service";
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";
import { FileUploadModule } from "primeng/fileupload";
import { RippleModule } from "primeng/ripple";
import { DialogModule } from "primeng/dialog";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputNumberModule } from "primeng/inputnumber";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { RatingModule } from "primeng/rating";
import { ProductService } from "../../_services/product.service";
import { HttpClientModule } from "@angular/common/http";
import { PanelMenuModule } from "primeng/panelmenu";
import { SplitButtonModule } from "primeng/splitbutton";
import { FileService } from "../../_services/file.service";
import { UsersComponent } from "../../pages/admin/users/users.component";

@NgModule({
  declarations: [
    AdminComponent,
    CreateComponent,
    LoginComponent,
    SideBarComponent,
    HomeComponent,
    UsersComponent
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
    InputTextModule,
    ToolbarModule,
    TableModule,
    FileUploadModule,
    RippleModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    RatingModule,
    HttpClientModule,
    PanelMenuModule,
    SplitButtonModule,
  ],
  providers: [
    AuthService,
    MessageService,
    LocalStorageService,
    ProductService,
    ConfirmationService,
    FileService
  ]
})
export class AdminModule { }
