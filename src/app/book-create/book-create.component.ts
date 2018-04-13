import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }
book={}
private url='http://localhost:3000/books';
  ngOnInit() {
  }

  saveBook() {
    this.http.post(this.url, this.book)
      .subscribe(res => {
        console.log(res.json());
          let id = res.json()._id;
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
