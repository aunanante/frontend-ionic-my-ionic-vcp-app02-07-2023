import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commerce } from '../common/commerce';
import { CommerceService } from 'src/app/services/commerce.service';
import { Category } from '../common/category';
import { CategoryService } from '../services/category.service';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import Swiper from 'swiper';



@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  commerce_id: any;
  commerceName!: string; 
  commerces!: Commerce[];
  categories!: Category[]; 
  products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private commerceService: CommerceService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.commerce_id = this.route.snapshot.paramMap.get('commerceId');
    this.searchCommerceName ();
    this.searchCategories (+this.commerce_id);
  }

  searchCommerceName () {
    this.commerceService.getAllCommerces().subscribe (
      (data) => {
        this.commerces = data;
        const commerceId = this.route.snapshot.paramMap.get('commerceId');
        if (commerceId) {
          const selectedCommerce = this.commerces.find(commerce => commerce.id === parseInt(commerceId));
          if (selectedCommerce) {
            this.commerceName = selectedCommerce.commerceName;
          }
          // console.log('id = ', commerceId, 'sommes dans le commerce = ', this.commerceName)
        }
      }
    );
  }

  searchCategories (commmerceId : number) {
    this.categoryService.getProductCategoryByCommerceId(commmerceId).subscribe ( 
      (data) => {
        this.categories = data;

        for (let index = 0; index < this.categories.length; index++) {
          const element = this.categories[index].id;
          console.log(element);
          
        }
    })
  }

  searchProductBycategory (categoryId: number){
    this.productService.getProductByCategoryId(categoryId).subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

  searchProductDetailsByproduct (productId: number) {
    this.router.navigateByUrl(`details/${productId}`); 
  }

}
