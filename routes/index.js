var express = require('express');
var router = express.Router();
//var rout = express.Router();
var cardb= require('../views/data/db');
var userdb= require('../views/data/userdb');
var async= require('async');
var nodemailer= require('nodemailer')
var smtpTransport = nodemailer.createTransport({
service: "Gmail",
auth: {
user: "raju.kumar@sprytechies.com",
pass: ""
}
});



/* GET home page. */
/*router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Home' });
    var creators = [];
  
  make.find({}).exec(function(err, make) {
   //console.log("Creators:", make);
   creators = make;
   });

  console.log("Makeeee",creators);
  res.render('index', 
  {creators:creators}
  //{make_name:make_name}
  );

});*/

router.get('/', function(req, res) {
    
    var makeObjects = make.find({});
    //var modelObjects = model.find({});
    var resources = {
        firstlist: makeObjects.exec.bind(makeObjects),
       // seclist: modelObjects.exec.bind(modelObjects)
    };

    async.parallel(resources, function (error, results){
        if (error) {
            res.status(500).send(error);
            return;
        }
        console.log("hiii, results");
        res.render('index', {results:results, title:'CarBecho'});

    });
});

router.post('/model',function(req, res){
	var user_id=req.body.id;
	console.log('user_id')
	model.find({make_id:user_id},'make_id model_name model_id',function(err,docs){
		/*creators=model;
		if (err) res.json(err);
		else res.json('index', {creators:creators})*/
			res.send(docs);
			//console.log('hiii', docs)
	})
})


router.post('/year',function(req, res){
	var user_id=req.body.id;
	console.log('user_id')
	makeyear.find({make_id:user_id},function(err,docs){
		/*creators=model;
		if (err) res.json(err);
		else res.json('index', {creators:creators})*/
			res.send(docs);
			console.log('hiii', docs)
	})
})


router.post('/variant',function(req, res){
	var user_id=req.body.id;
	console.log('user_id')
	variant.find({model_id:user_id},function(err,docs){
		/*creators=model;
		if (err) res.json(err);
		else res.json('index', {creators:creators})*/
			res.send(docs);
			console.log('hiii')
	})
})

router.post('/index2',function(req,res,next){
	new user({
		
		make_name: req.body.make_name,
		model_name: req.body.model_name,
		variant_name: req.body.variant_name,
		year: req.body.makeyear

		
	}).save(function(err,docs){
        if(err)
			res.json(err);
		else
			var name=docs.id
			res.render('index2',{name:name})
			
			
			console.log("id of this ",name)
			
			

	})

  })
router.post('/index3/:id', function(req,res){
	var id = req.params.id;
	     console.log(id);


	    user.update({_id:req.params.id},{milage:req.body.milage,email:req.body.email,price:req.body.range}, function(err, numberAffected){
		console.log(numberAffected)

		fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	    url=encodeURI(fullUrl);
	    console.log('url is',url);
		

		var mailOptions={
		to : req.body.email,
		subject : 'Thank-You',
		text : 'This is a Mail '+url
		}
		console.log(mailOptions);
		smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
		// console.log(error);
		// res.end("error");
		// }else{
		console.log("Message sent: " /*+ response.message*/);
		user.find({_id:id},function(err,docs){
			// res.render("index3",{docs:docs});
			console.log(docs[0].make_name)
			var make_id=docs[0].make_name;
			var model_id=docs[0].model_name;
			var variant_id=docs[0].variant_name;
			var makeyear_id=docs[0].year;
	var makeObjects = make.find({make_id:make_id},'make_name');
    var modelObjects = model.find({model_id:model_id},'model_name');
    var variantObjects = variant.find({variant_id:variant_id},'variant_name');
    var yearObjects = makeyear.find({makeyear_id:makeyear_id},'year');
    var resources = {
        firstlist: makeObjects.exec.bind(makeObjects),
        seclist: modelObjects.exec.bind(modelObjects),
        thirdlist: variantObjects.exec.bind(variantObjects),
        fourlist: yearObjects.exec.bind(yearObjects)
    };

    async.parallel(resources, function (error, results){
        if (error) {
            res.status(500).send(error);
            return;
        }
        console.log("hiii", results, docs);
        res.render('index3', {results:results, title:'CarBecho', docs:docs});

    });

			
		})
		
		}
		});
	})

})

router.post('/index4/:',function(req, res, next){


})

























router.get('/makee',function(req,res){
	model.find({},function(err,docs){
		if(err) res.json(err);
		else res.send({docs:docs});
	})
})


module.exports = router;
//module.exports = rout;
