import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule } from '@angular/forms';
// import { NouisliderModule } from 'ng2-nouislider';
// import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { HealthSectionComponent } from './health-conditions/health-conditions.component';
import { InputsSectionComponent } from './inputs-section/inputs-section.component';

@NgModule({
  declarations: [
    SectionsComponent,
    HealthSectionComponent,
    InputsSectionComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    // FormsModule,
    NgbModule,
    RouterModule,
    // NouisliderModule,
    // JwBootstrapSwitchNg2Module
  ],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
