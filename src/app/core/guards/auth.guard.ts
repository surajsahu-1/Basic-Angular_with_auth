import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const jwttoken = localStorage.getItem('jwttoken');
  if (!jwttoken) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
