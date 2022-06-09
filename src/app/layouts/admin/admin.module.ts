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
import { CreateComponent } from "../../pages/admin/create/create.component";
import { LoginComponent } from "../../pages/admin/login/login.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { AuthService } from "../../services/auth.service";
import { HomeComponent } from "../../pages/admin/home/home.component";
import { LocalStorageService } from "../../services/local-storage.service";
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
import { ProductService } from "../../services/product.service";
import { HttpClientModule } from "@angular/common/http";
import { PanelMenuModule } from "primeng/panelmenu";
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { SplitButtonModule } from "primeng/splitbutton";

@NgModule({
  declarations: [
    AdminComponent,
    CreateComponent,
    LoginComponent,
    SideBarComponent,
    HomeComponent,
    ToolbarComponent
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
    SplitButtonModule
  ],
  providers: [
    AuthService,
    MessageService,
    LocalStorageService,
    ProductService,
    ConfirmationService
  ]
})
export class AdminModule { }
