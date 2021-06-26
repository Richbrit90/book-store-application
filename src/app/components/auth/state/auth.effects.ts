import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { loginStart, loginSuccess, setErrorMessage } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from "../../../services/auth.service";
import { User } from "../../../models/user.model";


@Injectable()
export class AuthEffects {


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            if (action.email !== data.email) {
              throw new Error('EMAIL_NOT_FOUND');
              this.store.dispatch(setErrorMessage({ message: 'EMAIL_NOT_FOUND' }));
            }
            if(action.password !== data.password) {
              throw new Error('INCORRECT_PASSWORD');
              this.store.dispatch(setErrorMessage({ message: 'INCORRECT_PASSWORD' }));
            }
            this.store.dispatch(setErrorMessage({ message: ''}));
            const user = new User(data.email, data.token);
            return loginSuccess({ user });
          }),
          catchError(() => {
            const errorResponse = { status: 400, message: 'EMAIL_PASSOWRD_COMBINATION WRONG' };
            const errorMessage = this.authService.getErrorMessage(
              errorResponse.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          this.router.navigate(['/book-list']);
        })
      );
    },
    { dispatch: false }
  );
}
