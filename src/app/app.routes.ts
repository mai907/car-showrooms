import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ListComponent } from './shared/components/list/list.component';
import { ShowroomListComponent } from './pages/showroom-list/showroom-list.component';
import { ShowroomCreateComponent } from './pages/showroom-create/showroom-create.component';
import { ShowroomUpdateComponent } from './pages/showroom-update/showroom-update.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"cars", component:ListComponent},
    {path:"login", component:LoginComponent},
    {path:"showroom", component:ShowroomListComponent},
    {path:"showroom/:id", component:ShowroomCreateComponent},
    {path:"showroom/update/:id", component:ShowroomUpdateComponent},
    {path:"**", component:PageNotFoundComponent}
];
