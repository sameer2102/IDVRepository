import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { SelectAStoreComponent } from './book-appointment/select-a-store/select-a-store.component';
import { ChooseDateTimeComponent } from './book-appointment/choose-date-time/choose-date-time.component';
import { YourDetailsComponent } from './book-appointment/your-details/your-details.component';
import { ConfirmationComponent } from './book-appointment/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookAppointmentComponent,
    SelectAStoreComponent,
    ChooseDateTimeComponent,
    YourDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
