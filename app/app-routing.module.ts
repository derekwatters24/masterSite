import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { EmailComponent } from './email/email.component';
import { PortfolioListComponent } from './portfolio/portfolioList.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },

]

@NgModule ({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
