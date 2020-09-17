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
    this.categories = this.productsService.getCategories();
  }

  closeSidebar  = (e) => {
    // required target to be sidebar because stopPropagation was not working
    e.target === this.sidebar 
    ?
    this.sidebar.classList.remove('active')
    :
    null
  }

  ngOnInit() {
    this.sidebar = document.getElementById('sidebar'); 
  }

}
