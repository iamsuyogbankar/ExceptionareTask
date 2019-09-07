import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  inputFieldForm: FormGroup;
  public allInputData:any = [];

  constructor(private fb: FormBuilder, private toastr: ToastrService) { 

    this.inputFieldForm = this.fb.group({
      text: ['', [Validators.required, Validators.pattern('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$')]],
      textarea: ['', [Validators.required, Validators.pattern('^([a-zA-Z]){10,100}?$')]],
      email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*\d).{4,8}$")]],
      date: ['', [Validators.required, Validators.pattern('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$')]],
      datetime: ['', [Validators.required]],
      month: ['', [Validators.required]],
      time: ['', [Validators.required]],
      week: ['', [Validators.required]],
      file: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern('^((ht|f)tp(s?))\://([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(/\S*)?$')]],
      number: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      tel: ['', [Validators.required, Validators.pattern("^([a-zA-Z]){5}([0-9]){5}?$")]],
      gender: ['', [Validators.required]],
      vehicles: ['', [Validators.required]],
      dropdown: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // this.inputSubmit();
  }
  onCheck(){
    // alert('btn working')    
    if(this.inputFieldForm.value.text === ''){
      this.toastr.error('Text field cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.email == ''){
      this.toastr.error('Email cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.password == ''){
      this.toastr.error('Password cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.date == ''){
      this.toastr.error('Date cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.file == ''){
      this.toastr.error('File should be selected','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.url == ''){
      this.toastr.error('Url cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.number == ''){
      this.toastr.error('Number cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.tel == ''){
      this.toastr.error('Tel cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.datetime == ''){
      this.toastr.error('Datetime cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.month == ''){
      this.toastr.error('Month shuld be selected','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.time == ''){
      this.toastr.error('Time cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.week == ''){
      this.toastr.error('Week cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.textarea == ''){
      this.toastr.error('Textarea cannot be empty','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.dropdown == ''){
      this.toastr.error('Country should be selected','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.gender == ''){
      this.toastr.error('Gender should be selected','Sorry', {timeOut: 1500})
    }else if(this.inputFieldForm.value.vehicles == ''){
      this.toastr.error('Vechicles should be selected','Sorry', {timeOut: 1500})
    }else{
      // else block starts here
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
        this.toastr.success('Your data has been registered.','Congradulations', {timeOut: 1500});
        this.allInputData = localStorage.setItem('allInputField', JSON.stringify(previousInputData));
        this.inputFieldForm.reset();
        console.log('all data', this.allInputData);
        // else block ends here    
    }
  }
}
