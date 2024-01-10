import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component'
import { FooterComponent } from '../../shared/footer/footer.component';
import { CarrosselLateralComponent } from '../../shared/carrossel-lateral/carrossel-lateral.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CarrosselLateralComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
