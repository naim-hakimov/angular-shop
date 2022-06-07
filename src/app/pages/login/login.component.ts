import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  private destroy$: Subject<any> = new Subject<any>();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required, Validators.minLength(6)]
    })
  }

  public submit(): void {
    // const formValue = this.form.value;
    // console.log(formValue)
    // this.authService.login(formValue.email, formValue.password)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(res => {
    //     console.log(res);
    //   })

    this.messageService.add({severity:'error', summary: 'Success', detail: 'Message Content'})
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
