import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers:[{
    provide:STEPPER_GLOBAL_OPTIONS,
    useValue:{showError: true}
    }
  ]
})
export class ProjectDetailComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }
    projectDetailGroup = this._formBuilder.group({
      org: [''],
      cat: [''],
      title: [''],
      des: ['']
    });
    projectCostGroup = this._formBuilder.group({
      proName:[''],
      proDuration:[''],
      proCost:['']
    });

    projectDetails: any;
    projectCost: any;
    
    ngOnInit(): void {
 
    }

    addProjectDetail(){
       this.projectDetails=this.projectDetailGroup.value;
    }

    addProjectCost(){
      this.projectCost = this.projectCostGroup.value;
    }

    submitDetail(){
      const url = 'http://localhost:8080/project-overview';
      const body = {
        projectDetails: this.projectDetails,
        projectCost: this.projectCost
      }
      this.http.post(url, body).subscribe(res => {
        console.log(res);
      });
    }

}
