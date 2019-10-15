import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MANEJO DE RUTAS
import { AppRoutingModule } from './app-routing.module';

//MODULES
import { PagesModule } from './pages/page.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
//import { IncrementadorComponent } from './components/incrementador/incrementador.component';

//temporal
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    //IncrementadorComponent,    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
