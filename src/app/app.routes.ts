import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ShowroomListComponent } from './pages/showroom/showroom-list/showroom-list.component';
import { ShowroomCreateComponent } from './pages/showroom/showroom-create/showroom-create.component';
import { ShowroomUpdateComponent } from './pages/showroom/showroom-update/showroom-update.component';
import { CarCreateComponent } from './pages/car/car-create/car-create.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { ShowroomDetailsComponent } from './pages/showroom/showroom-details/showroom-details.component';
import { RoleGuard } from './services/role.guard';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },

    {
        path: "cars", component: CarListComponent, canActivate: [RoleGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] }
    },

    {
        path: "showroom", component: ShowroomListComponent, canActivate: [RoleGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] }
    },
    { path: "unauthorized", component: UnauthorizedComponent },
    { path: "aboutus", component: PageNotFoundComponent },
    {
        path: "cars/create", component: CarCreateComponent, canActivate: [RoleGuard],
        data: { roles: ['ROLE_ADMIN'] }
    },
    {
        path: "showroom/create", component: ShowroomCreateComponent, canActivate: [RoleGuard],
        data: { roles: ['ROLE_ADMIN'] }
    },
    { path: "showroom/details/:id", component: ShowroomDetailsComponent },
    {
        path: "showroom/update/:id", component: ShowroomUpdateComponent, canActivate: [RoleGuard],
        data: { roles: ['ROLE_ADMIN'] }
    },
    { path: "**", redirectTo: '', component: PageNotFoundComponent }
];
