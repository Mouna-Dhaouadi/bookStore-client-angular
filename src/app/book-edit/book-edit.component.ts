import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  private url='http://localhost:3000/books';

  book = {};

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get(this.url+'/'+id).subscribe(data => {
      this.book = data.json();
    });
  }

  updateBook(id) {
    this.http.put(this.url+'/'+id, this.book)
      .subscribe(res => {
          let id = res.json()._id;
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
