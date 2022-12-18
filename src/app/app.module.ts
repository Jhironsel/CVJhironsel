import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReferenciasComponent } from './pages/referencias/referencias.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    FooterComponent,
    ReferenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
