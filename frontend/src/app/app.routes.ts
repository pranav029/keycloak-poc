import {Routes} from '@angular/router';
import {UserComponent} from "./components/user/user/user.component";
import {AdminComponent} from "./components/admin/admin/admin.component";
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized/unauthorized.component";
import {adminGuard} from "./admin.guard";

export const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent, canActivate: [adminGuard]},
  {path: 'unauthorized', component: UnauthorizedComponent}
];
