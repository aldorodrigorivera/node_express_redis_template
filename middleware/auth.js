
module.exports = {
    isAuth: async (req, res, next) => {
      try {
        next();
      } catch (error) {
        return res.status(401).send({error: error.message});
      }
    },
  };