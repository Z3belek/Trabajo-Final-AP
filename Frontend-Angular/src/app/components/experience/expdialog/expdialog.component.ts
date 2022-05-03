import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-expdialog',
  templateUrl: './expdialog.component.html',
  styleUrls: ['./expdialog.component.css']
})
export class ExpdialogComponent implements OnInit {
  jobForm !: FormGroup;
  actionBtn : string = "Añadir"
  titleTxt : string = "Agregar"
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private experienceService: ExperienceService,
    private formBuilder: FormBuilder,
    private dialogRef : MatDialogRef<ExpdialogComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      year1 : ['',Validators.required],
      year2 : ['',Validators.required],
      role : ['',Validators.required],
      place : ['',Validators.required],
      dtexto : ['',Validators.required]
    });
    if (this.editData) {
      this.actionBtn = "Guardar";
      this.titleTxt = "Modificar"
      this.jobForm.controls['year1'].setValue(this.editData.year1);
      this.jobForm.controls['year2'].setValue(this.editData.year2);
      this.jobForm.controls['role'].setValue(this.editData.role);
      this.jobForm.controls['place'].setValue(this.editData.place);
      this.jobForm.controls['dtexto'].setValue(this.editData.dtexto);
    }
  }

  agregarExperience(){
    if(!this.editData) {
      if(this.jobForm.valid){
        this.experienceService.saveExperience(this.jobForm.value).subscribe({
          next:(res)=>{
            let config = new MatSnackBarConfig
            config.panelClass = ['green-snackbar'];
            config.verticalPosition = this.verticalPosition;
            config.horizontalPosition = this.horizontalPosition;
            config.duration = 1500;
            this._snackBar.open("Agregado correctamente", "" , config);
            this.jobForm.reset();
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
    this.experienceService.editExperience(this.editData.id,this.jobForm.value).subscribe({
      next:(res)=>{
        let config = new MatSnackBarConfig
          config.panelClass = ['green-snackbar'];
          config.verticalPosition = this.verticalPosition;
          config.horizontalPosition = this.horizontalPosition;
          config.duration = 1500;
          this._snackBar.open("Modificado correctamente", "" , config);
          this.jobForm.reset();
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