import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../../service/api.service';
import * as Chart from 'chart.js';
import 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-jefatura',
  templateUrl: './jefatura.component.html',
  styleUrls: ['./jefatura.component.scss'],
})
export class JefaturaComponent implements OnInit {

  

  data: any[] = [];
  jefaturaM: number[] = [];
  jefaturaF: number[] = [];
  TjM: GLfloat[] = [];
  TjF: GLfloat[] = [];
  TP: GLfloat[] = [];
  pf: GLfloat[] = [];
  pm: GLfloat[] = [];
  periodo: string[] = [];
  periodo2: string[] = [];
  chartBarData: any;
  chartBarOptions: any;
  chartLineData: any;
  chartLineOptions: any;

  constructor(
    private sanitizer: DomSanitizer,
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.datajefatura();
  }
  datajefatura() {
    this.apiService.getjefatura().subscribe((data) => {
      this.data = data;
      data.Series[0].OBSERVATIONS.forEach(
        (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
          const obsValue = parseFloat(observation.OBS_VALUE);
          if (!isNaN(obsValue)) {
            this.periodo.push(observation.TIME_PERIOD);
            this.jefaturaM.push(parseFloat(observation.OBS_VALUE));
          }
        }
      );
      this.jefaturaF = data.Series[1].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      ).filter((element: number) => !isNaN(element));

      for (let i = 0; i < this.jefaturaM.length; i++) {
        this.pf[i] =
          this.jefaturaF[i] / (this.jefaturaF[i] + this.jefaturaM[i]);
        this.pm[i] =
          this.jefaturaM[i] / (this.jefaturaF[i] + this.jefaturaM[i]);
      }

      data.Series[2].OBSERVATIONS.forEach(
        (observation: { OBS_VALUE: any; TIME_PERIOD: any }) => {
            this.periodo2.push(observation.TIME_PERIOD);
        }
      );
      this.TjM = data.Series[2].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      );

      this.TjF = data.Series[3].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      );

      this.TP = data.Series[4].OBSERVATIONS.map(
        (observation: { OBS_VALUE: string }) =>
          parseFloat(observation.OBS_VALUE)
      );

      for (let i = 0; i < this.TjM.length; i++) {
        if (isNaN(this.TjF[i])) {
          this.TjF[i] = this.TjF[i + 1];
        }
        if (isNaN(this.TP[i])) {
          this.TP[i] = this.TP[i + 1];
        }
        if (isNaN(this.TjM[i])) {
          this.TjM[i] = this.TjM[i + 1];
        }
      }

      this.chartBarData = {
        labels: [...this.periodo].slice(0, 5),
        datasets: [
          {
            label: 'Hogares con jefatura masculina',
            backgroundColor: '#041D62',
            data: this.pm,
          },
          {
            label: 'Hogares con jefatura femenina',
            backgroundColor: '#B3E5FC',
            data: this.pf,
          },
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

      this.chartLineData = {
        labels: [...this.periodo2].slice(0, this.periodo2.length),
        datasets: [
          {
            label: 'Tamaño de hogares con jefatura femenina',
            backgroundColor: '#B3E5FC',
            borderColor: '#B3E5CC',
            pointBackgroundColor: '#B3E4FC',
            pointBorderColor: '#fff',
            data: this.TjM,
          },
          {
            label: 'Tamaño de hogares con jefatura masculina',
            backgroundColor: 'rgb(16, 23, 91)',
            borderColor: 'rgba(16, 23, 91, 0.5)',
            pointBackgroundColor: 'rgb(16, 23, 91)',
            pointBorderColor: '#fff',
            data: this.TjF,
          },
          {
            label: 'Tamaño promedio de hogares',
            backgroundColor: 'rgb(208, 172, 130)',
            borderColor: 'rgba(208, 172, 130, 0.5)',
            pointBackgroundColor: 'rgb(208, 172, 130)',
            pointBorderColor: '#fff',
            data: this.TP,
          },
        ],
      };

      this.chartLineOptions = {
        maintainAspectRatio: false,
      };

      


      console.log(this.TjM);
      console.log(this.TjF);
      console.log(this.TP);
      console.log(this.periodo2.length);
    });
  }
}
