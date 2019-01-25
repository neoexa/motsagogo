import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JdmService } from '../services/jdm.service';


export interface nodeElement {
  id:string;
  name:string;
  type_name: string;
  type_rel:string;
  weight: string;
  relIn: boolean;
}

export interface checkBox {
  relName :string;
  checked :boolean;
}


@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})

export class DisplayResultComponent implements OnInit {
  
  sword : string;
  response: any; 
  gotResponse: boolean = false;
  tableDataReady: boolean = false;

  definitions : [];
  relationList : string[] = [];
  selectedCheckBoxes: checkBox[] = [];
  

  nodesList : Object[] = [];

  displayedColumns: string[] = ['id', 'name', 'type_name', 'type_rel', 'weight', 'relIn'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  nodeElementData: nodeElement[] = [];
 
 
  
  constructor(private jdmService : JdmService) { }

  searchWord(searchword){
    this.tableDataReady = false;
    this.gotResponse = false;
    return this.jdmService.getDetails(searchword)
    .subscribe(res => {
      this.response = res;
      this.initDefinitions();
      this.initRelTypes();
      this.initCheckBoxData();
      this.initNodeTable();
      this.gotResponse = true;
      this.tableDataReady = true;
      })
  
  }

  initDefinitions(){
    this.definitions = this.response.definition;
  }

  initRelTypes(){
    let rels = this.response.rels_types_dico;
    for (var key in rels) {
      if (rels.hasOwnProperty(key)) {
         this.relationList.push(rels[key]);
      }
   }
  } 
  
  initNodeTable(){
    let nodesIn = this.response.rels_in_dico;
    let nodesOut = this.response.rels_out_dico;
    
    this.nodeElementData = [];

    nodesIn.forEach((element :any) => {
      this.selectedCheckBoxes.forEach(elementBox => {
        
        if (elementBox.checked && element.type_name == elementBox.relName){
          let tempNode : nodeElement = {id : element.node.id, name : element.node.name,  type_name : element.node.type_name , type_rel : element.type_name, weight : element.w,  relIn : true}
          this.nodeElementData.push(tempNode);      
        }
        
        

      });      
      
      
    });

    nodesOut.forEach((element:any) => {
      this.selectedCheckBoxes.forEach(elementBox => {
        if (elementBox.checked && element.type_name == elementBox.relName){
          let tempNode : nodeElement = {id : element.node.id, name : element.node.name,  type_name : element.node.type_name , type_rel : element.type_name, weight : element.w,  relIn : false}
          this.nodeElementData.push(tempNode);   
        }   
      
    });
    
  });
  }

  initCheckBoxData(){
    for (let index = 0; index < this.relationList.length; index++) {
       let tempCheckBox : checkBox = {relName : this.relationList[index], checked : true}
       this.selectedCheckBoxes.push(tempCheckBox);
      
    }
    
  }

  onChange(event, index, item){
    item.checked = !item.checked;
    this.initNodeTable();

    console.log(this.selectedCheckBoxes);
    
  }

 

  ngOnInit() {
  
  }

}
