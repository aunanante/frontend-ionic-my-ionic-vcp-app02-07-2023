import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../services/product-details.service';
import { ProductDetails } from '../common/product-details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  images = [
    "https://files.fm/thumb_show.php?i=c8tpsjdhj",
    "https://files.fm/thumb_show.php?i=dcpzxvv2p",
    "https://files.fm/thumb_show.php?i=as88f4dsq",
    "https://files.fm/thumb_show.php?i=acka7eepk",
    "https://files.fm/thumb_show.php?i=xceqdxwyj",
    "https://files.fm/thumb_show.php?i=4mp22vs3p",
  ];

 product_id: any;
 productDetails!: ProductDetails [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productDetailsService: ProductDetailsService
  ) { } 
 
  ngOnInit() {
    this.product_id = this.route.snapshot.paramMap.get('productId');
    console.log('product_id = ', this.product_id)
    this.searchProductDetails(parseInt(this.product_id));
  }

  swiperSlideChanged(e: any) {
    // console.log('changed: ', e)
  }

  goPrev() {
    this.swiper?.slideNext();
  }

  goNext() {
    this.swiper?.slidePrev();
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  searchProductDetails (productId: number ){
    this.productDetailsService.getDetailByProductId (productId).subscribe (
      (data) => {
        this.productDetails = data;

        /* console.log('longueur = ', this.productDetails?.length);
        for (let index = 0; index < this.productDetails?.length; index++) {
          const element = this.productDetails[index].imageDetailUrl;
          console.log(element);
          
        } */

      } 

    );
  }

}
