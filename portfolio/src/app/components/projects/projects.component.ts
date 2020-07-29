import { Component, OnInit, Input } from '@angular/core';
import caruData from 'src/assets/staticData/projectCarouselData.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor() { }
  itfs = caruData[0];
  tribalManager = caruData[1];
  ngOnInit(): void {
  }

}
