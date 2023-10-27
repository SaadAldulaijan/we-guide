import { NgModule } from '@angular/core';
import { PageModule } from '@abp/ng.components/page';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StepOneComponent } from './components/landing/step-one/step-one.component';
import { StepTwoComponent } from './components/landing/step-two/step-two.component';
import { StepThreeComponent } from './components/landing/step-three/step-three.component';

@NgModule({
  declarations: [HomeComponent, LandingComponent, SkeletonComponent, CarouselComponent, StepOneComponent, StepTwoComponent, StepThreeComponent],
  imports: [SharedModule, HomeRoutingModule, PageModule],
})
export class HomeModule {}
