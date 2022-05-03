import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService, Project } from 'src/app/services/project.service';
import { ProdialogComponent } from './prodialog/prodialog.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ConfirmService } from 'src/app/services/confirm.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any=[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private projectService: ProjectService,
    public dialog: MatDialog,
    private confirm: ConfirmService,
    private _snackBar: MatSnackBar) { }

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

  openDeletePro(id: number) {
    this.confirm
      .confirmDialog({
        title: 'Delete project',
        message: 'Are you sure to delete this project?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) this.projectService.deleteProject(id).subscribe(
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

  eliminarPro(id:number)
  {
    this.projectService.deleteProject(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
