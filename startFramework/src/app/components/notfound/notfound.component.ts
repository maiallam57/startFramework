import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  ComponentName: string = 'Oops!'

}
