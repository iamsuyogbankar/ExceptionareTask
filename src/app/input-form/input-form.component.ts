import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  inputFieldForm: FormGroup;
  public allInputData:any = [];

  constructor(private fb: FormBuilder) { 

    this.inputFieldForm = this.fb.group({
      text: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      date: ['', [Validators.required, Validators.pattern('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$')]],
      datetime: ['', [Validators.required]],
      month: ['', [Validators.required]],
      time: ['', [Validators.required]],
      week: ['', [Validators.required]],
      file: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern('^((ht|f)tp(s?))\://([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(/\S*)?$')]],
      number: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      tel: ['', [Validators.required, Validators.pattern('')]],
      gender: ['', [Validators.required]],
      vehicles: ['', [Validators.required]],
      dropdown: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  inputSubmit(){
    console.log(this.inputFieldForm.value);
    // localStorage.removeItem('allInputField');
    var previousInputData = JSON.parse(localStorage.getItem('allInputField')) || [];
   
    var count = previousInputData.length;

    if(count < 1)
    {
      var id = 1;
    }else{
      var id = ++count;
    }

    var inputdata = {
      'id' : id,
      'text' : this.inputFieldForm.value.text,
      'textarea' : this.inputFieldForm.value.textarea,
      'email' : this.inputFieldForm.value.email,
      'password' : this.inputFieldForm.value.password,
      'date' : this.inputFieldForm.value.date,
      'datetime' : this.inputFieldForm.value.datetime,
      'month' : this.inputFieldForm.value.month,
      'time' : this.inputFieldForm.value.time,
      'week' : this.inputFieldForm.value.week,
      'file' : this.inputFieldForm.value.file,
      'url' : this.inputFieldForm.value.url,
      'number' : this.inputFieldForm.value.number,
      'tel' : this.inputFieldForm.value.tel,
      'gender' : this.inputFieldForm.value.gender,
      'vehicles' : this.inputFieldForm.value.vehicles,
      'dropdown' : this.inputFieldForm.value.dropdown,
    }
    previousInputData.push(inputdata);

   this.allInputData = localStorage.setItem('allInputField', JSON.stringify(previousInputData));
    this.inputFieldForm.reset();
    console.log('all data', this.allInputData);
  }
  

}
