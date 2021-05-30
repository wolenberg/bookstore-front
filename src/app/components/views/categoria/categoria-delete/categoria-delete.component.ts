import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Categoria } from '../categoria-read/categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {
  
  categoria: Categoria ={
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {


  }

}
