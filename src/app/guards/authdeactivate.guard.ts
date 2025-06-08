import { CanDeactivateFn } from '@angular/router';

export interface CanExit
{
  canDeactivate:()=> boolean
}

export const authdeactivateGuard: CanDeactivateFn<CanExit> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate();
};
