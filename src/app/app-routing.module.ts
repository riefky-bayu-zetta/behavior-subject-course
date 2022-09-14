import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersModule) },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ]
})
export class AppRoutingModule { }
