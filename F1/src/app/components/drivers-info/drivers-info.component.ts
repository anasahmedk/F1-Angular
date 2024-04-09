import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatAnchor} from '@angular/material/button';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-drivers-info',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonToggle,
    MatAnchor
  ],
  templateUrl: './drivers-info.component.html',
  styleUrl: './drivers-info.component.scss'
})
export class DriversInfoComponent {

  constructor() {
 this.f1Service.getWiki('Max Verstappen').subscribe((data) => {
    console.log(data);
  }, (err: string) => { console.log('something went wrong' + err)
}); }

  f1Service = inject(F1Service);

}
