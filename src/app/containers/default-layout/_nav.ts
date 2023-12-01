import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Visualizador estadístico',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    /*badge: {
      color: 'info',
      text: 'NEW'
    }*/
  },
  {
    name: 'Indicadores',
    title: true
  },
  {
    name: 'Hogar',
    url: '/base',
    iconComponent: { name: 'cil-home' },
    children: [
      {
        name: 'Jefaturas',
        url: '/base/jefatura'
      },
      {
        name: 'Conformación',
        url: '/base/familiares'
      },
      {
        name: 'Ingresos y Gastos',
        url: '/base/gastos'
      },
    ]
  },
  {
    name: 'Vivienda',
    url: '/buttons',
    iconComponent: { name: 'cil-house' },
    children: [
      {
        name: 'Propias y Alquiladas',
        url: '/buttons/ocupacion'
      },
      {
        name: 'Características',
        url: '/buttons/caracteristica'
      },
      /*{
        name: 'Disponibilidades',
        url: '/buttons/disponibilidad'
      }*/
    ]
  },
 /* {
    name: 'Gráficas',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
 /* {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    /*badge: {
      color: 'info',
      text: 'NEW'
    
  },*/
  {
    title: true,
    name: 'Fuente',
    class: 'py-0'
  },
  {
    name: 'INEGI',
    url: 'https://www.inegi.org.mx/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', class: '-text-dark' },
    class: 'mt-auto'
  },
  {
    name: 'Datos',
    url: 'https://www.inegi.org.mx/servicios/api_indicadores.html',
    iconComponent: { name: 'cil-layers' },
    attributes: { target: '_blank' }
  }
];
