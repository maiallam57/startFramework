import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() imageURL!: string;
  @Input() showModal: boolean = false;

  close() {
    this.showModal = false;
  }

}
