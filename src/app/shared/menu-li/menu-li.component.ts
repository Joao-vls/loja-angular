import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-li',
  standalone: true,
  imports: [],
  templateUrl: './menu-li.component.html',
  styleUrl: './menu-li.component.css'
})
export class MenuLiComponent {

  @Input()
  item:string[][]=[]

}
