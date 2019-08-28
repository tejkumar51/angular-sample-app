import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //angular select the elelemt by attribute selectors
  //selector: '.app-servers', //angular select the elelemt by class selectors 
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
  constructor() { 
setTimeout(()=>{
this.allowNewServer = true;
},2000)  }

  ngOnInit() {
  }

}
