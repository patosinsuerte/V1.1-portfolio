import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroComponent,
    PresentationComponent,
    MyServicesComponent,
    ProyectsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LayoutPageComponent]
})
export class CoreModule { }
