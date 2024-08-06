import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { FloatingInputComponent } from "../floating-input/floating-input.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, FloatingInputComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  ComponentName: string = 'Contact section';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact');
  }
}
