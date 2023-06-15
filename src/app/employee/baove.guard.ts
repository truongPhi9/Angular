import { CanActivateFn } from '@angular/router';
import * as moment from 'moment';

export const baoveGuard: CanActivateFn = (route, state) => {
  // return true;
  const str = localStorage.getItem("expires_at") || "";
  if (str=="") return false; //chưa dn
  const expiresAt = JSON.parse(str);
  const daDangNhap =  moment().isBefore(moment(expiresAt));
  return daDangNhap
};
