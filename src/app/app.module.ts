import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TermsComponent } from './components/terms/terms.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    AchievementComponent,
    ContactsComponent,
    TermsComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
