import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IndexPage implements OnInit {
  urlCodigoQR: string | undefined;

  constructor() { }

  esDispositivoMovil: boolean = false;

  ngOnInit() {
    console.log(this.convertir())

    this.esDispositivoMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (this.esDispositivoMovil) {
      console.log('Estás en un dispositivo móvil.');
    } else {
      console.log('Estás en una computadora.');
    }

    
  }

  aplicacion:string="";
  convertir() {
    // Agregar la fecha y la hora actual al objeto JSON
    const json = {
      aplicacion: this.aplicacion      
    };
    // Convertir a cadena JSON
    this.urlCodigoQR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(JSON.stringify(json))}`;
    console.log(this.urlCodigoQR);
  }


  click(){

  }

  

}
