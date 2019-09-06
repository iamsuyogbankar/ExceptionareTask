import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-input-field',
  templateUrl: './view-input-field.component.html',
  styleUrls: ['./view-input-field.component.css']
})
export class ViewInputFieldComponent implements OnInit {
public viewInput:any = [];
public confirm; //used for delete contact

  constructor(private shareData: ShareService, private toastr: ToastrService) { }

  ngOnInit() {
    this.viewInput = this.shareData.getInputData();
    console.log('viewinptu', this.viewInput);
  }
  onDelete(id){
    this.confirm = confirm("Do you really want to delete this record?");
    if(this.confirm == true)
    {
      var previousInput = JSON.parse(localStorage.getItem('allInputField'));
      this.confirm = previousInput.findIndex(m => m.id === id);
      this.viewInput.splice(this.confirm, 1);
      localStorage.setItem('allInputField', JSON.stringify(this.viewInput));
      this.toastr.error('Your Data has been deleted', 'sorry', {timeOut: 1500});
    }
    else{
      return false;
    }
  }

}
