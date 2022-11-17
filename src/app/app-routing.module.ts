import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsAddPageComponent } from './pages/authors-add-page/authors-add-page.component';
import { AuthorsEditPageComponent } from './pages/authors-edit-page/authors-edit-page.component';
import { AuthorsListPageComponent } from './pages/authors-list-page/authors-list-page.component';
import { QuotesAddPageComponent } from './pages/quotes/quotes-add-page/quotes-add-page.component';
import { QuotesListPageComponent } from './pages/quotes/quotes-list-page/quotes-list-page.component';

const routes: Routes = [
  {
    path: "",
    component: AuthorsListPageComponent
  },
  {
    path: "new",
    component: AuthorsAddPageComponent
  },
  {
    path: "edit/:id",
    component: AuthorsEditPageComponent
  },
  {
    path: "quotes/add/:id",
    component: QuotesAddPageComponent
  },
  {
    path: "quotes/list/:id",
    component: QuotesListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
