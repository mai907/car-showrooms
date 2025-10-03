import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private authService:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
    this.authService.login(credentials.username, credentials.password).subscribe({
      next: (res) => {
        this.router.navigate(['/showroom']); 
      },
      error: (err) => {
             let error = err?.error?.message as string
        console.error('Error happened', err);
        this.toastService.show(error || "Somthing went wrong", 'error');
      }    

})} else {
      this.loginForm.markAllAsTouched(); 
    }
  }

}
