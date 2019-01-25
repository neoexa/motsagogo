import { Component, OnInit, Input } from '@angular/core';
import { nodeElement } from '../display-result/display-result.component';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  

  @Input() nodeElementData: nodeElement[];
  @Input() displayedColumns: string[];
  @Input() columnsToDisplay: string[];

  

  constructor() { }

  ngOnInit() {
    
  }

}
