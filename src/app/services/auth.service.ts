import { User } from './../models/user.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'api/user/';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }


  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_PASSOWRD_COMBINATION WRONG':
        return 'Email or Password Incorrect';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }
}
