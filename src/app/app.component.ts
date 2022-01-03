import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dtpro';
  status:any=true;
  constructor(private rr:Router){}

  fun1(){
    this.status=false
    this.rr.navigateByUrl('/login')
 }
}
