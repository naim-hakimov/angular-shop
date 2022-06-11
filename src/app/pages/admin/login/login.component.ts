import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../../../_services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { catchError, Subject, takeUntil } from "rxjs";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";

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
    private router: Router,
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
    const { email, password } = this.form.value;
    this.authService.login(email, password)
      .pipe(
        catchError(err => {
          this.messageService.add({severity: 'error', summary: 'error', detail: err});
          this.disabled = false;
          throw err
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.disabled = false;
        this.messageService.add({severity: 'success', summary: 'success', detail: 'Welcome'});
        setTimeout(() => this.router.navigate(['admin']), 1000)
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
