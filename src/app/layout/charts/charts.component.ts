import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Charts } from './chart.model';
import { ChartService } from './chart.service';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()],
    providers : [ChartService]
})
export class ChartsComponent implements OnInit {

    chartData: Charts;
    test: any;
    display: boolean;

    constructor( private chartService: ChartService) {
      this.chartData = new Charts();
      this.display = false;
    }

    ngOnInit() {
        this.test = ['Mr', 'Mrs'];

        this.chartData.title = 'Mr';
        this.chartData.language = 'EN';
        this.chartData.country = 'US';
        this.chartData.state = 'Texas';
        this.chartData.supplierType = 'Local';
    }

    SaveRegistration(chartData: Charts): void {
        console.log('Registration');
      console.log('chartData ===>',chartData);
        const url = 'http://localhost:8080/user/postcustomer';
        this.chartService.registration(url, chartData).subscribe(result => {
           this.chartData = result;
           this.display = true;
        });
    }

    reset(chartData: Charts): void {

        this.chartData = new Charts();
        this.chartData.title = 'Mr';
        this.chartData.language = 'EN';
        this.chartData.country = 'US';
        this.chartData.state = 'Texas';
        this.chartData.supplierType = 'Local';
    }
}
