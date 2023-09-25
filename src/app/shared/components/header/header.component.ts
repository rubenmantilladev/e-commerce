import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
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
      link: '/home',
      icon: 'assets/images/icons/icon-login.svg',
    },
    {
      name: 'Registrarme',
      link: '/product',
      icon: 'assets/images/icons/icon-user.svg',
    },
    {
      name: 'Mi Perfil',
      link: '/contact',
      icon: 'assets/images/icons/icon-profile.svg',
    },
  ];

  cartMenu = [
    {
      name: 'Mi carrito',
      link: '/',
      icon: 'assets/images/icons/icon-cart.svg',
    },
  ];
}
