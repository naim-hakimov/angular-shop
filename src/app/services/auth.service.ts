import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { from, Observable, tap, } from "rxjs";
import { getAuth } from "@angular/fire/auth";
import firebase from "firebase/compat";
import { User } from "@firebase/auth";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class AuthService {
  constructor(
    private angularAuth: AngularFireAuth,
    private localStorageService: LocalStorageService,
  ) {}

  public login(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.angularAuth.signInWithEmailAndPassword(email, password))
      .pipe(tap(() => {
        const userData = this.getAuth();
        this.localStorageService.set('userData', userData)
      }))
  }

  public logout(): Observable<any> {
    localStorage.clear();
    return from(this.angularAuth.signOut());
  }

  public getAuth(): User | null {
    return getAuth().currentUser;
  }

}
