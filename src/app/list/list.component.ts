import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private rr:Router) { }

  ngOnInit(): void {
  }
  fun1(){
    this.rr.navigateByUrl('/chat1')
  }
  fun2(){
    this.rr.navigateByUrl('/chat2')
  }

}
