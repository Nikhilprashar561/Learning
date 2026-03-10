// In Memory DB

// Save {_id, {fname, lname}}

// Hashmap(key, value)
//   String, string

// Store data like:- 1 {fname, lname, email, contact: {mobile}, address:{street, pincode, country}}

// so to create this kind of thinks we need need a interface

type userId = String; // Own Type

interface User {
  // Custom type
  id: userId;
  fname: String;
  lname: String;
  email: String;
  contact: {
    mobile: String;
  };
  address: {
    street: String;
    pincode: String;
    country: String;
  };
}

class hashMap {
  private _db: Map<userId, User>;

  constructor() {}

  public instance(data: User): userId {
    if (this._db.has(data.id)) {
      throw new Error(`User With ID ${data.id} Already exists`);
    }
    this._db.set(data.id, data);
    return data.id;
  }

  public updateUser(id: userId, updateUser: Omit<User, "id">): boolean {
    if (!this._db.has(id)) throw new Error(`User not found with this id ${id}`);
    this._db.set(id, { ...updateUser, id });
    return true;
  }
}

const myId = new hashMap();

myId.instance({
  fname: "Nikhil",
  email: "nikhilprashar561@gmail.com",
  id: "1",
  lname: "Prashar",
  contact: { mobile: "858" },
  address: { country: "PTK", pincode: "68", street: "84" },
});

myId.updateUser("id", {
  fname: "Nikhil",
  email: "nikhilprashar561@gmail.com",
  lname: "Prashar",
  contact: { mobile: "858" },
  address: { country: "PTK", pincode: "68", street: "84" },
});
