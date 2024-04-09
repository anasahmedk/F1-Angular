import {Component, inject} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable
} from '@angular/material/table';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-winners-table',
    standalone: true,
    imports: [
        AsyncPipe,
        JsonPipe,
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderCellDef,
        MatCellDef,
        MatCell,
        MatHeaderRowDef,
        MatRowDef,
        MatHeaderRow,
        MatRow,
        NgIf,
        MatProgressBar,
        MatProgressSpinner
    ],
    templateUrl: './winners-table.component.html',
    styleUrl: './winners-table.component.scss'
})
export class WinnersComponent {
    displayedColumns: string[] = ['position', 'driver', 'time', 'points'];


    public countryList: { [key: string]: string } = {
        American: 'US',
        Argentine: 'AR',
        Australian: 'AU',
        Austrian: 'AT',
        Belgian: 'BE',
        Brazilian: 'BR',
        British: 'GB',
        Canadian: 'CA',
        Colombian: 'CO',
        Danish: 'DK',
        Dutch: 'NL',
        Finnish: 'FI',
        French: 'FR',
        German: 'DE',
        Indonesian: 'ID',
        Irish: 'IE',
        Italian: 'IT',
        Japanese: 'JP',
        Mexican: 'MX',
        Monegasque: 'MC',
        'New Zealander': 'NZ',
        Russian: 'RU',
        'South African': 'ZA',
        Spanish: 'ES',
        Swedish: 'SE',
        Swiss: 'CH',
        Thai: 'TH',
        Venezuelan: 'VE',
        Polish: 'PL',
        Portuguese: 'PT'
    }

    f1Service = inject(F1Service)

    constructor() {
        this.f1Service.getRaceResults();
    }


}
