//*Gets a users token 
export function setToken (token){
  window.localStorage.setItem('token', token)
}

//*Retrives a token from storage
export function getToken(){
  return window.localStorage.getItem('token')
}
