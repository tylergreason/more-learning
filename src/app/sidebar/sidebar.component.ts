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

  toggleCategory = e => {
    // const targetCategory = this.categories.filter(cat => cat["id"] === parseInt(e.target.id))[0];
    // targetCategory['sub-categories'].forEach(sub => {
    //   const targetEle = document.getElementById(sub.id);
    //   targetEle.hidden = !targetEle.hidden;
    // })
    e.target.classList.toggle('collapsed')
  }

  ngOnInit() {
    this.sidebar = document.getElementById('sidebar'); 
  }

}
