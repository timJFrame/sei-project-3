//*Gets a users token 
export function setToken (token){
  window.localStorage.setItem('token', token)
}

//*Retrives a token from storage
export function getToken(){
  return window.localStorage.getItem('token')
}

//*Gets payload

function getPayload(){
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}


//*Gets user id
export function  getUserId (){
  return getPayload().sub
}


export function isOwner(userId) {
  const payload = getPayload()
  if (!payload) return false
  return userId === payload.sub
}