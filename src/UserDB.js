class UserDB {
  constructor() {
    this.users = [];
    this.last_id = 0;
  }

  getID() {
    this.last_id++;
    return this.last_id;
  }

  get(id) {
    if (id < 1) {
      throw new Error("Invalid ID");
    }

    const user = this.users.find((user) => {
      return user.id == id;
    });

    if (!user) {
      throw new Error("User does not exists");
    }

    return user;
  }

  add(name, age, weight) {
    // Validar ingreso de los datos
    if (name == "" || name.indexOf("*") != -1 || name.indexOf("-") != -1) {
      throw new Error("Invalid name");
    }

    if (age < 18 || age > 110) {
      throw new Error("Invalid age");
    }

    if (weight < 20 || weight > 300) {
      throw new Error("Invalid weight");
    }

    // Validar que no exista ese usuario
    const user = this.users.find((user) => {
      return user.name == name;
    });

    if (user) {
      throw new Error("User already exists");
    }

    const id = this.getID();
    this.users.push({
      id,
      name,
      age,
      weight,
    });

    return id;
  }

  update(id, name, age, weight) {
    // Validar ingreso de los datos
    if (name == "" || name.indexOf("*") != -1 || name.indexOf("-") != -1) {
      throw new Error("Invalid name");
    }

    if (age < 18 || age > 110) {
      throw new Error("Invalid age");
    }

    if (weight < 20 || weight > 300) {
      throw new Error("Invalid weight");
    }

    const user = this.users.find((user) => {
      return user.id == id;
    });

    if (!user) {
      throw new Error("User does not exists");
    }

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        this.users[i] = {
          id, //this.users[i].id also works
          name,
          age,
          weight,
        };
        break;
      }
    }
  }

  delete(id) {
    if (id < 1) {
      throw new Error("Invalid ID");
    }

    this.users = this.users.filter((user) => {
      return user.id != id;
    });
  }
}

module.exports = new UserDB();
