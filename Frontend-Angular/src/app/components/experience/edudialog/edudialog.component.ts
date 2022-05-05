import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducationService } from 'src/app/services/education.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edudialog',
  templateUrl: './edudialog.component.html',
  styleUrls: ['./edudialog.component.css']
})
export class EdudialogComponent implements OnInit {
  eduForm !: FormGroup;
  actionBtn : string = "Add"
  titleTxt : string = "New"
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private educationService: EducationService,
    private formBuilder: FormBuilder,
    private dialogRef : MatDialogRef<EdudialogComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.eduForm = this.formBuilder.group({
      year1 : ['',Validators.required],
      year2 : ['',Validators.required],
      level : ['',Validators.required],
      place : ['',Validators.required],
      dtexto : ['',Validators.required]
    });
    if (this.editData) {
      this.actionBtn = "Save";
      this.titleTxt = "Modify"
      this.eduForm.controls['year1'].setValue(this.editData.year1);
      this.eduForm.controls['year2'].setValue(this.editData.year2);
      this.eduForm.controls['level'].setValue(this.editData.level);
      this.eduForm.controls['place'].setValue(this.editData.place);
      this.eduForm.controls['dtexto'].setValue(this.editData.dtexto);
    }
  }

  agregarEducation(){
    if(!this.editData) {
      if(this.eduForm.valid){
        this.educationService.saveEducation(this.eduForm.value).subscribe({
          next:(res)=>{
            let config = new MatSnackBarConfig
            config.panelClass = ['green-snackbar'];
            config.verticalPosition = this.verticalPosition;
            config.horizontalPosition = this.horizontalPosition;
            config.duration = 1500;
            this._snackBar.open("Successfully added", "" , config);
            this.eduForm.reset();
            this.dialogRef.close('save');
            window.location.reload();
          },
          error:()=>{
            let config = new MatSnackBarConfig
            config.panelClass = ['warn-snackbar'];
            config.verticalPosition = this.verticalPosition;
            config.horizontalPosition = this.horizontalPosition;
            config.duration = 1500;
            this._snackBar.open("Failed to add", "" , config);
          }
        })
      }
    } else {
      this.modificar()
    }
  }

  modificar(){
    this.educationService.editEducation(this.editData.id,this.eduForm.value).subscribe({
      next:(res)=>{
        let config = new MatSnackBarConfig
          config.panelClass = ['green-snackbar'];
          config.verticalPosition = this.verticalPosition;
          config.horizontalPosition = this.horizontalPosition;
          config.duration = 1500;
          this._snackBar.open("Successfully modified", "" , config);
          this.eduForm.reset();
          this.dialogRef.close('update');
          window.location.reload();
      },
      error:()=>{
        let config = new MatSnackBarConfig
          config.panelClass = ['warn-snackbar'];
          config.verticalPosition = this.verticalPosition;
          config.horizontalPosition = this.horizontalPosition;
          config.duration = 1500;
          this._snackBar.open("Failed to modify", "" , config);
      }
    })
  }
}