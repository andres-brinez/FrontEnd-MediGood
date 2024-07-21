import { environment } from "../environment"

export const urls={
  registerUser:`${environment.apiUrl}/auth/register`,
  login:`${environment.apiUrl}/auth/login`,
}

