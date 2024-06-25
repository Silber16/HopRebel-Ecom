export default 
    (error, req, res, next) => {
        console.error(error.name)
        console.log('error handler: ', {error})
        next()
        }

