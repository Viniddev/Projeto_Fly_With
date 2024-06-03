import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Core/guards/auth.guard';
import { BuscaComponent } from './Pages/busca/busca.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'busca',
    component: BuscaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
