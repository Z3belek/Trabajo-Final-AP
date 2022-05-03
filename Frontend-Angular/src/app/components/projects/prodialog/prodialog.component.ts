import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-prodialog',
  templateUrl: './prodialog.component.html',
  styleUrls: ['./prodialog.component.css']
})
export class ProdialogComponent implements OnInit {
  proForm !: FormGroup;
  actionBtn : string = "Añadir"
  titleTxt : string = "Agregar"
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private dialogRef : MatDialogRef<ProdialogComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

    ngOnInit(): void {
      this.proForm = this.formBuilder.group({
        title : ['',Validators.required],
        type : ['',Validators.required],
        place : ['',Validators.required],
        imgurl : ['',Validators.required],
        dtexto : ['',Validators.required]
      });
      if (this.editData) {
        this.actionBtn = "Guardar";
        this.titleTxt = "Modificar"
        this.proForm.controls['title'].setValue(this.editData.title);
        this.proForm.controls['type'].setValue(this.editData.type);
        this.proForm.controls['place'].setValue(this.editData.place);
        this.proForm.controls['imgurl'].setValue(this.editData.imgurl);
        this.proForm.controls['dtexto'].setValue(this.editData.dtexto);
      }
    }
  
    agregarExperience(){
      if(!this.editData) {
        if(this.proForm.valid){
          this.projectService.saveProject(this.proForm.value).subscribe({
            next:(res)=>{
              let config = new MatSnackBarConfig
              config.panelClass = ['green-snackbar'];
              config.verticalPosition = this.verticalPosition;
              config.horizontalPosition = this.horizontalPosition;
              config.duration = 1500;
              this._snackBar.open("Agregado correctamente", "" , config);
              this.proForm.reset();
              this.dialogRef.close('save');
            },
            error:()=>{
              let config = new MatSnackBarConfig
              config.panelClass = ['warn-snackbar'];
              config.verticalPosition = this.verticalPosition;
              config.horizontalPosition = this.horizontalPosition;
              config.duration = 1500;
              this._snackBar.open("Error al agregar", "" , config);
            }
          })
        }
      } else {
        this.modificar()
      }
    }
  
    modificar(){
      this.projectService.editProject(this.editData.id,this.proForm.value).subscribe({
        next:(res)=>{
          let config = new MatSnackBarConfig
            config.panelClass = ['green-snackbar'];
            config.verticalPosition = this.verticalPosition;
            config.horizontalPosition = this.horizontalPosition;
            config.duration = 1500;
            this._snackBar.open("Modificado correctamente", "" , config);
            this.proForm.reset();
            this.dialogRef.close('update');
        },
        error:()=>{
          let config = new MatSnackBarConfig
            config.panelClass = ['warn-snackbar'];
            config.verticalPosition = this.verticalPosition;
            config.horizontalPosition = this.horizontalPosition;
            config.duration = 1500;
            this._snackBar.open("Error al modificar", "" , config);
        }
      })
    }
  }