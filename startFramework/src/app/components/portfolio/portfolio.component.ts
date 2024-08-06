import { Component, OnInit } from '@angular/core';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';
import { TitleComponent } from "../title/title.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent, TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  ComponentName: string = 'portfolio component';
  imageUrlList: string[] = [
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png'
  ]


  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Portfolio');
  }

}
