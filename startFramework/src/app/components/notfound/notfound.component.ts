import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent implements OnInit {
  ComponentName: string = 'Oops!';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('NotFound');
  }

}
