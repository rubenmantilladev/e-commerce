import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  template: '<section class="container-section divider"></section>',
  styles: [
    `
      .divider {
        height: 1px;
        background: var(--c-1-a);
        opacity: 0.05;
      }
    `,
  ],
})
export class DividerComponent {}
