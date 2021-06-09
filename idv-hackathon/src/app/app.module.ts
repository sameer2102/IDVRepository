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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AgentPortalComponent } from './agent-portal/agent-portal.component';
import { CustomerDetailComponent } from './agent-portal/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookAppointmentComponent,
    SelectAStoreComponent,
    ChooseDateTimeComponent,
    YourDetailsComponent,
    ConfirmationComponent,
    LoginComponent,
    AgentPortalComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
