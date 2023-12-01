import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private Iurl = 'https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/'
  private Furl = '/es/0700/false/BISE/2.0/91077add-2225-c208-cade-255600964a42?type=json'
  private Furlactual = '/es/0700/true/BISE/2.0/91077add-2225-c208-cade-255600964a42?type=json'
  
  constructor(private http: HttpClient) { }

  public getjefatura():Observable<any>{
    return this.http.get<any>(this.Iurl + '1002000019,1002000020,1002000022,1002000023,1002000021' + this.Furl);
  }
  public gettipofamilia():Observable<any>{
    //monoparentales,biparentales,compuestos,ampliados,nuclearesy otros
    return this.http.get<any>(this.Iurl + '6200240385,6200240472,6200240457,6200240519,6200240487,6200240409' + this.Furl);
  }
  public getIdecil():Observable<any>{
    return this.http.get<any>(this.Iurl + '6207048662,6207048665,6207048669,6207048666,6207048663,6207048668,6207048670,6207048671,6207048667,6207048664' + this.Furl);
  }
  public getgasto():Observable<any>{
    //vestido y calzado,cuidados de la salud,alimentos bevida tabaco,esparcimiento y educacion,transporte y comunicaciones, servicios para la casa
    return this.http.get<any>(this.Iurl + '6207048672,6207048673,6207048677,6207048678,6207048679,6207048680' + this.Furl);
  }
  public getvivenda():Observable<any>{
    //propia
    return this.http.get<any>(this.Iurl + '6207019022,6207019027' + this.Furl);
  }
  public getcaractvivienda():Observable<any>{
    //piso de tierra, agua entubada, electricidad, drenaje, escusado, techos recistentes, internet,
    //pantalla plana , celular, automovil, refrigerador, lavadora
    return this.http.get<any>(this.Iurl + "3114004001,3114005001,3114006001,6200031290,6200031291,6200108938,6207019042,6207019052,6207019055,6207129635,6207129812,6207129813" + this.Furlactual)
  }

}
