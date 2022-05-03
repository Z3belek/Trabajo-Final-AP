import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { AboutdialogComponent } from './aboutdialog/aboutdialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutmeService : AboutmeService,
    public dialog: MatDialog) { }
  aboutmes: any;
  ngOnInit(): void {
    this.listarExperience()
  }

  openEditAbout(aboutme: any) {
    this.dialog.open(AboutdialogComponent,{
      panelClass: "dialog-responsive",
      data:aboutme
    })
  }
  listarExperience()
  {
    this.aboutmeService.getAboutme().subscribe(
      res=>{
        this.aboutmes=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }
}