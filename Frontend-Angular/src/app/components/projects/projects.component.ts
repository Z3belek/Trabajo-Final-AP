import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService, Project } from 'src/app/services/project.service';
import { ProdialogComponent } from './prodialog/prodialog.component';
import { SingleProjectComponent } from './single-project/single-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any=[];

  constructor(private projectService: ProjectService, public dialog: MatDialog) { }

  openSingleProject(project: any) {
    this.dialog.open(SingleProjectComponent,{
      panelClass: 'dialog-responsive-v2',
      data: project
    })
  }
  openEditProject(project: any) {
    this.dialog.open(ProdialogComponent,{
      panelClass: "dialog-responsive",
      data:project
    })
  }
  openAddProject() {
    this.dialog.open(ProdialogComponent,{
      panelClass: "dialog-responsive"
    });
  }
  ngOnInit(): void {
    this.listarProjects();
  }
  listarProjects()
  {
    this.projectService.getProject().subscribe(
      res=>{
        this.projects=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }
  eliminarPro(id:number)
  {
    this.projectService.deleteProject(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
