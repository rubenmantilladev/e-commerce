import { Component } from '@angular/core';
import { Menu } from '../../models/cartMenu.model';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userMenu: Menu[] = [
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

  cartMenu: Menu[] = [
    {
      name: 'Mi carrito',
      icon: 'assets/images/icons/icon-in-cart.svg',
    },
    {
      name: 'Lista de deseos',
      icon: 'assets/images/icons/icon-wishlist.svg',
    },
  ];
}
