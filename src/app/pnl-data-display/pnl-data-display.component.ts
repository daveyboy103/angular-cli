import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {DataList, DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-pnl-data-display',
  templateUrl: './pnl-data-display.component.html',
  styleUrls: ['./pnl-data-display.component.css']
})
export class PnlDataDisplayComponent implements OnInit {
  observableData! : Observable<DataList[]>;
  data!: DataList[];
  errorMessage = '';
  checked: string = ""

  constructor(private dataService: DataServiceService) {
    this.observableData = this.dataService.getData();
    this.observableData.subscribe(
      data => this.data = data,
      error => this.errorMessage = error);
  }
  ngOnInit(): void {
  }

  pnlTotal(): number{
    let sum: number = 0;
    this.data.filter(x => x.key === 'pnl').forEach( x => sum += x.value);
    return sum;
  }

  isQualifyingDetailKey(key: string) : boolean{
    if(key == "pnl")
      return true;
    return key.startsWith("pnl.") && this.containsTwoDots(key);

  }

  private containsTwoDots(key: string): boolean {

    if(key.startsWith('pnl.comp.rate.')) return false;
    if(key.startsWith('pnl.comp.fx.')) return false;
    if(key.startsWith('pnl.comp.vol.')) return false;
    if(key.startsWith('pnl.comp.xccy.')) return false;
    return true;
  }

  onCheckBoxChanged(checked: string) {
    if(this.checked.length == 0)
      this.checked = "checked";
    else
      this.checked = "";

    console.log(checked);
  }

  getAbsValue(value: number) {
    return Math.abs(value);
  }
}
