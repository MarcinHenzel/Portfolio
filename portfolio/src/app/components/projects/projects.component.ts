import { Component, OnInit} from '@angular/core';
import projects from 'src/assets/staticData/projects.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor() { }
  projects = projects;
  ngOnInit(): void {
  }

}
