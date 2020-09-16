import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { 

  }


  closeSidebar  = () => {
    this.sidebar.classList.remove('active');
  }

  ngOnInit() {
    this.sidebar = document.getElementById('sidebar'); 
  }

}
