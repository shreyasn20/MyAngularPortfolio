import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects={} as Project[] ;

  isCollapsed: boolean= true;
  typescript: boolean=false;
  angular: boolean=false;
  javascript: boolean=false;
  python: boolean=false;
  csharp: boolean=false;
  java: boolean=false;
  nodejs: boolean=false;
  aspnet: boolean=false;
  react: boolean=false;
  filtering: boolean=false;
  constructor(private titleService: Title, private projectService:ProjectsService){
    this.titleService.setTitle('Shreyas Nimbhore - Portfolio');
  }
  ngOnInit(): void {
    this.projects=this.projectService.GetProjects();
  }

  Filter(){
    let filterTags:Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET);
    }
    if(this.react){
      filterTags.push(Tag.REACT);
    }
    if(this.python || this.csharp || this.java || this.angular ||this.typescript || this.nodejs || this.aspnet || this.javascript|| this.react){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }
    this.projects=this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript=false;
    this.angular=false;
    this.python=false;
    this.csharp=false;
    this.java=false;
    this.nodejs=false;
    this.react=false;
    this.aspnet=false;
    this.filtering=false;
  
    this.projects = this.projectService.GetProjects();
  }
}
