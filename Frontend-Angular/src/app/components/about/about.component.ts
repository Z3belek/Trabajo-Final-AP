import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { AboutdialogComponent } from './aboutdialog/aboutdialog.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isLoggedIn = false;
  private roles: string[] = [];
  showAdmin = false;
  aboutmes: any;

  constructor(
    private aboutmeService : AboutmeService,
    public dialog: MatDialog,
    private tokenStorageService : TokenStorageService
    ) { }

  ngOnInit(): void {
    this.listarExperience();

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;  
      this.showAdmin = this.roles.includes('ROLE_ADMIN');
    }
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