import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-userSetting',
 templateUrl:'./userSetting.component.html'
})
export class UserSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadPdf(){
    const doc=new jsPDF('p','mm','a4');
    doc.fromHTML(document.getElementById("emploeeInfo"),10,10)
    doc.save('test.pdf');
  
  }

}
