import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentPortalComponent } from './agent-portal/agent-portal.component';
import { CustomerDetailComponent } from './agent-portal/customer-detail/customer-detail.component';
import { AuthGuard } from './auth.guard';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ChooseDateTimeComponent } from './book-appointment/choose-date-time/choose-date-time.component';
import { ConfirmationComponent } from './book-appointment/confirmation/confirmation.component';
import { SelectAStoreComponent } from './book-appointment/select-a-store/select-a-store.component';
import { YourDetailsComponent } from './book-appointment/your-details/your-details.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo:'bookAppointment/chooseDate', pathMatch: 'full'},
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'bookAppointment', component: BookAppointmentComponent, canActivate: [AuthGuard], children: [
      { path: 'selectStore', component: SelectAStoreComponent, canActivate: [AuthGuard] },
      { path: 'chooseDate', component: ChooseDateTimeComponent,canActivate: [AuthGuard] },
      { path: 'details', component: YourDetailsComponent,canActivate: [AuthGuard] },
      { path: 'confirmation', component: ConfirmationComponent,canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'agentPortal', component: AgentPortalComponent, canActivate: [AuthGuard], children: [
      { path: 'customerDetails', component: CustomerDetailComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
