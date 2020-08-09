import { Component, OnInit } from '@angular/core';
import { ImgObj } from 'src/app/shared/models/ImgObj';
import skillImages from 'src/assets/staticData/skillImages.json';
@Component({
  selector: 'app-tech-con',
  templateUrl: './tech-con.component.html',
  styleUrls: ['./tech-con.component.scss']
})
export class TechConComponent implements OnInit {
  pictures: ImgObj[] = skillImages;
  constructor() { }

  ngOnInit(): void {
  }

}
