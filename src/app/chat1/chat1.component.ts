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
  arr:any[]=[['hello there how can i help you',3,'orders',1,'delivery',2,'hghvh',3],['orders','gfgv','hff','gfgfg'],['delivery','dfsg','fdagd']]
  ngOnInit(): void {
    for (let i = 0; i <this.arr[this.ind].length; i++) {
      if(i%2==0 && i!=0) {
        this.k.push(this.arr[this.ind][i]);
      }
    }
  }


}
