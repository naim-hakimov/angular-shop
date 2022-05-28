import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from "./admin.routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { AuthService } from "./services/auth.service";
import { CreateComponent } from './pages/create/create.component';
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ProductService } from "./services/product.service";
import { HttpClientModule } from "@angular/common/http";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { FileService } from "./services/file.service";

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [AuthService, ProductService, FileService]
})

export class AdminModule { }
