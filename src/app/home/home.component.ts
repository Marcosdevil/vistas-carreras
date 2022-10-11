import { Component, OnInit } from '@angular/core';
import { Noticias } from '../Interfaces/noticias';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias : Noticias[];

  constructor(private noticiasServicio : NoticiasService) { }

  ngOnInit(): void {
  }

  private verNoticias(){
    this.noticiasServicio.obtenerNoticias().subscribe(dato => {
    });
  }
  /*openSidebar() {
    console.log("papurri");
    this.element?.classList.add("active");
    
  }*/

  closeSidebar() {

  }
}
