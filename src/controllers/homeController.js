let getHome = (req, res) => {
  return res.render("main/master2",{
    user: req.user,
    
  });
};
let pushid = (req, res, next) => {
    let id = req.user._id;
    //console.log(id);
    next();
    
}
module.exports = {
  getHome: getHome,
  pushid: pushid,
};
