import { Component, OnInit } from '@angular/core';
import { imgObj } from 'src/app/shared/models/imgObj';
import { DynamicImgsService } from 'src/app/shared/services/dynamic-imgs.service';
@Component({
  selector: 'app-tech-con',
  templateUrl: './tech-con.component.html',
  styleUrls: ['./tech-con.component.scss']
})
export class TechConComponent implements OnInit {
  pictures: imgObj[];
  constructor(private dynamicImg: DynamicImgsService) { }

  ngOnInit(): void {
    this.pictures = this.dynamicImg.techIcons;
  }

}
