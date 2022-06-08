import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { catchError, Subject, takeUntil } from "rxjs";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public disabled = false;
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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  public submit(): void {
    this.disabled = true;
    const formValue = this.form.value;
    console.log(formValue)
    this.authService.login(formValue.email, formValue.password)
      .pipe(
        catchError(err => {
          this.messageService.add({severity: 'error', summary: 'error', detail: err});
          this.disabled = false;
          throw err
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(res => {
        this.disabled = false;
        this.messageService.add({severity: 'success', summary: 'success', detail: 'Welcome'});
      })

  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
