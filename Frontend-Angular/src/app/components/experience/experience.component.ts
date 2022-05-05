import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationService, Education } from 'src/app/services/education.service';
import { ExperienceService, Experience } from 'src/app/services/experience.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { EdudialogComponent } from './edudialog/edudialog.component';
import { ExpdialogComponent } from './expdialog/expdialog.component';
import { ConfirmService } from 'src/app/services/confirm.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  educations: any=[];
  experiences: any=[];
  isLoggedIn = false;
  private roles: string[] = [];
  showAdmin = false;
  constructor(private educationService: EducationService,
    private experienceService: ExperienceService,
    public dialog: MatDialog,
    private confirm: ConfirmService,
    private _snackBar: MatSnackBar,
    private tokenStorageService : TokenStorageService) { }

  openAddEdu() {
    this.dialog.open(EdudialogComponent,{
      panelClass: "dialog-responsive"
    });
  }

  openAddJob() {
    this.dialog.open(ExpdialogComponent,{
      panelClass: "dialog-responsive"
    });
  }

  openEditEdu(education: any) {
    this.dialog.open(EdudialogComponent,{
      panelClass: "dialog-responsive",
      data:education
    })
  }

  openEditJob(education: any) {
    this.dialog.open(ExpdialogComponent,{
      panelClass: "dialog-responsive",
      data:education
    })
  }
  


  openDeleteEdu(id: number) {
    this.confirm
      .confirmDialog({
        title: 'Delete education',
        message: 'Are you sure to delete this education?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) this.educationService.deleteEducation(id).subscribe(
          res=>{this.ngOnInit();
            let config = new MatSnackBarConfig
            config.panelClass = ['green-snackbar'];
            config.verticalPosition = this.verticalPosition;
            config.horizontalPosition = this.horizontalPosition;
            config.duration = 1500;
            this._snackBar.open("Removed successfully", "" , config);},
          err=>console.log(err)
        );
      });
  }

  openDeleteJob(id: number) {
    this.confirm
      .confirmDialog({
        title: 'Delete job',
        message: 'Are you sure to delete this Job?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) this.experienceService.deleteExperience(id).subscribe(
          res=>{this.ngOnInit();
            let config = new MatSnackBarConfig
            config.panelClass = ['green-snackbar'];
            config.verticalPosition = this.verticalPosition;
            config.horizontalPosition = this.horizontalPosition;
            config.duration = 1500;
            this._snackBar.open("Removed successfully", "" , config);},
          err=>console.log(err)
        );
      });
  }

  ngOnInit(): void {
    this.listarEducation();
    this.listarExperience();

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;  
      this.showAdmin = this.roles.includes('ROLE_ADMIN');
    }
  }

  listarEducation()
  {
    this.educationService.getEducation().subscribe(
      res=>{
        this.educations=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  listarExperience()
  {
    this.experienceService.getExperience().subscribe(
      res=>{
        this.experiences=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }
}