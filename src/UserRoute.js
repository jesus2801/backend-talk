const UserDB = require("./UserDB");

class User {
  get(req, res) {
    try {
      const { id } = req.params;
      const user = UserDB.get(parseInt(id));
      res.json(user).status(200);
    } catch (e) {
      res.status(422).send(e.message);
    }
  }

  add(req, res) {
    const { name, age, weight } = req.body;

    try {
      const id = UserDB.add(name, parseInt(age), parseInt(weight));
      res.json({ id });
    } catch (e) {
      res.status(422).send(e.message);
    }
  }

  update(req, res) {
    try {
      const { id, name, age, weight } = req.body;
      UserDB.update(parseInt(id), name, parseInt(age), parseInt(weight));
      res.sendStatus(201);
    } catch (e) {
      res.status(422).send(e.message);
    }
  }

  delete(req, res) {
    const { id } = req.params;
    try {
      UserDB.delete(parseInt(id));
      res.sendStatus(204);
    } catch (e) {
      res.status(422).send(e.message);
    }
  }
}

module.exports = new User();
