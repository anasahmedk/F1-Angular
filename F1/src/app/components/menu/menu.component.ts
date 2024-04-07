import {Component, inject} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {RoundInputComponent} from '../rounds/rounds.component';
import {SeasonsComponent} from '../seasons/seasons.component';
import {WinnersComponent} from '../winners-table/winners-table.component';
import {DriversInfoComponent} from '../drivers-info/drivers-info.component';
import {PodiumComponent} from '../podium/podium.component';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    RoundInputComponent,
    SeasonsComponent,
    WinnersComponent,
    DriversInfoComponent,
    PodiumComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  f1Service = inject(F1Service)
}
