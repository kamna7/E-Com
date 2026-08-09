const admin = (req, res , next)=>{
if(req.user?.role === 'admin'){
    next();
}else{
    res.status(403).json({message: 'Access denied Admin Only'
});
}
}
export default admin


// const admin = (req, res, next) => {
//   if (req.user?.role === 'admin') {
//     return next();
//   }

//   return res.status(403).json({
//     message: 'Access denied - Admin only',
//   });
// };

// export default admin;

// req.user && req.user.role === 'admin'

