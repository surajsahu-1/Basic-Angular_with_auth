import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwttoken = localStorage.getItem('jwttoken');

  const cloneReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${jwttoken}`)
  })
  return next(cloneReq);
};
