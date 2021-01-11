export const notFound = 'Not found'
export const validationError = 'validationError'
export const castError = 'castError'
export const unauthorized = 'unauthorized'
export const forbidden = 'forbidden'
export const notBidder = 'You must be a bidder to place a bid'

export default function errorHandler(err, _req, res, next) {
  console.log('❗️ Something went wrong', err.name, err.message)

  if (err.name === validationError) {
    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }

    return res.status(422).json({
      message: 'Form Validation Errors',
      errors: customErrors,
    })
  }

  if (err.name === castError || err.message === notFound) {
    return res.status(404).json({ message: 'Not found' })
  }

  if (err.name === unauthorized) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (err.message === notBidder) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (err.message === forbidden) {
    return res.status(403).json({ message: 'Forbidden' })
  }

  res.sendStatus(500)

  next(err)
}