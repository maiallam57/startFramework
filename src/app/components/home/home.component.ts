import { Component } from '@angular/core';
import { HomeAboutWrapperComponent } from "../home-about-wrapper/home-about-wrapper.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeAboutWrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pContent: string = "Graphic Artist - Web Designer - Illustrator"

}
