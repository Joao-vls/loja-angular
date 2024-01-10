import { Component, Input } from '@angular/core';
import { MenuLiComponent } from '../menu-li/menu-li.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuLiComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input()
  item:string[][]=[]
}
