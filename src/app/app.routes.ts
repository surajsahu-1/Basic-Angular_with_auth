import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     redirectTo: 'login'
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'home',
                component:HomeComponent
            }
        ]

    }

];
