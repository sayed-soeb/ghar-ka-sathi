import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuActive: boolean = false;
  dropdownActive: boolean = false; // New flag for dropdown
  isLoggedIn: boolean = false;
  username: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isLoggedIn = true;
      this.username = localStorage.getItem('username');
    }
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive; // Toggle dropdown
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
