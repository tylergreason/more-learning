import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    // sidebar; 
  constructor(
  ) { }


  toggleSidebar = () => {
      this.sidebar.classList.toggle('active'); 
  }

  ngOnInit() {
      this.sidebar = document.getElementById('sidebar'); 
  }

}
