import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductService {
  private productsUrl: string;

  constructor(private http: Http) {
    this.productsUrl = environment.productsUrl;
  }


  /**
   * connects to the remote api to fetch products
   * @returns {Promise<Product[]>}
   */
  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => response.json() as Product[])
      .catch(this.handleError);
  }

  /**
   * handles errors of http requests
   * @param error
   * @returns {Promise}
   */
  private handleError (error: any) {
    return Promise.reject(error.message || error.json().error || 'Server error');
  }

}
