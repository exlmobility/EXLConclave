import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./features/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'register-mobile-modal',
    loadChildren: () => import('./modals/register-mobile-modal/register-mobile-modal.module').then(m => m.RegisterMobileModalPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
