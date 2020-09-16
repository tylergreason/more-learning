import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories;  
  constructor(
      private productsService: ProductsService,
  ) { 

  }

  closeSidebar  = () => {
    this.sidebar.classList.remove('active');
  }

  ngOnInit() {
    this.sidebar = document.getElementById('sidebar'); 
    this.categories = this.productsService.getCategories();
    this.categories.forEach(cat => {
        console.log(cat);
        cat.forEach(c => console.log(c))
        
        cat.subCategories = cat["sub-categories"]

    })
  }

}
