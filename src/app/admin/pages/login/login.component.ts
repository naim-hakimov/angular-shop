import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  private destroy$: Subject<any> = new Subject<any>();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: [null],
      password: [null]
    })
  }

  public submit(): void {
    const formValue = this.form.value;
    console.log(formValue)
    this.authService.login(formValue.email, formValue.password)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        console.log(res);
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
