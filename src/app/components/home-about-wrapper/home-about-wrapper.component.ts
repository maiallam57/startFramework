import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-about-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './home-about-wrapper.component.html',
  styleUrl: './home-about-wrapper.component.css'
})
export class HomeAboutWrapperComponent {

  @Input() ComponentName!: string;
  @Input() ComponentContent!: string;
}
