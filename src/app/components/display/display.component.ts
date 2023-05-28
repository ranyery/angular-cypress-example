import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent implements OnInit {
  @Input() value: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
