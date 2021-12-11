const router = require('express').Router();

router.get('/', (req, res) => {
	var data = [];
	let i = 0;
	while(i<10){
		let id = Math.floor(Math.random() * 1000);
		data.push({
			id,
			name: `Item ${id}`
		});
		i++;
	}
	res.json({
		data
	})
})

module.exports = router;