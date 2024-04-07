import {Component, inject} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.scss'
})
export class PodiumComponent {

  f1Service = inject(F1Service);
  
}
