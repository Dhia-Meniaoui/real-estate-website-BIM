const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const app = express();
const nodemailer = require("nodemailer");
const multer = require('multer');
const upload = multer({dest: 'upload/'});




app.use(bodyParser.json());
app.use(cors());




async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://bim:4LSbdGGfw5NUxWc@cluster0.n5ecm.mongodb.net/cluster0?retryWrites=true&w=majority',
        {         
          useNewUrlParser: true,useUnifiedTopology: true
        }
    );
    return client.db('cluster0').collection('posts');
  };

 



// Get Posts
app.get('/DashBoard', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
app.post('/DashBoard', async (req, res) => {
  const posts = await loadPostsCollection();  
  await posts.insertOne({
    type: req.body.sendtype,
    adresse: req.body.sendadresse,
    details: req.body.senddetails
  });
  res.status(201).send();
});

// Delete Post
app.delete('/DashBoard/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});





app.use('/OffreBim',async (req ,res)=> {
  const output =`
  <p>contact details</p>
  <ul>
    <li>name: ${req.body.sendname}</li>
    <li>first name: ${req.body.sendfirstname}</li>
    <li>email: ${req.body.sendemail}</li>
    <li>phone: ${req.body.sendphone}</li>
  </ul>
  <p>message</p>
  <p>${req.body.sendmessage}</p>
  `;

  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
      user: "diaminiaoui@gmail.com", // generated ethereal user
      pass: "q", // generated ethereal password
    },
    tls:{
      rejectUnauthorized : false
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${req.body.sendemail}`, // sender address
    to: "diaminiaoui@gmail.com", // list of receivers
    html: output, // html body
  });

});






const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));







