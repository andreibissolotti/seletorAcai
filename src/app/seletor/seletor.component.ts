import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})

export class SeletorComponent {

  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 0;
  @Input() titulo: string = "";
  
  isRadio(): string {
    if (this.escolhaAte == 1){
      return "radio"
    }else {
      return "checkbox"
    } 
  }

  escolhidos: string[]= [];

  select(i: number){
    if (this.escolhidos.includes(this.opcoes[i])){
      this.escolhidos.splice(this.escolhidos.indexOf(this.opcoes[i]),1)
    }else{
      this.escolhidos.push(this.opcoes[i])
    }
    console.log(this.escolhidos)
  }
}
