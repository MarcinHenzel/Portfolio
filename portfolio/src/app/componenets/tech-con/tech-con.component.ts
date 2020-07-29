import { Component, OnInit } from '@angular/core';
import { imgObj } from 'src/app/shared/models/imgObj';
import skillImages from 'src/assets/staticData/skillImages.json';
@Component({
  selector: 'app-tech-con',
  templateUrl: './tech-con.component.html',
  styleUrls: ['./tech-con.component.scss']
})
export class TechConComponent implements OnInit {
  pictures: imgObj[] = skillImages;
  constructor() { }

  ngOnInit(): void {
  }

}
