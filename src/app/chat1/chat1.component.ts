import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css']
})
export class Chat1Component implements OnInit {

  constructor() { }
  ind=0;
  k:any[]=[];
  arr:any[]=[['I am Swig, here to help you with your orders. Just pick an option from the menu',3,'Track Order',1,'Check refund status',2,'Cancel the order',3,'foodquality issues',4],['what do you want to know about your order',2,'Where is my order',5,'order delayment',6],['enter your reference id',0,'your reference status will get emailed to you'],['enter your reference id',0,'your order has been canceled'],['choose below option',5,'Items are different from what I ordered',7,'Spillage issue',7,'Item quantity is not adequate',7,'Item quality issues',7,'Missing items in order',7],['enter your order id',0,'your order track has been emailed to you'],['enter your order id',0,'your order will be delivered to you shortly'],['enter your order id',0,'your query is recorded we will get back to you']]
  ngOnInit(): void {
    for (let i = 0; i <this.arr[this.ind].length; i++) {
      if(i!=0 &&i!=1) {
        this.k.push(this.arr[this.ind][i]);
      }
    }
  }
  funn(){
    alert(this.arr[this.ind][2])
    this.ind=0;
    this.k=[]
    for (let i = 0; i <this.arr[this.ind].length; i++) {
      if(i!=0 &&i!=1 && this.arr[this.ind][1]!=0) {
        this.k.push(this.arr[this.ind][i]);
      }
    }
  }
  fun(val:number){
    this.ind=this.k[val+1];
    console.log(this.ind);
    this.k=[]
    for (let i = 0; i <this.arr[this.ind].length; i++) {
      if(i!=0 &&i!=1 && this.arr[this.ind][1]!=0) {
        this.k.push(this.arr[this.ind][i]);
      }
    }
  }


}
