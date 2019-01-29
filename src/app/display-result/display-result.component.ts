import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { JdmService } from '../services/jdm.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';




@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})

export class DisplayResultComponent implements OnInit {
  
  myControl = new FormControl();
  sword : string;
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  
  response: any; 
  gotResponse: boolean = false;
  
  
  
  constructor(private jdmService : JdmService) { }

  searchWord(searchword){
    this.gotResponse = false;
    return this.jdmService.getDetails(searchword)
    .subscribe(res => {
      this.response = res;
      this.gotResponse = true;
      this.initAutocomplete();
      
      })
  
  }


  ngOnInit() {  

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  initAutocomplete(){
    
    return this.jdmService.getEntries()
    .subscribe(res => {
      //parcourir filtre et mettre en attribut 
      this.options = res.split(",");
      //console.log(this.options);
      })
  
  }
}