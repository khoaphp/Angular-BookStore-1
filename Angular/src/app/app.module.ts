import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Blocks/Menu/menu.component';
import { SliderComponent } from './Components/Blocks/Slider/slider.component';
import { UsersComponent } from './Components/Blocks/Users/users.component';
import { CategoriesComponent } from './Components/Blocks/Categories/categories.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UsersComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
