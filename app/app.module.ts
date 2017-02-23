import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmailComponent } from './email/email.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioListComponent } from './portfolio/portfolioList.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll/ng2-page-scroll';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports:[
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		Ng2PageScrollModule.forRoot(),
		NgbModule.forRoot()
		
	],
	declarations: [
		AppComponent,
		HomepageComponent,
		EmailComponent,
		PortfolioListComponent,
		FooterComponent,

	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}
