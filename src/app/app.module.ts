import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MANEJO DE RUTAS
import { AppRoutingModule } from './app-routing.module';

//MODULES
import { PagesModule } from './pages/page.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
