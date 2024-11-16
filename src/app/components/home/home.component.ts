import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentSlide = 0;
  interval: any;

  slides = [
    {
      image: 'assets/images/cleaning.jpg',
      title: 'Service One',
      description: 'Description for service one.'
    },
    {
      image: 'assets/images/home.jpg',
      title: 'Service Two',
      description: 'Description for service two.'
    },
    {
      image: 'assets/images/buy.jpg',
      title: 'Service Three',
      description: 'Description for service three.'
    },
    // Add more slides as needed
  ];

  services = [
    {
      title: 'Cleaning Service',
      description: 'Professional cleaning for homes and offices.',
      image: 'assets/images/cleaning.png'
    },
    {
      title: 'Electric Service',
      description: 'Expert electrical services for all your needs.',
      image: 'assets/images/plugin.png'
    },
    {
      title: 'Home Renovation',
      description: 'Complete home renovation and remodeling.',
      image: 'assets/images/renovation.png'
    },
    {
      title: 'Buy, Sell & Rent',
      description: 'Real estate services for buying, selling, and renting.',
      image: 'assets/images/for-sale.png'
    },
    {
      title: 'Pest Control & Disinfection',
      description: 'Keep your home safe from pests and germs.',
      image: 'assets/images/pest-control.png'
    },
    {
      title: 'Packers & Movers',
      description: 'Hassle-free moving services.',
      image: 'assets/images/shipping.png'
    },
    {
      title: 'Plumbing',
      description: 'Real estate services for buying, selling, and renting.',
      image: 'assets/images/plumbing.png'
    },
    {
      title: 'Carpentry',
      description: 'Keep your home safe from pests and germs.',
      image: 'assets/images/hand-saw.png'
    },
    {
      title: 'Painting',
      description: 'Hassle-free moving services.',
      image: 'assets/images/paint-roller.png'
    }
  ];

  getServiceRoute(title: string): string {
    switch (title) {
      case 'Cleaning Service': return '/cleaning-service';
      case 'Electric Service': return '/electric-service';
      case 'Home Renovation': return '/home-renovation';
      case 'Buy, Sell & Rent': return '/buy-sell-rent';
      case 'Pest Control & Disinfection': return '/pest-control';
      case 'Packers & Movers': return '/packers-movers';
      case 'Plumbing': return '/plumbing';
      case 'Painting': return '/painting';
      case 'Carpentry': return '/carpentry';
      default: return '/';
    }
  }

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  }

  stopSlider() {
    clearInterval(this.interval);
  }

  pauseSlider() {
    this.stopSlider();
  }

  resumeSlider() {
    this.startSlider();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

}
