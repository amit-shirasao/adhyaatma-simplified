import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPagePageModule)
  },
  {
    path: 'ganapati-aarti',
    loadChildren: () => import('./pages/ganapati-aarti/ganapati-aarti.module').then(m => m.GanapatiAartiPageModule)
  },
  {
    path: 'ganapati-stotra',
    loadChildren: () => import('./pages/ganapati-stotra/ganapati-stotra.module').then(m => m.GanapatiStotraPageModule)
  },
  {
    path: 'ganapati-atharvasheersha',
    loadChildren: () => import('./pages/ganapati-atharvasheersha/ganapati-atharvasheersha.module').then(m => m.GanapatiAtharvasheershaPageModule)
  },
  {
    path: 'gajanan-maharaj-aarti-1',
    loadChildren: () => import('./pages/gajanan-maharaj-aarti-1/gajanan-maharaj-aarti-1.module').then(m => m.GajananMaharajAarti1PageModule)
  },
  {
    path: 'gajanan-maharaj-aarti-2',
    loadChildren: () => import('./pages/gajanan-maharaj-aarti-2/gajanan-maharaj-aarti-2.module').then(m => m.GajananMaharajAarti2PageModule)
  },
  {
    path: 'guru-dhawa',
    loadChildren: () => import('./pages/guru-dhawa/guru-dhawa.module').then(m => m.GuruDhawaPageModule)
  },
  {
    path: 'dutta-aarti',
    loadChildren: () => import('./pages/dutta-aarti/dutta-aarti.module').then(m => m.DuttaAartiPageModule)
  },
  {
    path: 'vitthal-aarti',
    loadChildren: () => import('./pages/vitthal-aarti/vitthal-aarti.module').then(m => m.VitthalAartiPageModule)
  },
  {
    path: 'shankar-aarti',
    loadChildren: () => import('./pages/shankar-aarti/shankar-aarti.module').then(m => m.ShankarAartiPageModule)
  },
  {
    path: 'sai-baba-aarti',
    loadChildren: () => import('./pages/sai-baba-aarti/sai-baba-aarti.module').then(m => m.SaiBabaAartiPageModule)
  },
  {
    path: 'renuka-aarti-1',
    loadChildren: () => import('./pages/renuka-aarti-1/renuka-aarti-1.module').then(m => m.RenukaAarti1PageModule)
  },
  {
    path: 'renuka-aarti-2',
    loadChildren: () => import('./pages/renuka-aarti-2/renuka-aarti-2.module').then(m => m.RenukaAarti2PageModule)
  },
  {
    path: 'renuka-aarti-3',
    loadChildren: () => import('./pages/renuka-aarti-3/renuka-aarti-3.module').then(m => m.RenukaAarti3PageModule)
  },
  {
    path: 'renuka-ashtak-1',
    loadChildren: () => import('./pages/renuka-ashtak-1/renuka-ashtak-1.module').then(m => m.RenukaAshtak1PageModule)
  },
  {
    path: 'renuka-ashtak-2',
    loadChildren: () => import('./pages/renuka-ashtak-2/renuka-ashtak-2.module').then(m => m.RenukaAshtak2PageModule)
  },
  {
    path: 'renuka-ashtak-3',
    loadChildren: () => import('./pages/renuka-ashtak-3/renuka-ashtak-3.module').then(m => m.RenukaAshtak3PageModule)
  },
  {
    path: 'renuka-abhanga',
    loadChildren: () => import('./pages/renuka-abhanga/renuka-abhanga.module').then(m => m.RenukaAbhangaPageModule)
  },
  {
    path: 'renuka-jogava',
    loadChildren: () => import('./pages/renuka-jogava/renuka-jogava.module').then(m => m.RenukaJogavaPageModule)
  },
  {
    path: 'renuka-pada',
    loadChildren: () => import('./pages/renuka-pada/renuka-pada.module').then(m => m.RenukaPadaPageModule)
  },
  {
    path: 'renuka-prarthana',
    loadChildren: () => import('./pages/renuka-prarthana/renuka-prarthana.module').then(m => m.RenukaPrarthanaPageModule)
  },
  {
    path: 'mahalaxmi-aarti',
    loadChildren: () => import('./pages/mahalaxmi-aarti/mahalaxmi-aarti.module').then(m => m.MahalaxmiAartiPageModule)
  },
  {
    path: 'vishnu-aarti',
    loadChildren: () => import('./pages/vishnu-aarti/vishnu-aarti.module').then(m => m.VishnuAartiPageModule)
  },
  {
    path: 'ram-dhawa',
    loadChildren: () => import('./pages/ram-dhawa/ram-dhawa.module').then(m => m.RamDhawaPageModule)
  },
  {
    path: 'durga-aarti',
    loadChildren: () => import('./pages/durga-aarti/durga-aarti.module').then(m => m.DurgaAartiPageModule)
  },
  {
    path: 'gajanan-vijay-grantha',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-selection/adhyaay-selection.module').then(m => m.AdhyaaySelectionPageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-1',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-1/adhyaay-1.module').then(m => m.Adhyaay1PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-2',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-2/adhyaay-2.module').then(m => m.Adhyaay2PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-3',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-3/adhyaay-3.module').then(m => m.Adhyaay3PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-4',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-4/adhyaay-4.module').then(m => m.Adhyaay4PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-5',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-5/adhyaay-5.module').then(m => m.Adhyaay5PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-6',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-6/adhyaay-6.module').then(m => m.Adhyaay6PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-7',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-7/adhyaay-7.module').then(m => m.Adhyaay7PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-8',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-8/adhyaay-8.module').then(m => m.Adhyaay8PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-9',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-9/adhyaay-9.module').then(m => m.Adhyaay9PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-10',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-10/adhyaay-10.module').then(m => m.Adhyaay10PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-11',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-11/adhyaay-11.module').then(m => m.Adhyaay11PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-12',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-12/adhyaay-12.module').then(m => m.Adhyaay12PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-13',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-13/adhyaay-13.module').then(m => m.Adhyaay13PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-14',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-14/adhyaay-14.module').then(m => m.Adhyaay14PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-15',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-15/adhyaay-15.module').then(m => m.Adhyaay15PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-16',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-16/adhyaay-16.module').then(m => m.Adhyaay16PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-17',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-17/adhyaay-17.module').then(m => m.Adhyaay17PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-18',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-18/adhyaay-18.module').then(m => m.Adhyaay18PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-19',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-19/adhyaay-19.module').then(m => m.Adhyaay19PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-20',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-20/adhyaay-20.module').then(m => m.Adhyaay20PageModule)
  },
  {
    path: 'gajanan-vijay-grantha-adhyaay-21',
    loadChildren: () => import('./pages/gajanan-vijay-grantha/adhyaay-21/adhyaay-21.module').then(m => m.Adhyaay21PageModule)
  },
  {
    path: 'ram-raksha',
    loadChildren: () => import('./pages/ram-raksha/ram-raksha.module').then(m => m.RamRakshaPageModule)
  },
  {
    path: 'manache-shlok-shlok-selection',
    loadChildren: () => import('./pages/manache-shlok/shlok-selection/shlok-selection.module').then(m => m.ShlokSelectionPageModule)
  },
  {
    path: 'manache-shlok-from-001-to-010',
    loadChildren: () => import('./pages/manache-shlok/from-001-to-010/from-001-to-010.module').then(m => m.From001To010PageModule)
  },
  {
    path: 'manache-shlok-from-011-to-020',
    loadChildren: () => import('./pages/manache-shlok/from-011-to-020/from-011-to-020.module').then(m => m.From011To020PageModule)
  },
  {
    path: 'manache-shlok-from-021-to-030',
    loadChildren: () => import('./pages/manache-shlok/from-021-to-030/from-021-to-030.module').then(m => m.From021To030PageModule)
  },
  {
    path: 'manache-shlok-from-031-to-040',
    loadChildren: () => import('./pages/manache-shlok/from-031-to-040/from-031-to-040.module').then(m => m.From031To040PageModule)
  },
  {
    path: 'manache-shlok-from-041-to-050',
    loadChildren: () => import('./pages/manache-shlok/from-041-to-050/from-041-to-050.module').then(m => m.From041To050PageModule)
  },
  {
    path: 'manache-shlok-from-051-to-060',
    loadChildren: () => import('./pages/manache-shlok/from-051-to-060/from-051-to-060.module').then(m => m.From051To060PageModule)
  },
  {
    path: 'manache-shlok-from-061-to-070',
    loadChildren: () => import('./pages/manache-shlok/from-061-to-070/from-061-to-070.module').then(m => m.From061To070PageModule)
  },
  {
    path: 'manache-shlok-from-071-to-080',
    loadChildren: () => import('./pages/manache-shlok/from-071-to-080/from-071-to-080.module').then(m => m.From071To080PageModule)
  },
  {
    path: 'manache-shlok-from-081-to-090',
    loadChildren: () => import('./pages/manache-shlok/from-081-to-090/from-081-to-090.module').then(m => m.From081To090PageModule)
  },
  {
    path: 'manache-shlok-from-091-to-100',
    loadChildren: () => import('./pages/manache-shlok/from-091-to-100/from-091-to-100.module').then(m => m.From091To100PageModule)
  },
  {
    path: 'manache-shlok-from-101-to-110',
    loadChildren: () => import('./pages/manache-shlok/from-101-to-110/from-101-to-110.module').then(m => m.From101To110PageModule)
  },
  {
    path: 'manache-shlok-from-111-to-120',
    loadChildren: () => import('./pages/manache-shlok/from-111-to-120/from-111-to-120.module').then(m => m.From111To120PageModule)
  },
  {
    path: 'manache-shlok-from-121-to-130',
    loadChildren: () => import('./pages/manache-shlok/from-121-to-130/from-121-to-130.module').then(m => m.From121To130PageModule)
  },
  {
    path: 'manache-shlok-from-131-to-140',
    loadChildren: () => import('./pages/manache-shlok/from-131-to-140/from-131-to-140.module').then(m => m.From131To140PageModule)
  },
  {
    path: 'manache-shlok-from-141-to-150',
    loadChildren: () => import('./pages/manache-shlok/from-141-to-150/from-141-to-150.module').then(m => m.From141To150PageModule)
  },
  {
    path: 'manache-shlok-from-151-to-160',
    loadChildren: () => import('./pages/manache-shlok/from-151-to-160/from-151-to-160.module').then(m => m.From151To160PageModule)
  },
  {
    path: 'manache-shlok-from-161-to-170',
    loadChildren: () => import('./pages/manache-shlok/from-161-to-170/from-161-to-170.module').then(m => m.From161To170PageModule)
  },
  {
    path: 'manache-shlok-from-171-to-180',
    loadChildren: () => import('./pages/manache-shlok/from-171-to-180/from-171-to-180.module').then(m => m.From171To180PageModule)
  },
  {
    path: 'manache-shlok-from-181-to-190',
    loadChildren: () => import('./pages/manache-shlok/from-181-to-190/from-181-to-190.module').then(m => m.From181To190PageModule)
  },
  {
    path: 'manache-shlok-from-191-to-200',
    loadChildren: () => import('./pages/manache-shlok/from-191-to-200/from-191-to-200.module').then(m => m.From191To200PageModule)
  },
  {
    path: 'manache-shlok-from-201-to-205',
    loadChildren: () => import('./pages/manache-shlok/from-201-to-205/from-201-to-205.module').then(m => m.From201To205PageModule)
  },
  {
    path: 'hanuman-chalisa',
    loadChildren: () => import('./pages/hanuman-chalisa/hanuman-chalisa.module').then(m => m.HanumanChalisaPageModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
