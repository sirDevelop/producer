import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss'],
})
export class PadComponent implements OnInit {
  @Input() audioSrc;
  @Input() key;
  @Input() color;

  on = false;
  id = '';
  audio = new Audio();
  interval: any;
  intervalDuration = 0;

  constructor() {}

  ngOnInit(): void {
    this.key = this.key.toUpperCase();
    this.id = 'beat-btn-' + this.key;
  }

  triggerButtonClick() {
    let element = document.getElementById(this.id);

    let event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    element.dispatchEvent(event);
  }

  toggleButton() {
    // button toggles between on and off. An on button will repeat audio on its tempo, an off will not repeat any audio
    this.on = !this.on;

    if (this.on) {
      if (this.intervalDuration == 0) {
        this.playAudio();
      } else {
        this.repeatAudio();
      }
    } else {
      clearInterval(this.interval);
      this.playAudio();
    }
  }

  setTempo(tempo: number) {
    if (tempo > 0) {
      this.intervalDuration = (1.0 / tempo) * 60 * 1000;
    } else {
      this.intervalDuration = 0;
    }

    //now the problem is when I set the tempo, I restart them all on the same timing
    clearInterval(this.interval);
    this.repeatAudio();
  }

  // a single play of the audio
  playAudio() {
    this.audio.src = this.audioSrc;
    this.audio.load();
    this.audio.play();
  }

  repeatAudio() {
    if (this.intervalDuration > 0) {
      this.interval = setInterval(() => {
        if (this.on) {
          this.playAudio();
        } else {
          clearInterval(this.interval);
        }
      }, this.intervalDuration);
    }
  }
}
