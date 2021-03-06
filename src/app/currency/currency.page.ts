import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {
  tabCurrencies = ['EUR', 'GBP', 'JPY', 'CNY', 'TND', 'EGP'];
  //curr2 = 'TND';
  result;
  toConvert = false;

  constructor(private exchangeSer: ExchangeService) {}

  ngOnInit() {}

  computeRate(curr2) {
    this.exchangeSer.getRates().subscribe(
      (response) => {
        console.log(response['quotes']);
        console.log(Object.getOwnPropertyNames(response['quotes']));
        let chaine = 'USD' + curr2.value;
        console.log(response['quotes'][chaine]);
        this.result = response['quotes'][chaine];
        this.toConvert = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
