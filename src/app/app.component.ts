import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ghar-ka-sathi';
  isLoading = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    // Subscribe to loading state changes
    this.loadingService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
