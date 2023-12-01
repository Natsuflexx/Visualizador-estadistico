import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
  styleUrls: ['./ocupacion.component.scss']
})
export class OcupacionComponent {


  constructor(private apiService: ApiService) { }
privada =68.82;
renta =15.92;
otros= 100 - this.privada + this.renta;
chartPieData = {
  labels: ["propias", 'alquiladas', 'otras'],
  datasets: [
    {
      data: [this.privada,this.renta,this.otros],
      backgroundColor: ['#B3E5FC','#29B6F6','#81D4FA'],
      hoverBackgroundColor:  ['#004d00','#0b5e0b','#177c17']
    }
  ]
};

}
