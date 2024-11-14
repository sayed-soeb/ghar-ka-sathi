import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-sell-rent',
  templateUrl: './buy-sell-rent.component.html',
  styleUrls: ['./buy-sell-rent.component.css']
})
export class BuySellRentComponent implements OnInit {
  searchText: string = '';
  selectedType: string = '';
  selectedPriceRange: string = '';
  selectedLocation: string = '';
  selectedSection: string = 'buy';
  selectedListingType: string = 'buy';

  properties: any[] = []; // Hold fetched properties
  filteredProperties: any[] = []; // Copy of properties to apply filters

  propertyData = {
    name: '',
    image: '',
    location: '',
    type: '',
    price: '',
    details: ''
  };

  currentTranslateX: number = 0;
  imageCount: number = 3;  // Number of images in the carousel
  currentIndex: number = 0;
  activeSection: string = '';
  categorySelected: any[] = [];
  
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 0;
  activeSectionOne: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchProperties(); // Fetch properties on component initialization
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageCount;
    this.currentTranslateX = -100 * this.currentIndex;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imageCount) % this.imageCount;
    this.currentTranslateX = -100 * this.currentIndex;
  }

  fetchProperties(): void {
    const apiUrl = 'http://localhost:5000/api/properties';
    axios.get(apiUrl)
      .then(response => {
        this.properties = response.data;
        this.categorySelected = [...this.properties];
        this.filteredProperties = [...this.properties];
        this.totalPages = Math.ceil(this.filteredProperties.length / this.itemsPerPage); // Calculate total pages
        this.currentPage = 1; // Reset to the first page
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  filterProperties(): void {
    this.filteredProperties = this.categorySelected.filter(property => {
      const matchesSearch = !this.searchText || 
        property.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
        property.location.toLowerCase().includes(this.searchText.toLowerCase()) || 
        property.price.includes(this.searchText.toLowerCase());

      const matchesType = !this.selectedType || property.type.toLowerCase() === this.selectedType.toLowerCase();
      const matchesPrice = !this.selectedPriceRange || this.isWithinPriceRange(property.price);
      const matchesLocation = !this.selectedLocation || property.location.toLowerCase() === this.selectedLocation.toLowerCase();
      const matchesListingType = this.selectedSection === 'feature' || 
                                 (this.selectedSection !== 'sell' && property.type.toLowerCase() === this.selectedSection.toLowerCase());

      return matchesSearch && matchesType && matchesPrice && matchesLocation && matchesListingType;
    });

    this.totalPages = Math.ceil(this.filteredProperties.length / this.itemsPerPage);
    this.currentPage = 1; // Reset to the first page after filtering
  }

  isWithinPriceRange(price: string): boolean {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
    if (this.selectedPriceRange === '0-50000') {
      return numericPrice <= 50000;
    } else if (this.selectedPriceRange === '50000-100000') {
      return numericPrice > 50000 && numericPrice <= 100000;
    } else if (this.selectedPriceRange === '100000+') {
      return numericPrice > 100000;
    }
    return true;
  }

  openPropertyDetail(property: any) {
    console.log(property);
    this.router.navigate(['/property-detail'], { state: { property } });
  }

  selectCategory(category: string): void {
    this.activeSectionOne = category;
    if(category === 'all') {
      this.categorySelected = this.properties;
      this.filteredProperties = this.properties;
    } else {
      this.categorySelected = this.properties.filter(item => item?.category?.includes(category));
      this.filteredProperties = [...this.categorySelected];
    }
  }

  selectSection(section: string): void {
    this.selectedSection = section;
    this.activeSection = section;
    console.log(this.activeSection);

    if (section === 'sell') {
      this.filteredProperties = []; // Clear the properties on 'sell'
    } else if (section === 'feature') {
      this.filteredProperties = [...this.categorySelected]; // Show all properties in 'feature'
    } else {
      this.filterProperties(); // Apply filters for 'buy' and 'rent'
    }
  }

  onSubmit(): void {
    alert('Property listed for ' + this.propertyData.type);
    // Logic for saving the property data or submitting to a backend can go here
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.propertyData.image = file; // Handle the selected file
    }
  }
}
