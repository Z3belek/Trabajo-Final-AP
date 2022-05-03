import { Component, OnInit } from '@angular/core';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aboutmeService : AboutmeService) { }
  aboutmes: any;
  ngOnInit(): void {
    this.listarExperience()
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