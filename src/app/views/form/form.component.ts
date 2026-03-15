// src/app/views/form/form.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }

  // ✅ Método chamado pelo ngSubmit
  onSubmit(form: NgForm) {
    console.log('Formulário enviado!', form.value);

    // Aqui você pode fazer o que quiser, por exemplo:
    // enviar para uma API, mostrar mensagem, resetar o formulário, etc.
    form.reset();
  }

}
