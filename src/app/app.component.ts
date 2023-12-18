import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, MatButtonModule, LogoComponent],
})
export class AppComponent {
  @ViewChild('content') contentRef!: ElementRef;

  constructor() {
    afterNextRender(() => {
      let html = `<spline-viewer url="https://prod.spline.design/nvsj2auUhEE7tBme/scene.splinecode"></spline-viewer>`;
      this.contentRef.nativeElement.insertAdjacentHTML('afterend', html);
    });
  }
}
