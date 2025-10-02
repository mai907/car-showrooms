import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ShowroomListComponent } from './pages/showroom/showroom-list/showroom-list.component';
import { ShowroomCreateComponent } from './pages/showroom/showroom-create/showroom-create.component';
import { ShowroomUpdateComponent } from './pages/showroom/showroom-update/showroom-update.component';
import { CarCreateComponent } from './pages/car/car-create/car-create.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"cars", component:CarListComponent},
    {path:"login", component:LoginComponent},
    {path:"showroom", component:ShowroomListComponent},
    {path:"cars/create", component:CarCreateComponent},
    {path:"showroom/create", component:ShowroomCreateComponent},
    {path:"showroom/update/:id", component:ShowroomUpdateComponent},
    {path:"**", component:PageNotFoundComponent}
];
