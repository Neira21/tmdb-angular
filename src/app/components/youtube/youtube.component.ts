import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [],
  templateUrl: './youtube.component.html'
})
export class YoutubeComponent {


  @Input() videoId: string = '';
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
