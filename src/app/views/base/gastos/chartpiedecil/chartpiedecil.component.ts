import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chartpiedecil',
  templateUrl: './chartpiedecil.component.html',
  styleUrls: ['./chartpiedecil.component.scss']
})
export class ChartpiedecilComponent {
  @Input() data: []=[];
  @Input() tittle: any ;

  chartPieData = {
    labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    datasets: [
      {
        data: [this.data],
        backgroundColor: ['#62686F','#61686F','#52686F','#42686F','#32686F', '#0F3C6F', '#0F0C6F','03366F','02266F','00166F'],
        hoverBackgroundColor:  ['#62686F','#61686F','#52686F','#42686F','#32686F', '#0F3C6F', '#0F0C6F','03366F','02266F','00166F']
      }
    ]
  };
}
