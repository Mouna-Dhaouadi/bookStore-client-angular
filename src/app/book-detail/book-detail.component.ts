import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import {Headers} from '@angular/http';
import { Response } from '@angular/http/src/static_response';

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book = {};
  private url='http://localhost:3000/books';

  constructor(private route: ActivatedRoute, private http: Http, private router:Router) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    console.log(this.url+'/'+id);
    this.http.get(this.url+'/'+id).subscribe(data => {
      this.book = data.json();
    });
  }

  deleteBook(id) {
    console.log(this.url+'/'+id);
    this.http.delete(this.url+'/'+id).subscribe(data => {
      this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      }
    );
  }
  private url_cart='http://localhost:3000/cart';

  addToCart(id)
  {
    this.http.put(this.url_cart + '/'+id, {}).subscribe(data => {
      this.router.navigate(['/books']);
    }, (err) => {
      console.log(err);
    }
  );

  }

}
