import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ComponentName: string = 'Home Component';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Home');
  }
}
