import { Component } from "@angular/core";
import { ItemHabilidades } from "./models/item-habilidades";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-habilidades",
  standalone: true,
  imports: [NgForOf],
  templateUrl: "./habilidades.component.html",
})
export class HabilidadesComponent {
  public itensHabilidades: ItemHabilidades[] = [
    {
      icone: "bi-window-fullscreen",
      titulo: "Aplicações Front-End",
      descricao: `Design e desenvolvimento de sistemas web atraentes e responsivos.`,
    },
    {
      icone: "bi-server",
      titulo: "Aplicações Back-End",
      descricao: `Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos.`,
    },
    {
      icone: "bi-graph-up",
      titulo: "Testes Automatizados",
      descricao: `Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.`,
    } 
  ];
}
