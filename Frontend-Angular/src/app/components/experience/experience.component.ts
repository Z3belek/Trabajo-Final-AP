import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationService, Education } from 'src/app/services/education.service';
import { ExperienceService, Experience } from 'src/app/services/experience.service';
import { EdudialogComponent } from './edudialog/edudialog.component';
import { ExpdialogComponent } from './expdialog/expdialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  educations: any=[];
  experiences: any=[];
  constructor(private educationService: EducationService,private experienceService: ExperienceService, public dialog: MatDialog) { }

  openAddEdu() {
    this.dialog.open(EdudialogComponent,{
      panelClass: "dialog-responsive"
    });
  }

  openEditEdu(education: any) {
    this.dialog.open(EdudialogComponent,{
      panelClass: "dialog-responsive",
      data:education
    })
  }

  openAddJob() {
    this.dialog.open(ExpdialogComponent,{
      panelClass: "dialog-responsive"
    });
  }

  openEditJob(education: any) {
    this.dialog.open(ExpdialogComponent,{
      panelClass: "dialog-responsive",
      data:education
    })
  }
  ngOnInit(): void {
    this.listarEducation();
    this.listarExperience();
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
  
  eliminarEdu(id:number)
  {
    this.educationService.deleteEducation(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
  eliminarExp(id:number)
  {
    this.experienceService.deleteExperience(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
}