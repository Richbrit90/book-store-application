# BookStoreApplication

Application Modules:

1. Components

2. NgRx state management using selectore, Action, Reducer and Effects.

##Login Component:[Username: test@test.com, password: test]

Admin can login with the above mentioned username and password.

HttpClientInMemoryWebApiModule is used to mock the backend.It returns token of the admin. Upon successful logon, the token is stored in the state.

Incase of incorrect username and password combination , error is thrown and the same is also set in the state.

## Book-List Component:

Upon successful Authentication, admin is navigated to the book store where he can view list of books displayed.On click of the book, the admin can view the detils of the book.

HttpClientInMemoryWebApiModule is used to mock the backend.

An event is dispatched from the component to fetch the books and store it in the state.

On click of the book, the details of the book are fetched from the state.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
