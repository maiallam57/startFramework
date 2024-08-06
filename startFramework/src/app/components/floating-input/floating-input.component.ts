import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-floating-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './floating-input.component.html',
  styleUrl: './floating-input.component.css'
})
export class FloatingInputComponent {
  @Input() name!: string;
  @Input() type!: string;

  value: string = '';
  isFocused: boolean = false;

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}
