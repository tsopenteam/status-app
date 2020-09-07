import { Component, OnInit } from '@angular/core';
import { MainService } from "./main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public listSliceCount = 5;

  public display = {
    statusLive: { date: "-", text: "-" },
    statusList: []
  };

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.GetData().subscribe(res => {
      this.display.statusList = res as [];
      this.display.statusList.reverse();
    });

    this.mainService.GetDataLive().subscribe(res => {
      this.display.statusLive.date = res["date"];
      this.display.statusLive.text = res["text"];
    });
  }

  public getIsSliceButton() {
    return this.listSliceCount < this.display.statusList.length;
  }

}
