import { CanActivateChildFn } from '@angular/router';
import { authGuard } from './auth.guard';

export const authchildGuard: CanActivateChildFn = (childRoute, state) => {
  return authGuard(childRoute,state);
};
