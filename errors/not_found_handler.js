const not_found = (req ,res , next) => {
    const error = new Error ('404 Not Found');
    error.status = 404;
    next(error);
}

module.exports = not_found
    
