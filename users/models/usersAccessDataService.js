const { generateAuthToken } = require("../../auth/providers/jwt");
const _ = require("lodash");
const User = require("./mongodb/User");

const registerUser = async (newUser) => {
  try {
    let user = new User(newUser);
    user = await user.save();

    user = _.pick(user, ["name", "email", "_id"]);

    return user;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

const getUser = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

const getUsers = async () => {
  try {
    let users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

const loginUser = async (email, password) => {
  try {
    const userFromDb = await User.findOne({ email });
    if (!userFromDb) {
      throw new Error("Authentication Error: Invalid email or password");
    }
    if (userFromDb.password !== password) {
      throw new Error("Authentication Error: Invalid email or password");
    }
    const token = generateAuthToken(userFromDb);
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { registerUser, getUser, getUsers, loginUser };
