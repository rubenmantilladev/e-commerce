import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu1 = false;
  showMenu2 = false;

  openMenu1() {
    this.showMenu1 = !this.showMenu1;
    if (this.showMenu2) {
      this.showMenu2 = false;
    }
  }

  openMenu2() {
    this.showMenu2 = !this.showMenu2;
    if (this.showMenu1) {
      this.showMenu1 = false;
    }
  }

  userMenu = [
    {
      name: 'Iniciar Sesión',
      link: '/auth/login',
      icon: 'assets/images/icons/icon-login.svg',
    },
    {
      name: 'Registrarme',
      link: '/auth/register',
      icon: 'assets/images/icons/icon-user.svg',
    },
    {
      name: 'Mi Perfil',
      link: '/auth/profile',
      icon: 'assets/images/icons/icon-profile.svg',
    },
  ];

  cartMenu = [
    {
      name: 'Mi carrito',
      link: '/cart',
      icon: 'assets/images/icons/icon-in-cart.svg',
    },
    {
      name: 'Lista de deseos',
      link: '/wishlist',
      icon: 'assets/images/icons/icon-wishlist.svg',
    },
  ];
}
