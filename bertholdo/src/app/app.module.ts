import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselPresentationComponent } from './carousel-presentation/carousel-presentation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeSalespersonComponent } from './be-salesperson/be-salesperson.component';
import { ContactComponent } from './contact/contact.component';
import { MakeBudgetComponent } from './make-budget/make-budget.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import { OurProductsComponent } from './our-products/our-products.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPresentationComponent,
    BeSalespersonComponent,
    ContactComponent,
    MakeBudgetComponent,
    OurProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatGridListModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
