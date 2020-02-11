const knex = require("knex");

let counter = 1;
let newItem = "!!!!!!!!!!!";
function addListToDb(newItem){
	counter ++;
	console.log("id : " + counter);
	console.log(knex('to_do_list').insert({
		id: counter,
		to_do_list: newItem
	}));
	return knex('to_do_list').insert({
		id: counter,
		to_do_list: newItem
	});
}
function getListsFromDb(){
	console.log(knex('to_do_list').select("*").from('to_do_list'));
	return knex('to_do_list').select("*").from('to_do_list');
}
addListToDb(newItem);
getListsFromDb();

module.exports = {addListToDb,getListsFromDb};

// exports.operation = operation;