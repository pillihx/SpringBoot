import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

import {AddCarComponent} from "./add-car/add-car.component";
import {ListCarComponent} from "./list-car/list-car.component";
import {EditCarComponent} from "./edit-car/edit-car.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'list-car', component: ListCarComponent },
  { path: 'edit-car', component: EditCarComponent },
  { path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
