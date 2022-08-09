import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BooksService } from './product-list.component.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    livros!: Book[];
    bookService!: BooksService;

    constructor(bookService: BooksService) {
        this.bookService = bookService;
    }

    ngOnInit(): void {
        // Habilitar caso tenha uma API pronta
        // this.livros = this.bookService.getBook().subscribe((data) => {
        //     this.livros = data;
        //     console.log(this.livros);
        // });

        // Desabilitar caso tenha uma API pronta
        this.livros = [
            {
                id: '1',
                name: 'Livro 1',
                price: 50,
                quantity: 3,
                category: 'Ação',
                img: 'imagem1',
            },
            {
                id: '2',
                name: 'Livro 2',
                price: 25,
                quantity: 1,
                category: 'Ação',
                img: 'imagem2',
            },
            {
                id: '3',
                name: 'Livro 3',
                price: 76,
                quantity: 4,
                category: 'Ação',
                img: 'imagem3',
            },
            {
                id: '4',
                name: 'Livro 4',
                price: 30,
                quantity: 7,
                category: 'Ação',
                img: 'imagem4',
            },
            {
                id: '5',
                name: 'Livro 5',
                price: 44,
                quantity: 2,
                category: 'Ação',
                img: 'imagem5',
            },
        ];
    }
}
