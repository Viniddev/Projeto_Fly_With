import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
// import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';
// import { CardComponent } from './shared/card/card.component';
import { CardComponent } from './shared/card/card.component';
import { ContainerComponent } from './shared/container/container.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardDepoimentosComponent } from './shared/card-depoimentos/card-depoimentos.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
