import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss'],
})
export class DefaultFooterComponent extends FooterComponent {
  constructor(private router: Router) {
    super();
  }
 
}
