var express = require('express');
var router = express.Router();

const UserModel = require('../model/userModel');

/* GET home page. */
router.get('/', async (req, res, next)=> {
  try {
    const UsersList = await UserModel.find();
    res.json(UsersList)
  } catch (error) {
    res.status(500).json({Msg: error.error})
  }
});

router.post('/', async (req,res)=>{
  const newUser = new UserModel({
    username: req.body.username,
    userAddress: req.body.userAddress
  });
  try {
    const UserSaved = await newUser.save();
    res.json(UserSaved)
  } catch (error) {
    res.status(500).json({Msg: error.error})
  }
})

module.exports = router;
