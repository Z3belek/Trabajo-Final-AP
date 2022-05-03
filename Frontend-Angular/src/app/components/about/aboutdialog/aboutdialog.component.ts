import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-aboutdialog',
  templateUrl: './aboutdialog.component.html',
  styleUrls: ['./aboutdialog.component.css']
})
export class AboutdialogComponent implements OnInit {
  editaboutForm !: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private aboutmeService: AboutmeService,
    private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AboutdialogComponent>,
    private _snackBar: MatSnackBar,
    private matIconRegistry: MatIconRegistry) {
      this.matIconRegistry.addSvgIcon("kinkedin", "../../../../assets/img/linkedin.svg");
    }

  ngOnInit(): void {
    this.editaboutForm = this.formBuilder.group({
    name : ['',Validators.required],
    skill1 : ['',Validators.required],
    skill2 : ['',Validators.required],
    skill3 : ['',Validators.required],
    percentage1 : ['',Validators.required],
    percentage2 : ['',Validators.required],
    percentage3 : ['',Validators.required],
    urlselfie : ['',Validators.required],
    urlcv : ['',Validators.required],
    linkedin : ['',Validators.required],
    github : ['',Validators.required],
    mail : ['',Validators.required],
    pinterest : ['',Validators.required],
    dtexto : ['',Validators.required],
    pcompletados : ['',Validators.required],
    ctomados : ['',Validators.required],
    csatisfactorios : ['',Validators.required],
    premios : ['',Validators.required]
    });
    this.editaboutForm.controls['name'].setValue(this.editData.name);
    this.editaboutForm.controls['skill1'].setValue(this.editData.skill1);
    this.editaboutForm.controls['skill2'].setValue(this.editData.skill2);
    this.editaboutForm.controls['skill3'].setValue(this.editData.skill3);
    this.editaboutForm.controls['percentage1'].setValue(this.editData.percentage1);
    this.editaboutForm.controls['percentage2'].setValue(this.editData.percentage2);
    this.editaboutForm.controls['percentage3'].setValue(this.editData.percentage3);
    this.editaboutForm.controls['urlselfie'].setValue(this.editData.urlselfie);
    this.editaboutForm.controls['urlcv'].setValue(this.editData.urlcv);
    this.editaboutForm.controls['linkedin'].setValue(this.editData.linkedin);
    this.editaboutForm.controls['github'].setValue(this.editData.github);
    this.editaboutForm.controls['mail'].setValue(this.editData.mail);
    this.editaboutForm.controls['pinterest'].setValue(this.editData.pinterest);
    this.editaboutForm.controls['dtexto'].setValue(this.editData.dtexto);
    this.editaboutForm.controls['pcompletados'].setValue(this.editData.pcompletados);
    this.editaboutForm.controls['ctomados'].setValue(this.editData.ctomados);
    this.editaboutForm.controls['csatisfactorios'].setValue(this.editData.csatisfactorios);
    this.editaboutForm.controls['premios'].setValue(this.editData.premios);
  }
  modificar(){
    this.aboutmeService.editAboutme(this.editData.id,this.editaboutForm.value).subscribe({
      next:(res)=>{
        let config = new MatSnackBarConfig
          config.panelClass = ['green-snackbar'];
          config.verticalPosition = this.verticalPosition;
          config.horizontalPosition = this.horizontalPosition;
          config.duration = 1500;
          this._snackBar.open("Successfully modified", "" , config);
          this.editaboutForm.reset();
          this.dialogRef.close('update');
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