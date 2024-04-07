import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';
import {F1Service} from '../../services/f1.service';
import {ResultsResponse} from '../../models/f1-results';

@Component({
  selector: 'app-season-input',
  standalone: true,
  imports: [
    AsyncPipe,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect
  ],
  templateUrl: './seasons.component.html',
  styleUrl: './seasons.component.scss'
})
export class SeasonsComponent {

  f1Service = inject(F1Service)

  constructor() {
    this.f1Service.getSeasons()
  }

  getRounds() {
    this.f1Service.selectedRound = ''
    this.f1Service.results$.next({} as ResultsResponse)
    this.f1Service.getRounds()

  }
}
