import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-validforms',
  templateUrl: './validforms.component.html',
  styleUrls: ['./validforms.component.css']
})
export class ValidformsComponent implements OnInit {
  title:'Validforms'
  minDate=new Date();
  reactiveForm:FormGroup;
 @Input() Data:any;
  // statelist:string[]=['India', 'Pakistan', 'China', 'America', 'Australia', 'Europe', 'Bangladesh'];

    constructor(private fb:FormBuilder){
  }
   ngOnInit() {
     console.log("Data", this.Data);
     
     this.reactiveForm = this.fb.group({
      name:        [null, Validators.required],
      email:       [null, [Validators.required, Validators.email]],
      pass:        [null, Validators.required],
      gender :     [null, Validators.required],
      mobile:      [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      date:[null, Validators.required]
    });

    if(this.Data!=undefined)
    {
      
    console.log(this.Data.value);
    
  }}

  // keypress(event:any){
  //   const pattern=/^[A-Za-z]+$/;
  //   let inputchar=String.fromCharCode(event.charCode);
  //   if(!pattern.test(inputchar)){
  //     event.prevent.default();
  //   }

  // }


  onSubmit(){
    this.reactiveForm.get('name').setValue(this.Data.email);
    console.log("value=>",this.reactiveForm.value);
        }
   



}
