import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {AsyncPipe} from '@angular/common';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-round-input',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    AsyncPipe,
    MatLabel
  ],
  templateUrl: './rounds.component.html',
  styleUrl: './rounds.component.scss'
})
export class RoundInputComponent {

  f1Service = inject(F1Service)

  constructor() {
    this.f1Service.getRounds()
  }

  getResults() {
    this.f1Service.getRaceResults()

  }

}

