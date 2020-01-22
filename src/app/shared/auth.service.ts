import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Page, User} from "./classes";
import {Observable, Subscription, throwError} from "rxjs";
import {Auth} from "./interfaces";
import {catchError} from "rxjs/operators";
import {root} from "rxjs/internal-compatibility";

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) { }

  login(user: User): Observable<Auth> {
    return this.http.post<Auth>('https://reqres.in/api/login', {...user})
      .pipe(catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            return throwError("Пользователь с таким Email и Password не найден.");
            break;
        }
      }));
  }

  logout(): void {
    localStorage.removeItem('auth');
  }

  isAuthenticated(): boolean {
    const isAuth = localStorage.getItem('auth');
    if (isAuth) {
      return true;
    } else {
      return false;
    }
  }

  setAuth(auth: Auth): void {
    localStorage.setItem('auth', JSON.stringify({
      token: auth.token,
      id: 4
    }));
  }

  getUserData(): Auth {
    return JSON.parse(localStorage.getItem('auth'));
  }
}
