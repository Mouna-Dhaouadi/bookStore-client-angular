import {Component} from '@angular/core';
import { Http } from '@angular/http';



@Component(
    {
        selector:'books',
        templateUrl:'./books.component.html'
    }
)
export class BooksComponent{

books=[];
url = 'http://localhost:3000/books';
constructor(private http:Http)
{


  http.get(this.url).subscribe(response => {
     this.books=response.json();
 });


  
}

search(criteria:HTMLSelectElement, input:HTMLInputElement)
{
    console.log(criteria.value);
    console.log(input.value);
    
    this.http.get(this.url+'?'+criteria.value+'='+input.value).subscribe(response => {
        this.books=response.json();
    });

}
}