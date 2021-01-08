export default function logger(req, _res, next){
  console.log(`Incoming request from: ${req.method}- ${req.url}`)
  next()
}