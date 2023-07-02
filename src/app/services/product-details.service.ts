import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { environment } from './../../environments/environment';
import { ProductDetails } from '../common/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  apiUrl = environment.vcpBaseUrl;
  constructor(private http: HttpClient) { }

  getDetailByProductId (productId: number): Observable< ProductDetails[]> {
    return this.http.get<{ details: ProductDetails[] }>(this.apiUrl).pipe (
      map(data => data.details?.filter(detail => detail.product_id === productId)),
      catchError(error => {
        console.error(error);
        return []; 
      }) 
    );
  }

}
