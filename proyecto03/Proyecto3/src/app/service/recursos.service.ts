import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }

  getTop7Data() {
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  }

  getChosenData(crypto: String) {
    return this.http.get("https://api.coingecko.com/api/v3/coins/" + crypto + "?community_data=true&sparkline=true")
  }

  async getChosenDataSafe(crypto: String) {
    return new Promise<any>((resolve, reject) => {
      this.http.get("https://api.coingecko.com/api/v3/coins/" + crypto + "?community_data=true&sparkline=true")
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }


}

