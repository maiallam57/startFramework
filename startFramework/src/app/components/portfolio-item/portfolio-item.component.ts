import { Component, Input } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css'
})
export class PortfolioItemComponent {

  @Input() imageurl!: string;

  selectedImage!: string;
  showModal: boolean = false;

  openModal(imageURL: string) {
    this.selectedImage = imageURL;
    this.showModal = true;
  }
}
