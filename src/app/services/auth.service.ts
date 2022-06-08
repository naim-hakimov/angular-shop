import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { from, Observable } from "rxjs";

@Injectable()
export class AuthService {
  constructor(
    private angularAuth: AngularFireAuth
  ) {}

  public login(email: string, password: string): Observable<any> {
    return from(this.angularAuth.signInWithEmailAndPassword(email, password));
  }

  public logout(): Observable<any> {
    return from(this.angularAuth.signOut());
  }
}
