import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { GenreComponent } from './genre/genre.component';
import {HttpModule} from '@angular/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';
import { GenreUpdateComponent } from './genre-update/genre-update.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from "./auth.guard";


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'books',
    component: BooksComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' },
    canActivate: [AuthGuard]
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' },
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Books In Cart' },
    canActivate: [AuthGuard]
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' },
    canActivate: [AuthGuard]
  },
  {
    path: 'genres',
    component: GenreComponent,
    data: { title: 'Genre List' },
    canActivate: [AuthGuard]
  },
  {
    path: 'genre-update/:id',
    component: GenreUpdateComponent,
    data: { title: 'Edit Category' },
    canActivate: [AuthGuard]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    GenreComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    GenreUpdateComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
   // BooksService //for dependecy injection
   AuthService,
   AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
