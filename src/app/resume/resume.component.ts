import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isWorkExperienaceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title,private renderer:Renderer2){
    this.titleService.setTitle('Shreyas Nimbhore - Resume');
  }
  DownloadFile(){
    const link= this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','assets/Shreyas CV.pdf');
    link.setAttribute('download','Shreyas CV.pdf');
    link.click();
    link.remove();
  }
  
  
}
