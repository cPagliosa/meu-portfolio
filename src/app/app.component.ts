import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SobreComponent } from './Components/secoes/sobre/sobre.component';
import { HabilidadesComponent } from './Components/secoes/habilidades/habilidades.component';
import { StackComponent } from './Components/secoes/stack/stack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,SobreComponent,HabilidadesComponent,StackComponent],
  templateUrl: "app.component.html",   
})
export class AppComponent {
}

