import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {

  constructor() { }
  ind=0;
  k:any[]=[];
  arr:any[] = [['Hey there, How can I help you?You can chose from the below menu',3,'know course details',1,'view all domains',2,'refund status',3],['Select the course from the following:',5,'mean stack',4,'ml using python',4,'mern stack',4,'reactjs',4,'flutter',4],['select domain',3,'machine learning',5,'web devolopment',5],['enter your purchase id',0,'your request has been recorded'],['select details you need',3,'fee',6,'timeline',7,'instructor',8],['these are available courses in domain',0,'thanks for choosing udemy'],['fee is 3000',0,'thanks for choosing udemy'],['timeline is from dec-feb',0,'thanks for choosing udemy'],['instructor is andrew ng',0,'thanks for choosing udemy']];
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
