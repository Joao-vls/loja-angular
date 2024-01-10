import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { isNumberObject } from 'node:util/types';
import { log } from 'node:console';

@Component({
  selector: 'app-carrossel-lateral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel-lateral.component.html',
  styleUrl: './carrossel-lateral.component.css'
})
export class CarrosselLateralComponent implements OnInit, OnDestroy, AfterViewInit {
  images: string[];
  tempo!: Subscription;
  image: string = ''
  viw: number = 0;
  circo: string[];
  ativa: number = 0;
  constructor(private zone: NgZone) {
    this.images = ['../../../assets/img/1.jpg', '../../../assets/img/2.jpg'];
    this.circo = ['color-changing-div', 'circo'];

  }
  ngAfterViewInit(): void {


  }
  ngOnDestroy(): void {
    this.tempo?.unsubscribe();
  }
  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.timeSlide();
    });
  }
  timeSlide() {
    this.tempo = interval(6000).subscribe(() => {
      this.zone.run(() => {
        this.viw=(this.viw==1) ? 0 : 1;
        this.mudarImagem()
      });
    });

  }
  mudarImagem() {
    this.tempo.unsubscribe();
    this.images.reverse();
    this.circo.reverse();
    this.timeSlide()
  }
  mudarImagemClick(arg0: number) {
    if (arg0 != this.viw) {
      this.viw = arg0;
      this.mudarImagem()
    }
  }

}

