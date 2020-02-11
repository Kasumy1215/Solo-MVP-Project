const authorsJSON = require("./data/authors.json");

exports.seed = function(knex, Promise) {
  return knex("authors")
    .del()
    .then(() => {
      return knex("authors").insert(authorsJSON);
    });
};
