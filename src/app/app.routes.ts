import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalcularQuadradoComponent } from './components/calcular-quadrado/calcular-quadrado.component';
import { AuthApiComponent } from './components/auth-api/auth-api.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'calcularquadrado', component: CalcularQuadradoComponent},
    {path: 'authapi', component: AuthApiComponent}
];
