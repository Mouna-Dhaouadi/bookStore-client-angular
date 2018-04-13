import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ngOnInit() {
  }

  books=[];
  total_price={};

private url ='http://localhost:3000/cart'; 
constructor(private http:Http)
{
  http.get(this.url).subscribe(response => {
     this.books=response.json();
 });

 http.get('http://localhost:3000/buy').subscribe(response => {
  this.total_price=response.json();
});

}

 deleteFromCart(book)
 {
   
   this.http.put(this.url+'_d/'+book._id, {}).subscribe(
     Response => {
         console.log(Response.json());
         let index= this.books.indexOf(book);
         this.books.splice(index,1);

         this.http.get('http://localhost:3000/buy').subscribe(response => {
     console.log("okkk"+response.json());
  this.total_price=response.json();
});
     }
   );

   

 }

 


}

