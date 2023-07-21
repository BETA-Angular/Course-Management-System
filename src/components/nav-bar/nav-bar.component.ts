import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  navbarOpen = false;
  modalOpen = false;
  modal: any;
  navbar: any;

  @HostListener('document:mouseup', ['$event'])
  onGlobalClick(event: MouseEvent) {
    if (!this.modalOpen && !this.modal.contains(event.target as Node) && this.modal.classList.contains('open')) {
      this.modal.classList.remove('open');
    }
    if (!this.navbar.contains(event.target as Node) && this.navbarOpen) {
      this.toggleNavbar();
    }
  }

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
  
}
