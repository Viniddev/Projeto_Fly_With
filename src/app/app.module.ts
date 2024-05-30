import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutenticacaoInterceptor } from './Core/interceptors/autenticacao.interceptor';
import { BuscaComponent } from './Pages/busca/busca.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { DepoimentosComponent } from './Pages/home/depoimentos/depoimentos.component';
import { HomeComponent } from './Pages/home/home.component';
import { PromocoesComponent } from './Pages/home/promocoes/promocoes.component';
import { LoginComponent } from './Pages/login/login.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { CardDepoimentosComponent } from './shared/card-depoimentos/card-depoimentos.component';
import { CardComponent } from './shared/card/card.component';
import { ContainerComponent } from './shared/container/container.component';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SeletorPassageirosComponent } from './shared/seletor-passageiros/seletor-passageiros.component';
import { CardPassagensComponent } from './shared/card-passagens/card-passagens.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    FooterComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentosComponent,
    FormBuscaComponent,
    ModalComponent,
    PromocoesComponent,
    DropdownUfComponent,
    SeletorPassageirosComponent,
    DepoimentosComponent,
    LoginComponent,
    FormBaseComponent,
    CadastroComponent,
    PerfilComponent,
    BuscaComponent,
    CardPassagensComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
