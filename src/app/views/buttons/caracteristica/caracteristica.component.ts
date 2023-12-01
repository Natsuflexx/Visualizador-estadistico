import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-caracteristica',
  templateUrl: './caracteristica.component.html',
  styleUrls: ['./caracteristica.component.scss']
})
export class CaracteristicaComponent implements OnInit{

  data: any[] = [];
  caracter: any[] = [];
  aspecto = ["Piso de Tierra","Agua entubada","Electricidad","Drenaje","Excusado","Techo resistente","internet",
            "Pantalla plana","Celular","Automóvil","Refrigerador","Lavadora"];
  link = ["../../../../assets/aspecto/piso de tierra.png","../../../../assets/aspecto/agua entubada.png",
          "../../../../assets/aspecto/electricidad.png","../../../../assets/aspecto/drenaje.png",
          "../../../../assets/aspecto/excusado.png","../../../../assets/aspecto/techo resistente.png",
          "../../../../assets/aspecto/internet.png","../../../../assets/aspecto/pantalla plana.png",
          "../../../../assets/aspecto/celular.png","../../../../assets/aspecto/automovil.png",
          "../../../../assets/aspecto/refrigerador.png","../../../../assets/aspecto/lavadora.png"];
  piso: GLfloat[] = [];
  agua: GLfloat[] = [];
  elect: GLfloat[] = [];
  drenaje: GLfloat[] = [];
  escusado: GLfloat[] = [];
  techo: GLfloat[] = [];
  internet: GLfloat[] = [];
  tele: GLfloat[] = [];
  movil: GLfloat[] = [];
  carro: GLfloat[] = [];
  refri: GLfloat[] = [];
  lavador: GLfloat[] = [];

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.datacaracteris()
  }
  links(i: number): string {
    return this.link[i]
  }
  datacaracteris(){
    this.apiService.getcaractvivienda().subscribe(data=>{
      this.data = data;

      for (let i = 0; i < 12; i++) {
        this.caracter[i] = data.Series[i].OBSERVATIONS.map(
          (observation: { OBS_VALUE: string }) =>
            parseFloat(observation.OBS_VALUE).toFixed(2)
        );
        
      }
      
    })
    console.log(this.caracter);
  }
  



}
