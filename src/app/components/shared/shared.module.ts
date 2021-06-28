import { ToastrService, ToastrModule } from 'ngx-toastr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaxLengthPipe } from 'src/app/pipes/max-length.pipe';
import { AllowCharOnlyDirective } from 'src/app/directives/allow-char-only.directive';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import { ProfileComponent } from './profile/profile.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { LogoutComponent } from './logout/logout.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SellerOrderListComponent } from './seller-order-list/seller-order-list.component';
import { SharedFooterComponent } from './shared-footer/shared-footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';





@NgModule({
  declarations: [
     MenuComponent
    ,MaxLengthPipe,AllowCharOnlyDirective, FooterComponent, PageNotFoundComponent, LoginComponent, LoaderSpinnerComponent, ProfileComponent, RecommendedComponent, LogoutComponent, LineChartComponent, PieChartComponent, SellerOrderListComponent, SharedFooterComponent, AboutUsComponent, ContactUsComponent
  ],
  imports: [
  CommonModule,FormsModule,
    ReactiveFormsModule,RouterModule,HttpClientModule, 
    ToastrModule.forRoot(),SlickCarouselModule
  ],
  exports:[MenuComponent,MaxLengthPipe,FormsModule,
    ReactiveFormsModule,HttpClientModule,AllowCharOnlyDirective,
  FooterComponent, LoaderSpinnerComponent,SlickCarouselModule, LineChartComponent, PieChartComponent,
  SellerOrderListComponent, SharedFooterComponent],
  providers: [ToastrService],

})
export class SharedModule { }
