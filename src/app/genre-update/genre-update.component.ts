import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-genre-update',
  templateUrl: './genre-update.component.html',
  styleUrls: ['./genre-update.component.css']
})
export class GenreUpdateComponent implements OnInit {
  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }
  private url='http://localhost:3000/genres';
  genre = {}
  ngOnInit() {
    this.getGenre(this.route.snapshot.params['id']);
  }

  getGenre(id) {
    this.http.get(this.url+'/'+id).subscribe(data => {
      this.genre = data.json();
    });
  }

  updateGenre(id) {
    this.http.put(this.url+'/'+id, this.genre)
      .subscribe(res => {
          let id = res.json()._id;
          this.router.navigate(['/genres']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
