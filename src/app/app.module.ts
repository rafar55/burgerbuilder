import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { BurgerBuilderComponent } from './burger-builder/burger-builder.component';
import { IngredientsControlsComponent } from './ingredients-controls/ingredients-controls.component';
import { TotalComponent } from './total/total.component';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerBuilderComponent,
    IngredientsControlsComponent,
    TotalComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
