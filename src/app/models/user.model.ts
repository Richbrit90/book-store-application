export class User {
   email: string;
   token: string;
   password: string;

  constructor(
    email?: string,
    token?: string,
    password?: string,
  ) {
    this.token = token;
    this.email = email;
    this.password = password;
  }
}
