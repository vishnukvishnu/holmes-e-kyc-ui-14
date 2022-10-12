import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';

import { EntityDataComponent } from '../app/entity-data/entity-data.component';
import { EntityMasterComponent } from '../app/entity-master/entity-master.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'entity-data', component: EntityDataComponent },
    { path: 'entity-master', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [HomeComponent,
                                  EntityDataComponent,
                                  HomeComponent
    ]
