import { Component } from '@angular/core';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent, TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  ComponentName: string = 'portfolio component';
  imageUrlList: string[] = [
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png'
  ]
}
