
const validation =(req ,res ,next) =>{
    const start = parseInt(req.query.start);
    const end = parseInt(req.query.end);
  
    if (isNaN(start) || isNaN(end)) {
      const err = new Error ("Invalid range");
      err.status = 400;
      return next(err);
    }
  
    if (start > end) {
      const err = new Error ("Invalid range");
      err.status = 400;
      return next(err);
    }
    next();

}


module.exports = validation;