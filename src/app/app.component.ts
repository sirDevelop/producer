import { Component, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { BeatPadsComponent } from './beat-pads/beat-pads.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'producer';
  keyPressed = '';

  @ViewChild(BeatPadsComponent) bpComp: BeatPadsComponent;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.keyPressed = event.key;

    this.bpComp.playAudio(this.keyPressed);
  }
}
