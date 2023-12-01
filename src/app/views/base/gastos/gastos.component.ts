import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit{
  constructor(private apiService: ApiService) { }
  data: any[] = [];
  etiquetadecil: string[] = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  decil1: number[] = [];
  decil2: number[] = [];
  decil3: number[] = [];
  decil4: number[] = [];
  decil5: number[] = [];
  decil6: number[] = [];
  decil7: number[] = [];
  decil8: number[] = [];
  decil9: number[] = [];
  decil10: number[] = [];
  periodo: string[] = [];
  periodog: string[] = ["2016","2018","2020","2022"];
  chartPieData1: any;
  chartPieData2: any;
  chartPieData3: any;
  chartPieData4: any;
  chartBarData1: any;
  chartBarData2: any;
  chartBarData3: any;
  chartBarData4: any;
  chartBarData5: any;
  chartBarData6: any;
  vestido: number[] = [];
  salud: number[] = [];
  alimento: number[] = [];
  educa: number[] = [];
  trans: number[] = [];
  serv: number[] = [];
  

  ngOnInit() {
     this.cargardatos();
    
  }
  
  cargardatos(){
    this.apiService.getIdecil().subscribe(data=>{
      this.data = data;

      data.Series[0].OBSERVATIONS.forEach(
        (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
          const obsValue = parseFloat(observation.OBS_VALUE);
          if (!isNaN(obsValue)) {
            this.periodo.push(observation.TIME_PERIOD);
          }
        }
      );

      this.decil1 = data.Series[0].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil2 = data.Series[3].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil3 = data.Series[7].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil4 = data.Series[4].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil5 = data.Series[1].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil6 = data.Series[6].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil7 = data.Series[8].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil8 = data.Series[9].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil9 = data.Series[5].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      this.decil10 = data.Series[2].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseInt(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));


      //Graficas
      this.chartPieData1 = {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
        datasets: [
          {
            data: [this.decil1[0],this.decil2[0],this.decil3[0],this.decil4[0],this.decil5[0],
            this.decil6[0],this.decil7[0],this.decil8[0],this.decil9[0],this.decil10[0],],
            backgroundColor: ['#B3E5FC','#C8E6C9','#81D4FA','#A5D6A7','#4FC3F7',
            '#81C784','#29B6F6','#66BB6A','#03A9F4','#4CAF50'],
            hoverBackgroundColor:  ['#004d00','#0b5e0b','#177c17','#229d22','#2fbd2f',
            '#3dda3d','#5cea5c','#7bfb7b','#9af99a','#b8fcb8']
          }
        ]
      };
      this.chartPieData2 = {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
        datasets: [
          {
            data: [this.decil1[1],this.decil2[1],this.decil3[1],this.decil4[1],this.decil5[1],
            this.decil6[1],this.decil7[1],this.decil8[1],this.decil9[1],this.decil10[1],],
            backgroundColor: ['#B3E5FC','#C8E6C9','#81D4FA','#A5D6A7','#4FC3F7',
            '#81C784','#29B6F6','#66BB6A','#03A9F4','#4CAF50'],
            hoverBackgroundColor:  ['#004d00','#0b5e0b','#177c17','#229d22','#2fbd2f',
            '#3dda3d','#5cea5c','#7bfb7b','#9af99a','#b8fcb8']
          }
        ]
      };
      this.chartPieData3 = {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
        datasets: [
          {
            data: [this.decil1[2],this.decil2[2],this.decil3[2],this.decil4[2],this.decil5[2],
            this.decil6[2],this.decil7[2],this.decil8[2],this.decil9[2],this.decil10[2],],
            backgroundColor: ['#B3E5FC','#C8E6C9','#81D4FA','#A5D6A7','#4FC3F7',
            '#81C784','#29B6F6','#66BB6A','#03A9F4','#4CAF50'],
            hoverBackgroundColor:  ['#004d00','#0b5e0b','#177c17','#229d22','#2fbd2f',
            '#3dda3d','#5cea5c','#7bfb7b','#9af99a','#b8fcb8']
          }
        ]
      };
      this.chartPieData4 = {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
        datasets: [
          {
            data: [this.decil1[2],this.decil2[2],this.decil3[2],this.decil4[2],this.decil5[2],
            this.decil6[2],this.decil7[2],this.decil8[2],this.decil9[2],this.decil10[2],],
            backgroundColor: ['#B3E5FC','#C8E6C9','#81D4FA','#A5D6A7','#4FC3F7',
            '#81C784','#29B6F6','#66BB6A','#03A9F4','#4CAF50'],
            hoverBackgroundColor:  ['#004d00','#0b5e0b','#177c17','#229d22','#2fbd2f',
            '#3dda3d','#5cea5c','#7bfb7b','#9af99a','#b8fcb8']
          }
        ]
      };



    })
     
    this.apiService.getgasto().subscribe(data=>{

        data.Series[0].OBSERVATIONS.forEach(
          (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
            const obsValue = parseInt(observation.OBS_VALUE);
            this.vestido.push(obsValue)
          }
        );
        data.Series[1].OBSERVATIONS.forEach(
          (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
            const obsValue = parseInt(observation.OBS_VALUE);
            this.salud.push(obsValue)
          }
        );
        data.Series[2].OBSERVATIONS.forEach(
          (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
            const obsValue = parseInt(observation.OBS_VALUE);
            this.alimento.push(obsValue)
          }
        );
        data.Series[3].OBSERVATIONS.forEach(
          (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
            const obsValue = parseInt(observation.OBS_VALUE);
            this.educa.push(obsValue)
          }
        );
        data.Series[4].OBSERVATIONS.forEach(
          (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
            const obsValue = parseInt(observation.OBS_VALUE);
            this.trans.push(obsValue)
          }
        );
        data.Series[5].OBSERVATIONS.forEach(
          (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
            const obsValue = parseInt(observation.OBS_VALUE);
            this.serv.push(obsValue)
          }
        );
        
      

      


      this.chartBarData1 = {
        labels: this.periodog,
        datasets: [
          {
            label: 'Vestido y Calzado',
            backgroundColor: '#81C784',
            data: [this.vestido[0],this.vestido[1],this.vestido[2],this.vestido[3]],
          },
        ],
      };
      this.chartBarData2 = {
        labels: this.periodog,
        datasets: [
          {
            label: 'Cuidados de salud',
            backgroundColor: '#81C784',
            data: [this.salud[0],this.salud[1],this.salud[2],this.salud[3]],
          },
        ],
      };
      this.chartBarData3 = {
        labels: this.periodog,
        datasets: [
          {
            label: 'Alimentos, Bebidas y Tabaco',
            backgroundColor: '#81C784',
            data: [this.alimento[0],this.alimento[1],this.alimento[2],this.alimento[3]],
          },
        ],
      };
      this.chartBarData4 = {
        labels: this.periodog,
        datasets: [
          {
            label: 'Educación y Esparcimiento',
            backgroundColor: '#81C784',
            data: [this.educa[0],this.educa[1],this.educa[2],this.educa[3]],
          },
        ],
      };
      this.chartBarData5 = {
        labels: this.periodog,
        datasets: [
          {
            label: 'Transporte y Comunicaciones',
            backgroundColor: '#81C784',
            data: [this.trans[0],this.trans[1],this.trans[2],this.trans[3]],
          },
        ],
      };
      this.chartBarData6 = {
        labels: this.periodog,
        datasets: [
          {
            label: 'Artículos y Servicios para la casa',
            backgroundColor: '#81C784',
            data: [this.serv[0],this.serv[1],this.serv[2],this.serv[3]],
          },
        ],
      };
      
    })
    
  }

}
