import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductPageRoutingModule } from './product-routing.module';
import { ProductPage } from './product.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule
  ],
  declarations: [ProductPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductPageModule {}
