module.exports = function (app) {
	app.get('/api/aws/bucket', function (req, res) {
		var AWS = req.AWS;
		var s3 = new AWS.S3();

		var bucketName = req.query.name;

		s3.listObjects({Bucket: bucketName }, function(err, data) {
		  if (err) { console.log("Error:", err); }
		  else {
			console.log(data);
			res.json(data);
		  }
		});
	});

	app.get('/api/aws/buckets', function (req, res) {
		var AWS = req.AWS;
		var s3 = new AWS.S3();

		s3.listBuckets( function(err, data) {
		  if (err) { console.log("Error:", err); }
		  else {
			console.log(data);
			res.json(data);
		  }
		});

	});

	// create todo and send back all aws after creation
	app.post('/api/aws', function (req, res) {

	});

	// delete a todo
	app.delete('/api/aws/:bucket_id', function (req, res) {

	});

	// application -------------------------------------------------------------
	app.get('*', function (req, res) {
		res.sendFile(__dirname + '/public/index.html');
	});
};
