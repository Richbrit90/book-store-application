import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from "./auth.routing.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
