import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { HitApiService } from 'src/app/hit-api.service';

@Component({
  selector: 'app-simpleadd',
  templateUrl: './simpleadd.component.html',
  styleUrls: ['./simpleadd.component.css']
})
export class SimpleaddComponent implements OnInit {

  constructor(private _fb: FormBuilder, private service: HitApiService) { }
  public addmore: FormGroup;
  
  tempType:any = ["TYPE1_CTCW", "TYPE2_MTF", "TYPE3_VTT", "TYPE4_LSTN_C", "TYPE5_SPLL", "TYPE6_MTP", "TYPE7_LSTN_S", "TYPE8_SRW", "TYPE9_LSTN_TYPE", "TYPE10_CTACW", "TYPE11_JMBL", "TYPE12_FITB"];

  ngOnInit() {
  	this.addmore = this._fb.group({
  	  level:[''],
  	  total:[''],
      types: this._fb.array([this.initItemRows()])
    });
  }
  get formArr() {
    return this.addmore.get('types') as FormArray;
  }

 

  
  initItemRows() {
    return this._fb.group({
    type:[''],
    frequency:['']
    });
  }
  addNewRow(i: number) {
    
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  getTypeList(){
    let arr=[];
    for(let x=0;x<this.addmore.value.itemRows.length;x++){
      let t = this.addmore.value.itemRows[x].type;
      let f = this.addmore.value.itemRows[x].frequency;
      arr.push([t,f])
    }
    
  }

  manualGenerate(){

   
    console.log(this.addmore.value);  

    let apiData=this.addmore.value;

    this.service.sendkeys(apiData).subscribe((data:any) => 
      {
        {
          console.log(data);
        };
      }
    );
      
    
  }

   // Choose city using select dropdown
   

   
   

}
