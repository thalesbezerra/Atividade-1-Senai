import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string;

  constructor() { }

  ngOnInit(){
    this.titulo = "Venha conhecer nosso diferencial!";
    this.texto = "Lorem Ipsum é simplesmente uma simulação de texto da industria tipográfica e de impressos.";
    this.tituloDestaque = "O que nos torna diferente?";
    this.textoDestaque = "Lorem Ipsum é simplesmente uma simulação de texto da industria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de amostras de tipos.";
  }

  onSubmit(form: any){
    let dados = `
      Nome: ${form.value.nome}
      Email: ${form.value.email}
      Senha: ${form.value.password}`;

      console.log(dados);
  }

}
