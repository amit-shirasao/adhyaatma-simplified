import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ganapati-aarti',
    pathMatch: 'full'
  },
  {
    path: 'ganapati-aarti',
    loadChildren: () => import('./pages/ganapati-aarti/ganapati-aarti.module').then( m => m.GanapatiAartiPageModule)
  },
  {
    path: 'ganapati-stotra',
    loadChildren: () => import('./pages/ganapati-stotra/ganapati-stotra.module').then( m => m.GanapatiStotraPageModule)
  },
  {
    path: 'ganapati-atharvasheersha',
    loadChildren: () => import('./pages/ganapati-atharvasheersha/ganapati-atharvasheersha.module').then( m => m.GanapatiAtharvasheershaPageModule)
  },
  {
    path: 'gajanan-maharaj-aarti-1',
    loadChildren: () => import('./pages/gajanan-maharaj-aarti-1/gajanan-maharaj-aarti-1.module').then( m => m.GajananMaharajAarti1PageModule)
  },
  {
    path: 'gajanan-maharaj-aarti-2',
    loadChildren: () => import('./pages/gajanan-maharaj-aarti-2/gajanan-maharaj-aarti-2.module').then( m => m.GajananMaharajAarti2PageModule)
  },
  {
    path: 'guru-dhawa',
    loadChildren: () => import('./pages/guru-dhawa/guru-dhawa.module').then( m => m.GuruDhawaPageModule)
  },
  {
    path: 'dutta-aarti',
    loadChildren: () => import('./pages/dutta-aarti/dutta-aarti.module').then( m => m.DuttaAartiPageModule)
  },
  {
    path: 'vitthal-aarti',
    loadChildren: () => import('./pages/vitthal-aarti/vitthal-aarti.module').then( m => m.VitthalAartiPageModule)
  },
  {
    path: 'shankar-aarti',
    loadChildren: () => import('./pages/shankar-aarti/shankar-aarti.module').then( m => m.ShankarAartiPageModule)
  },
  {
    path: 'sai-baba-aarti',
    loadChildren: () => import('./pages/sai-baba-aarti/sai-baba-aarti.module').then( m => m.SaiBabaAartiPageModule)
  },
  {
    path: 'renuka-aarti-1',
    loadChildren: () => import('./pages/renuka-aarti-1/renuka-aarti-1.module').then( m => m.RenukaAarti1PageModule)
  },
  {
    path: 'renuka-aarti-2',
    loadChildren: () => import('./pages/renuka-aarti-2/renuka-aarti-2.module').then( m => m.RenukaAarti2PageModule)
  },
  {
    path: 'renuka-aarti-3',
    loadChildren: () => import('./pages/renuka-aarti-3/renuka-aarti-3.module').then( m => m.RenukaAarti3PageModule)
  },
  {
    path: 'renuka-ashtak-1',
    loadChildren: () => import('./pages/renuka-ashtak-1/renuka-ashtak-1.module').then( m => m.RenukaAshtak1PageModule)
  },
  {
    path: 'renuka-ashtak-2',
    loadChildren: () => import('./pages/renuka-ashtak-2/renuka-ashtak-2.module').then( m => m.RenukaAshtak2PageModule)
  },
  {
    path: 'renuka-ashtak-3',
    loadChildren: () => import('./pages/renuka-ashtak-3/renuka-ashtak-3.module').then( m => m.RenukaAshtak3PageModule)
  },
  {
    path: 'renuka-abhanga',
    loadChildren: () => import('./pages/renuka-abhanga/renuka-abhanga.module').then( m => m.RenukaAbhangaPageModule)
  },
  {
    path: 'renuka-jogava',
    loadChildren: () => import('./pages/renuka-jogava/renuka-jogava.module').then( m => m.RenukaJogavaPageModule)
  },
  {
    path: 'renuka-pada',
    loadChildren: () => import('./pages/renuka-pada/renuka-pada.module').then( m => m.RenukaPadaPageModule)
  },
  {
    path: 'renuka-prarthana',
    loadChildren: () => import('./pages/renuka-prarthana/renuka-prarthana.module').then( m => m.RenukaPrarthanaPageModule)
  },
  {
    path: 'mahalaxmi-aarti',
    loadChildren: () => import('./pages/mahalaxmi-aarti/mahalaxmi-aarti.module').then( m => m.MahalaxmiAartiPageModule)
  },
  {
    path: 'vishnu-aarti',
    loadChildren: () => import('./pages/vishnu-aarti/vishnu-aarti.module').then( m => m.VishnuAartiPageModule)
  },
  {
    path: 'ram-dhawa',
    loadChildren: () => import('./pages/ram-dhawa/ram-dhawa.module').then( m => m.RamDhawaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
