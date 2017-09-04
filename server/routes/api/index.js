var router = require('express').Router();
var request = require('request');
module.exports = router;

router.use((req, res) => {
	res.status(404).end();
});