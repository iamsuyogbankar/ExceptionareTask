import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-view-input-field',
  templateUrl: './view-input-field.component.html',
  styleUrls: ['./view-input-field.component.css']
})
export class ViewInputFieldComponent implements OnInit {
public viewInput:any = [];

  constructor(private shareData: ShareService) { }

  ngOnInit() {
    this.viewInput = this.shareData.getInputData();
    console.log('viewinptu', this.viewInput);
  }

}
