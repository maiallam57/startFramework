import { Component } from '@angular/core';
import { HomeAboutWrapperComponent } from '../home-about-wrapper/home-about-wrapper.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HomeAboutWrapperComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
