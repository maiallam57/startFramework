import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  ComponentName: string = 'About component';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('About');
  }
}
