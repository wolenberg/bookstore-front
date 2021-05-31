import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  titulo = new FormControl('',[Validators.minLength(3)])
  nome_autor = new FormControl('',[Validators.minLength(3)])
  texto = new FormControl('',[Validators.minLength(30)])

  id_cat: String = ''

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
  }

  getMessage() {
    if(this.titulo.invalid){
      return "O campo deve conter entre 3 e 100 caracteres";
    }

    if(this.nome_autor.invalid){
      return "O campo deve conter entre 3 e 100 caracteres";
    }

    if(this.texto.invalid){
      return "O campo deve conter entre 30 e 2000000 caracteres";
    }
    return false;

  }

  CancelParaLivros() :void {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }

}
