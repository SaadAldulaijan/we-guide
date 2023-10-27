import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { LayoutComponent } from './components/layout/layout.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';


const PrimeNGModules = [
  RadioButtonModule,
  SkeletonModule,
  CarouselModule,
  CalendarModule,
  StepsModule,
  ToastModule,
  RadioButtonModule,
  MessagesModule
]


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    ...PrimeNGModules
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    ...PrimeNGModules
  ],
  providers: []
})
export class SharedModule {}
