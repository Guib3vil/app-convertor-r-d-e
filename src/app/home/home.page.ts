import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private alertController: AlertController) {}
dinheiro=''; // valor do dinheiro
origem=''; // moeda de origem. EX: Real
destino=''; // moeda para qual vai ser convertida. EX: Dólar
VF=0;

calcularConversao() { // Função que calcula a conversão
  if (this.origem==='R' && this.destino==='D') { // Real para Dólar
this.VF= parseFloat(this.dinheiro)/5.05;
  } else {
    if (this.origem==='R' && this.destino==='E') { // Real para Euro
      this.VF= parseFloat(this.dinheiro)/5.41;
    } else{
      if (this.origem==='D' && this.destino==='R') { // Dólar para Reaal
        this.VF=parseFloat(this.dinheiro)*5.05;
      } else {
        if (this.origem==='D' && this.destino==='E') { // Dólar para Euro
          this.VF=parseFloat(this.dinheiro)*0.93;
        } else {
          if (this.origem==='E' && this.destino==='R') { // Euro para Real
            this.VF=parseFloat(this.dinheiro)*5.41;
          } else {
            if (this.origem==='E' && this.destino==='D') { // Euro para Dólar
              this.VF=parseFloat(this.dinheiro)/0.93;
            }
          }
        }
      }
    }
  }
  this.exibiralerta(); //aciona a função que ativa o alert
}

 async exibiralerta() {
  const alert = await this.alertController.create({ //cria o alert
    header: 'App Conversor', //cabeçalho do alert
    message: `Sua conversor ficou
    ${this.VF.toFixed(2)}`, // mensagem exibida no alert
    buttons: ['OK'], // botão do alert
    });
    await alert.present();
    }
}

