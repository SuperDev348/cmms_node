const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { expiredAfter, secretKey } = require("../../../config/config");
module.exports = {
  create: async function (req, res, next) {
    if (req.body.password !== req.body.passwordconfirm) {
      res.status(400).json({ msg: "Passwords does not match." });
      return;
    }
    let user = {};
    user.strFullName = req.body.strFullName;
    user.password = req.body.password;
    user.strEmailAddress = req.body.strEmailAddress;
    user.strTelephone = req.body.strTelephone;
    user.strTelephone2 = req.body.strTelephone2 ? req.body.strTelephone2 : "";
    user.intUserStatusID = req.body.intUserStatusID ? 1 : 0;
    user.strUserTitle = req.body.strUserTitle ? req.body.strUserTitle : "";
    user.strPersonnelCode = req.body.strPersonnelCode
      ? req.body.strPersonnelCode
      : "";
    user.strUserName = req.body.strUserName ? req.body.strUserName : "";
    user.strNotes = req.body.strNotes ? req.body.strNotes : "";
    user.strRequestNotes = req.body.strRequestNotes
      ? req.body.strRequestNotes
      : "";   
    user.bolApiManaged = req.body.bolApiManaged ? true : false;
    user.strPreferences = req.body.strPreferences
      ? req.body.strPreferences
      : "";

    user.strGroupIds=req.body.strGroupIds;
    user.bolGroup	=false;
    await userModel.create(user, function (err, result) {
      if (err) {
        if (err.errors) {
          if (err.errors.strFullName) {
            res.status(400).json({ msg: err.errors.strFullName.message });
            return;
          }
          if (err.errors.strEmailAddress) {
            res.status(400).json({ msg: err.errors.strEmailAddress.message });
            return;
          }
          if (err.errors.strTelephone) {
            res.status(400).json({ msg: err.errors.strTelephone.message });
            return;
          }
          if (err.errors.password) {
            res.status(400).json({ msg: err.errors.password.message });
            return;
          }
        } else {
          res.status(500).json({ msg: "Internal server error", data: null });
        }
      } else {
        res.status(200).json({
          msg: "User added successfully!!!",
          data: { id: result._id },
        });
      }
    });
  },
  login: function (req, res, next) {
    if (req.body.password == null || req.body.email == null) {
      res.status(400).json({ msg: "Bad Request!", data: null });
      return;
    }

    userModel.findOne({ strEmailAddress: req.body.email }, function (
      err,
      userInfo
    ) {
      if (err) {
        res.status(500).json({ msg: "Internal server error" });
      } else {
        if (
          userInfo != null &&
          bcrypt.compareSync(req.body.password, userInfo.password)
        ) {
          const token = jwt.sign(
            {
              id: userInfo._id,
              expiredAt: new Date().getTime() + expiredAfter,
              email: userInfo.email,
            },
            secretKey
          );
          //   req.session.userId = userInfo._id;
          res.status(200).json({
            msg: "User found!",
            data: {
              user: {
                id: userInfo._id,
                strFullName: userInfo.strFullName,
                strEmailAddress: userInfo.strEmailAddress,
                strTelephone: userInfo.strTelephone,
              },
              token: token,
            },
          });
          return next();
        } else {
          res.status(400).json({ msg: "Invalid email/password!", data: null });
        }
      }
    });
  },
  userlist: function (req, res, next) {
    userModel.find({bolGroup:false}, { password: 0 }, function (err, users) {
      if (err) {
        res.status(500).json({ msg: "Internal Server error", data: null });
      } else {
        res.status(200).json({ msg: null, data: users });
      }
    });
  },
  getAll: async function (req, res, next) {
     let users=await  userModel.find({}).sort( { bolGroup: 1 } ).exec();
     res.status(200).json({ msg: null, data: users });
    // userModel.find({}, { password: 0 }, function (err, users) {
    //   if (err) {
    //     res.status(500).json({ msg: "Internal Server error", data: null });
    //   } else {
    //     res.status(200).json({ msg: null, data: users });
    //   }
    // });
  },
  getById: function (req, res, next) {
    userModel.findById(req.params.userId, function (err, userInfo) {
      if (err) {
        res.status(404).json({ msg: "User not found", data: null });
      } else {
        res.status(200).json({ msg: null, data: { user: userInfo } });
      }
    });
  },
  updateById: function (req, res, next) {
    if (req.body.password !== req.body.passwordconfirm) {
      res.status(400).json({ msg: "Passwords does not match." });
      return;
    }
    let user = {};
    user.strFullName = req.body.strFullName;
    if (req.body.password != "******") {
      user.password = bcrypt.hashSync(req.body.password, 10);
      console.log(user.password,req.body.password,'password');
    }
   
    user.strEmailAddress = req.body.strEmailAddress;
    user.strTelephone = req.body.strTelephone;
    user.strTelephone2 = req.body.strTelephone2 ? req.body.strTelephone2 : "";
    user.intUserStatusID = req.body.intUserStatusID ? 1 : 0;
    user.strUserTitle = req.body.strUserTitle ? req.body.strUserTitle : "";
    user.strPersonnelCode = req.body.strPersonnelCode
      ? req.body.strPersonnelCode
      : "";
    user.strUserName = req.body.strUserName ? req.body.strUserName : "";
    user.strNotes = req.body.strNotes ? req.body.strNotes : "";
    user.strRequestNotes = req.body.strRequestNotes
      ? req.body.strRequestNotes
      : "";
    user.bolGroup = req.body.bolGroup ? true : false;
    user.bolApiManaged = req.body.bolApiManaged ? true : false;
    user.strPreferences = req.body.strPreferences
      ? req.body.strPreferences
      : "";
    user.strGroupIds=req.body.strGroupIds;
    userModel.findByIdAndUpdate(req.params.userId, user, function (
      err,
      userInfo
    ) {
      if (err) res.status(400).json({ msg: "Update failed", data: null });
      else {
        res
          .status(200)
          .json({ msg: "User updated successfully!", data: userInfo });
      }
    });
  },
  deleteById: function (req, res, next) {
    userModel.findByIdAndRemove(req.params.userId, function (err, userInfo) {
      if (err) res.status(400).json({ msg: "Delete failed", data: null });
      else {
        res.status(200).json({ msg: "User deleted successfully!", data: null });
      }
    });
  },
};
