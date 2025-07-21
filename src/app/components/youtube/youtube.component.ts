import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './youtube.component.html'
})
export class YoutubeComponent {


  @Input() videoId: string = '';
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }


}
