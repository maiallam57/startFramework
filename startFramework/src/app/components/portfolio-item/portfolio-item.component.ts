import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css'
})
export class PortfolioItemComponent {

  @Input() imageurl!: string;
}
