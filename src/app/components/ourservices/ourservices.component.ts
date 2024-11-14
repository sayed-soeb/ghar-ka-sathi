import { Component } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css'
})
export class OurservicesComponent {
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
      image: 'assets/images/cleaning1.png'
    },
    {
      title: 'Electric Service',
      description: 'Expert electrical services for all your needs.',
      image: 'assets/images/ele.png'
    },
    {
      title: 'Home Renovation',
      description: 'Complete home renovation and remodeling.',
      image: 'https://www.svgrepo.com/show/494592/house-renovation.svg'
    },
    {
      title: 'Buy, Sell & Rent',
      description: 'Real estate services for buying, selling, and renting.',
      image: 'https://www.svgrepo.com/show/308019/property-manager-landlord-executive-ceo.svg'
    },
    {
      title: 'Pest Control & Disinfection',
      description: 'Keep your home safe from pests and germs.',
      image: 'https://www.svgrepo.com/show/326346/spraying.svg'
    },
    {
      title: 'Packers & Movers',
      description: 'Hassle-free moving services.',
      image: 'https://www.svgrepo.com/show/131879/moving.svg'
    },
    {
      title: 'Plumbing',
      description: 'Real estate services for buying, selling, and renting.',
      image: 'https://www.svgrepo.com/show/308019/property-manager-landlord-executive-ceo.svg'
    },
    {
      title: 'Carpentry',
      description: 'Keep your home safe from pests and germs.',
      image: 'https://www.svgrepo.com/show/326346/spraying.svg'
    },
    {
      title: 'Painting',
      description: 'Hassle-free moving services.',
      image: 'https://www.svgrepo.com/show/131879/moving.svg'
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
