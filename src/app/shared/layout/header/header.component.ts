import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 userExist = true;
 userName = " ";
 dropdownOpen = false;
  constructor(private authService:AuthService){}

   ngOnInit(){
    this.userExist = this.authService.isLoggedIn();
    this.userName = this.authService.getUser()?.username
  }
    toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(){
    this.authService.logout();
     this.userExist = false;
      this.userName = '';
       this.dropdownOpen = false; 
  }
}
