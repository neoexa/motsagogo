import { Component, OnInit } from '@angular/core';
import { JdmService } from '../services/jdm.service';


@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})

export class DisplayResultComponent implements OnInit {

  detailsMot: any;

  constructor(private jdmService : JdmService) { }


  searchWord(){
    return this.jdmService.getDetails("chat")
    .subscribe(res => {
      console.log(res)}
    )
  }

  ngOnInit() {
  }

}
