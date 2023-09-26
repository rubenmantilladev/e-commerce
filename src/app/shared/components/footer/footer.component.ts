import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public footerData = [
    {
      title: 'Contáctanos',
      links: [
        'Contacto',
        'Preguntas frecuentes',
        'Términos y condiciones',
        'Políticas de privacidad',
      ],
    },
    {
      title: 'Sobre nosotros',
      links: [
        '¿Quiénes somos?',
        'Nuestros servicios',
        'Nuestros clientes',
        'Nuestros aliados',
      ],
    },
    {
      title: 'Redes sociales',
      links: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Youtube'],
    },
    {
      title: 'Cuenta',
      links: [
        'Perfil de usuario',
        'Iniciar sesión',
        'Registrarse',
        'Recuperar contraseña',
      ],
    },
  ];

  public tagsProducts = [
    'Zapatillas',
    'Bicicleta',
    'Cascos',
    'Ropa',
    'Accesorios',
    'Camisas',
    'Pantalones',
    'Gorras',
    'Guantes',
    'Gafas',
    'Mochilas',
    'Cascos',
    'Candados',
    'Luces',
    'Cascos',
  ];

  public currentYear = new Date().getFullYear();
}
