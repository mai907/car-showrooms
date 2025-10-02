import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from '../../shared/components/form/form.component';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log('Logging in with:', credentials);
      // Call backend API here
    } else {
      this.loginForm.markAllAsTouched(); // show errors if form invalid
    }
  }
}
