import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserComponent } from './components/user/user.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ShoppingCartProductComponent } from './components/shopping-cart-product/shopping-cart-product.component';
import { UserViewComponent } from './components/order-list/user-view/user-view.component';
import { BakerViewComponent } from './components/order-list/baker-view/baker-view.component';
import { BakerOrderListComponent } from './components/baker-order-list/baker-order-list.component';
import { OrderComponent } from './components/order-list/order/order.component';
import { AdminViewComponent } from "./components/order-list/admin-view/admin-view.component";
import { FlatpickrModule } from 'angularx-flatpickr'
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SuppliesListComponent } from './components/supplies/supplies-list/supplies-list.component';
import { SupplyModalComponent } from "./components/supplies/supply-modal/supply-modal.component";
import { SuppliesListModalComponent } from './components/order-list/supplies-list-modal/supplies-list-modal.component';
import { ForgotModalComponent } from './components/login/forgot-modal/forgot-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProductCardComponent,
    ProductCreateComponent,
    ShoppingCartComponent,
    OrderListComponent,
    ShoppingCartProductComponent,
    UserViewComponent,
    BakerViewComponent,
    BakerOrderListComponent,
    OrderComponent,
    AdminViewComponent,
    UserProfileComponent,
    SuppliesListComponent,
    SupplyModalComponent,
    SuppliesListModalComponent,
    ForgotModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
