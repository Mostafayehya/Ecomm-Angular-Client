import { PageControllerChangeArgs } from './../../shared/page-controller/page-controller.component';
import { SellerProduct } from './../../../models/seller/SellerProduct';
import { Icons } from './../../../icon.constants';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from './../../../services/seller.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  PAGE:number = 0 ;
  SIZE:number = 10 ;

  page : number = this.PAGE ;
  size : number = this.SIZE ;

  sellerId : number ;
  products : SellerProduct[];
  subscription : Subscription ;


  productId: number;

  constructor(private _sellerApi:SellerService , private _activatedRoute:ActivatedRoute,
    private _authService:AuthService) {
  }

  ngOnInit(): void {


      console.log(this.sellerId);

      this.subscription = this._activatedRoute.params.subscribe(params => {

        this.sellerId = this._authService.getUserId();
        this.loadData(this.sellerId,this.page,this.size);

      });

  }

  loadData(sellerId:number,page:number,size:number):void{

    this._sellerApi.getInventory(sellerId, page , size ).subscribe(response => {

     if(response.httpCode==200){

       this.products = response.data;

     }else {

       throw new Error(response.message);

     }

    });
  }


  onPageControllerChange(changeArgs:PageControllerChangeArgs):void{

    console.log("page controller clicked ");

    this.loadData(this.sellerId,changeArgs.page,changeArgs.size);

  }

}
