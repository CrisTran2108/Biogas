let getProfile = (req, res) => {
  return res.render("profile/profile",{
    user: req.user, 
  });
};
let pushid = (req, res, next) => {
    let id = req.user._id;
    //console.log(id);
    next();
    
}
module.exports = {
  getProfile: getProfile,
  pushid: pushid,
};
