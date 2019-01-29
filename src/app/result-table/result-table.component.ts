import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';


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
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  
  @Input() response: any;
  

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  tableDataReady: boolean = false;
  
  definitions : [];
  
  relationList : string[] = [];
  selectedCheckBoxes: checkBox[] = [];
  displayedColumns: string[] = ['id', 'name', 'type_name', 'type_rel', 'weight', 'relIn'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  nodeElementData: nodeElement[] = [];
  

  datasource;

  constructor() { 
  	
  }
  

  ngOnInit() {
    console.log(this.response);
    this.initDefinitions();
    this.initRelTypes();
    this.initCheckBoxData()
    this.initNodeTable();
    
    this.datasource = new MatTableDataSource(this.nodeElementData); 
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }
  initDefinitions(){
    this.definitions = this.response.definition;
    console.log('definitions');
    console.log(this.definitions);
  }

  initRelTypes(){
    let rels = this.response.rels_types_dico;
    for (var key in rels) {
      if (rels.hasOwnProperty(key)) {
         this.relationList.push(rels[key]);
      }
    }
    console.log('relations');
    console.log(this.relationList);
    
    
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
          console.log('push');
              
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
  
  this.datasource = new MatTableDataSource(this.nodeElementData); 
  this.datasource.sort = this.sort;
  this.datasource.paginator = this.paginator;

  
  console.log('nodes list');
  console.log(this.nodeElementData);

  }

  initCheckBoxData(){

    for (let index = 0; index < this.relationList.length; index++) {
       let tempCheckBox : checkBox = {relName : this.relationList[index], checked : true}
       this.selectedCheckBoxes.push(tempCheckBox);
      
    }
    console.log('selected chk bxs');
    console.log(this.selectedCheckBoxes);
    
  }


  

  onChange(event, index, item){
    item.checked = !item.checked;
    this.initNodeTable();
  }
}