import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable()
export class BooksService {
    // Inerir a url da API caso tenha uma pronta
    private url = '';

    httpOptions = new HttpHeaders({
        'content-type': 'application/json',
    });

    constructor(private httpClient: HttpClient) {}

    getBook() {
        return this.httpClient.get(this.url);
    }
}
