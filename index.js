let Client = function (name, balance) {
  (this.name = name),
    (this.balance = balance),
    (this.membership = function () {
      let degree;
      if (this.balance > 1000) {
        degree = "gold";
      } else if (this.balance > 500) {
        degree = "silver";
      } else if (this.balance > 300) {
        degree = "bronze";
      } else {
        degree = "normal";
      }
      return degree;
    });
};
let person1 = new Client("hessam", 400);
console.log(person1.membership());
