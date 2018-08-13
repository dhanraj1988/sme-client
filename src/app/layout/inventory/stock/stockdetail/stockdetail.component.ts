import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  templateUrl: './stockdetail.component.html',
  styleUrls: ['./stockdetail.component.scss'],
  animations: [routerTransition()],
  providers: [StockService]
})
export class StockDetailComponent implements OnInit {

  stockData: Stock;
  test: any;
  display: boolean;
  stockID: number;
  mode: string;
  

  constructor(private stockService: StockService,
    private route: ActivatedRoute) {
    this.stockData = new Stock();
 
    this.display = false;

    this.test = this.route.params.subscribe(params => {
      this.stockID = +params['id'];
      this.mode = params['Mode'];
      console.log(this.stockID);
    });

  }

  ngOnInit() {
    if (this.mode == 'Add') {

    }
    else {
      this.stockData.id = this.stockID;
      //this.getStockDetail(this.stockData);
    }
  }

  saveStock(stockDataObj: Stock): void {
    console.log('save account');
    const url = '';
       this.stockService.saveStock(url, stockDataObj).subscribe(result => {
         this.stockData = result;
         this.display = true;
       });
  }

  getStockDetail(stockDataObj: Stock): void {
    console.log('get account detail');
    const url = '';
    this.stockService.getStockDetail(url, stockDataObj).subscribe(result => {
      this.stockData = result;
      this.stockData.mode = 'Edit';
    });

  }

  reset(stockDataObj: Stock): void {
    this.stockData = new Stock();
  }
}
