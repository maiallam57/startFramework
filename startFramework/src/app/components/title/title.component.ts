import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() ComponentName!: string;
  @Input() color: string = '#2c3e50';

  @HostBinding('style.--before-after-color') beforeAfterColor!: string;

  ngOnChanges(): void {
    this.beforeAfterColor = this.color;
  }

}
