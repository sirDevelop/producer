import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { PadComponent } from '../pad/pad.component';

@Component({
  selector: 'app-beat-pads',
  templateUrl: './beat-pads.component.html',
  styleUrls: ['./beat-pads.component.scss'],
})
export class BeatPadsComponent implements OnInit {
  @Input() keyPressed;
  @ViewChildren(PadComponent) padComps: QueryList<PadComponent>;

  tempo = 100;
  pads = [
    'hihat-808.wav',
    'hihat-acoustic01.wav',
    'hihat-analog.wav',
    'hihat-digital.wav',
    'kick-808.wav',
    'kick-acoustic01.wav',
    'kick-big.wav',
    'kick-classic.wav',
    'perc-808.wav',
    'perc-chirpy.wav',
    'perc-hollow.wav',
    'perc-laser.wav',
    'snare-808.wav',
    'snare-acoustic01.wav',
    'snare-analog.wav',
    'snare-big.wav',
  ];

  keys = [
    '3',
    '4',
    '5',
    '6',
    'e',
    'r',
    't',
    'y',
    'd',
    'f',
    'g',
    'h',
    'c',
    'v',
    'b',
    'n',
  ];

  constructor() {}

  ngOnInit(): void {
    this.pads.forEach((element, index) => {
      this.pads[index] = '../assets/sounds/' + element;
    });
    // let n = Math.ceil(Math.sqrt(this.pads.length));
    // let q = Math.floor(index / n);
    // let r = index % n;

    // //  on the edges of the grid pads, make the color primary. Otherwise color remains accented
    // if (q == 0 || q == n - 1 || r == 0 || r == n - 1) {
    //   this.colors[index] = 'primary';
    // }
  }

  ngAfterViewInit(): void {
    this.sliderChangedValue(this.tempo);
  }

  playAudio(keyPressed: String) {
    this.padComps.forEach((element) => {
      if (element.key.toUpperCase() == keyPressed.toUpperCase()) {
        element.triggerButtonClick();
      }
    });
  }
  sliderChangedValue(tempo) {
    this.tempo = tempo;

    this.padComps.forEach((element) => {
      element.setTempo(this.tempo);
    });
  }
}
