import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeEssentialsComponent } from './essentials/essentials.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SuperImageComponent } from './super-image/super-image.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeEssentialsComponent,
    PersonalCareComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurStoryComponent,
    PrivacyPolicyComponent,
    SuperImageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'covidkart' }),
    NgbModule,
    // FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'on the server' : 'in the browser';
    console.log('Running ${platform} with appId=${appId}');
  }
}
