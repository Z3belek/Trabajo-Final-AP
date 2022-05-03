import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project, ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {
  constructor(private projectService : ProjectService,
    private dialogRef : MatDialogRef<SingleProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Project) { }

  ngOnInit(): void {
    
  }
}
