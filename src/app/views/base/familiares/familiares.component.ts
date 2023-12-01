import { Component,  OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  templateUrl: './familiares.component.html',
  styleUrls: ['./familiares.component.scss']
})
export class FamiliaresComponent implements OnInit {

  

  data: any[] = [];
  chartRadarData: any;
  monoparentales: number[] = [];
  biparentales: number[] = [];
  compuestos: number[] = [];
  ampliados: number[] = [];
  nucleares: number[] = [];
  otros: number[] = [];
  periodo: string[] = [];
  chartBarData: any;
  chartBarOptions: any;
  chartBarData1: any;
  chartBarOptions1: any;
  
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.datosFamilia();
    
  }

  datosFamilia(){
    this.apiService.gettipofamilia().subscribe(data =>{
      this.data = data;

      data.Series[0].OBSERVATIONS.forEach(
        (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
          const obsValue = parseFloat(observation.OBS_VALUE);
          if (!isNaN(obsValue)) {
            this.periodo.push(observation.TIME_PERIOD);
          }
        }
      );

      this.monoparentales = data.Series[0].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.biparentales = data.Series[1].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.compuestos = data.Series[2].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.ampliados = data.Series[3].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.nucleares = data.Series[4].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.otros = data.Series[5].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));



      //Grafica
      this.chartBarData = {
        labels: [...this.periodo].slice(0, this.periodo.length),
        datasets: [
          {
            label: 'Monoparentales',
            backgroundColor: '#041D62',
            data: this.monoparentales,
          },
          {
            label: 'Biparentales',
            backgroundColor: '#B3E5FC',
            data: this.biparentales,
          },
          {
            label: 'Compuestos',
            backgroundColor: '#81D4FA',
            data: this.compuestos,
          }
        ],
      };
      this.chartBarOptions = {
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 20, // Tamaño de fuente para los labels en el eje x
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 20, // Tamaño de fuente para los labels en el eje y
              },
            },
          ],
        },
      }; 

      this.chartBarData1 = {
        labels: [...this.periodo].slice(0, this.periodo.length),
        datasets: [
          {
            label: 'Ampliados',
            backgroundColor: '#041D62',
            data: this.ampliados,
          },
          {
            label: 'Nucleares',
            backgroundColor: '#B3E5FC',
            data: this.nucleares,
          },
          {
            label: 'Otros',
            backgroundColor: '#81D4FA',
            data: this.otros,
          }
        ],
      };
      this.chartBarOptions1 = {
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 20, // Tamaño de fuente para los labels en el eje x
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 20, // Tamaño de fuente para los labels en el eje y
              },
            },
          ],
        },
      };



      
      console.log(this.periodo)
      console.log(this.monoparentales)
      

    })

    
  }

  
  get randomData() {
    return Math.round(Math.random() * 100);
  }
}
