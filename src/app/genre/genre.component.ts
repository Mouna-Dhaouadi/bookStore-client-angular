import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
import { Response } from '@angular/http/src/static_response';

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres=[]; 
private URL='http://localhost:3000/genres';

constructor(private http:Http)
{

  http.get(this.URL).subscribe(response => {
     this.genres=response.json();
 });

 
}


createGenre(input:HTMLInputElement)
{
  let genre = {title: input.value};
  input.value='';
this.http.post(this.URL, JSON.stringify(genre), {headers: contentHeaders}).subscribe(
  response => {
    genre['id'] = response.json().id;
    this.genres.splice(0, 0, genre);
    

  }
);
}
  
updateGenre(genre)
{
  
  this.http.put(this.URL+'/'+genre._id, JSON.stringify(genre), {headers: contentHeaders}).subscribe(
    Response => {
        console.log(Response.json());
    }
  )
}

deleteGenre(genre)
{
  
  this.http.delete(this.URL+'/'+genre._id,  {headers: contentHeaders}).subscribe(
    Response => {
        console.log(Response.json());
        let index= this.genres.indexOf(genre);
        this.genres.splice(index,1);
    }
  )
}

  ngOnInit() {
  }

}
