//*Gets a users token 
export function setToken(token) {
  window.localStorage.setItem('token', token)
}

//*Retrives a token from storage
export function getToken() {
  return window.localStorage.getItem('token')
}


//*Log a user out
export function logout() {
  window.localStorage.removeItem('token')
}


//*Gets payload
function getPayload() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 2) return false
  return JSON.parse(atob(parts[1]))
}

//*Gets user id
export function getUserId() {
  return getPayload().sub
}

//*Get Payload
export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}


//*Is a user an owner of a job
export function isOwner(userId) {
  const payload = getPayload()
  if (!payload) return false
  return userId === payload.sub
}




