const data = require("./data.js")
const express= require ('express');
const router = express.Router();

router.route('/')
.get((req,res) => {
	res.json(data);

})
.post((req,res) => {
	const { first_name, last_name, email, website } = req.body;
	data.push({
		id: data.length + 1,
		first_name:'Alan',
		last_name:'Ortiz',
		email:'alanortiz@gmail.com',
		website:'https://www.alanortiz.com'
	});
	res.json('received');
})

router.route('/:id')
.put((req,res) => {
	const { id }= req.params;
	const { first_name, last_name, email, website } = req.body;
	data.forEach((dat,i) =>{
		if (dat.id === Number(id)){
			dat.first_name = first_name;
			dat.last_name = last_name;
			dat.email = email;
			dat.website = website;
		}
	});
	res.json('updated');
})

.delete((req,res) => {
	const { id }= req.params;
	data.forEach((dat,i) =>{
		if (dat.id === Number(id)){
		data.splice(i,1);
		}
	});
	res.json('deleted');
})


module.exports = router;