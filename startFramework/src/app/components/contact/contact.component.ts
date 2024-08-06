import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { FloatingInputComponent } from "../floating-input/floating-input.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, FloatingInputComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ComponentName: string = 'Contact section'
}
