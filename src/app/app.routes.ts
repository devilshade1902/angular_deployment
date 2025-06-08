import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './guards/auth.guard';
import { authchildGuard } from './guards/authchild.guard';
import { authdeactivateGuard } from './guards/authdeactivate.guard';
import { authmatchGuard } from './guards/authmatch.guard';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: "home" },
    {
        path: 'products', component: ProductComponent, title: "products",
        children: [
            {
                path: 'details/:productId', component: ProductdetailComponent,data:{renderMode:'ssr'}
            },
            { path: 'add-product', component: AddproductComponent }
        ], canActivateChild: [authchildGuard]
    },
    { path: 'profile', component: ProfileComponent, title: "profile", canActivate: [authGuard], canDeactivate: [authdeactivateGuard] },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent), title: "dashboard" },
    { path: '**', component: NotfoundComponent }

];
