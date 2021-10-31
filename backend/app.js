
//import express
const express = require('express');
//import mongoose 

const mongoose = require('mongoose');
//import model user

const User = require('./models/user');
const Plat = require('./models/plat');

//import multer

const multer = require('multer');
//gerer les url des fichier
const path = require('path');

//imoprt pdf
const fs = require('fs');
const PDFDocument = require('./pdfkit');
//import body parser


const bodyParser = require('body-parser');


//import bcrypt

const bcrypt = require('bcrypt');




//create app
const app = express();
//integration de bofyparse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//connect to database

mongoose.connect('mongodb://localhost:27017/dingo', { useNewUrlParser: true, useUnifiedTopology: true });

//security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


//config multer//
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        //Affecter la destination
        cb(null, 'backend/images')
    },
    //file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' +
            '.' + extension;
        //Affecter file name
        cb(null, imgName);
    }
});


//create user

app.post("/api/adduser", (req, res) => {

    console.log("here in create user", req.body);
    bcrypt.hash(req.body.password, 10).then(cryptedpwd => {
        let user = {};
        user = new User({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedpwd,
            tel: req.body.tel,
            role: req.body.role,
            date: req.body.date,
            persons: req.body.persons




        });
        user.save();
        res.status(200).json({
            message: "user created"
        })

    })


});

//get all users


app.get("/api/allUsers", (req, res) => {

    console.log("here in get all users");

    User.find((err, docs) => {
        if (err) {

            console.log('error in DB');

        }

        else {
            res.status(200).json({
                users: docs

            });

        }
    });
});






//login 
app.post("/api/login", (req, res) => {
    console.log("Here in login", req.body);

    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log("resultEmail", resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "Wrong Email"
                });
            }

            return bcrypt.compare(req.body.password, resultEmail.password);
        })
        .then(
            (resultPwd) => {
                console.log("resultPwd", resultPwd);
                if (!resultPwd) {
                    res.status(200).json({
                        findedUser: "Wrong password"
                    });
                }
                else {
                    User.findOne({ email: req.body.email }).then(
                        (result) => {
                            console.log("result", result);
                            res.status(200).json({
                                findedUser: result
                            })
                        }
                    )
                }
            })
});
//create chef

app.post("/api/add-chef", (req, res) => {

    console.log("here in create user", req.body);
    bcrypt.hash(req.body.password, 10).then(cryptedpwd => {
        let user = {};
        user = new User({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedpwd,
            tel: req.body.tel,
            role: req.body.role,
            speciality: req.body.speciality,
            Experience: req.body.Experience,
            idAdmin: req.body.idAdmin




        });
        user.save();
        res.status(200).json({
            message: "chef created"
        })

    })


});

//get user by id
app.get("/api/allusers/:id", (req, res) => {
    let id;
    let user = {};

    id = req.params.id;
    console.log(id);
    //search

    User.findOne({ _id: id }).then(
        (doc) => {
            console.log(doc);
            //succes to front
            res.status(200).json({
                user: doc
            })
        }
    )
})

//delete user

app.delete("/api/deleteuser/:id", (req, res) => {
    console.log("delete user");

    let id;
    id = req.params.id;
    console.log(id);

    User.deleteOne({ _id: id }).then(
        (result) => {
            console.log(result);
            if (result) {
                res.status(200).json({
                    message: "delete sucess"
                })
            }
        }
    )

})


app.put("/api/updateuser/:id", (req, res) => {
    console.log("update user");
    bcrypt.hash(req.body.password, 10).then(cryptedpwd => {
        let user = {
            _id: req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            tel: req.body.tel,
            password: cryptedpwd,

            role: req.body.role
        }

        let id = req.params.id;
        User.updateOne({ _id: req.body._id }, user).then(
            (result) => {
                console.log(result);
                if (result) {
                    res.status(200).json({
                        message: "update sucess"
                    })
                }
            }
        )
    })




});
// add plat

app.post('/api/addplat', multer({
    storage: storage
}).single('img'), (req, res) => {
    let plat = {};
    console.log('here in add plat');
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    plat = new Plat({
        platName: req.body.platName,
        price: req.body.price,
        description: req.body.description,
        idchef: req.body.idchef,
        img: url + '/images/' + req.file.filename
    });
    console.log('addded plat , plat');
    plat.save();
    res.status(200).json({
        message: "added"
    });
});
//get all plat


app.get("/api/allplats", (req, res) => {

    console.log("here in get all plats");

    Plat.find((err, docs) => {
        if (err) {

            console.log('error in DB');

        }

        else {
            res.status(200).json({
                plats: docs

            });

        }
    });
});

//display plat

app.get("/api/allplat/:id", (req, res) => {
    let id;
    let plat = {};

    id = req.params.id;
    console.log(id);
    //search

    Plat.findOne({ _id: id }).then(
        (doc) => {
            console.log(doc);
            //succes to front
            res.status(200).json({
                plat: doc
            })
        }
    )
});
app.delete("/api/deleteplat/:id", (req, res) => {
    console.log("delete plat");

    let id;
    id = req.params.id;
    console.log(id);

    Plat.deleteOne({ _id: id }).then(
        (result) => {
            console.log(result);
            if (result) {
                res.status(200).json({
                    message: "delete sucess"
                })
            }
        }
    )

})

app.put("/api/updateplat/:id", (req, res) => {
    console.log("update plat");

    let plat = {
        _id: req.body._id,
        platName: req.body.platName,
        price: req.body.price,
        description: req.body.description,




    }

    let id = req.params.id;
    Plat.updateOne({ _id: req.body._id }, plat).then(
        (result) => {
            console.log(result);
            if (result) {
                res.status(200).json({
                    message: "update sucess"
                })
            }
        }
    )





});


app.get("/users/generateFile/pdf", (req, res) => {
    User.find((err, docs) => {
        if (err) {
            console.log("ERROR");
        } else {
            // Create The PDF document
            const doc = new PDFDocument();
            // Pipe the PDF into a user's file
            doc.pipe(fs.createWriteStream(`backend/pdfs/test.pdf`));
            // Add the header -
            https://pspdfkit.com/blog/2019/generate-invoices pdfkit-node/
            doc
                .image("backend/images/téléchargement.jpg", 50, 45, { width: 50 })
                .fillColor("#444444")
                .fontSize(20)
                .text("Here All Users", 110, 57)
                .fontSize(10)
                .text("Imm Yasmine Tower", 200, 65, { align: "right" })
                .text("Centre Urbain Nord", 200, 80, { align: "right" }).moveDown();
            // Create the table -https://www.andronio.me/2017/09/02/pdfkit-tables/
            const table = {
                headers: [
                    "FirstName",
                    "LastName",
                    "Email Address",
                    "Phone",
                ],
                rows: [],
            };
            // Add the users to the table
            for (const user of docs) {
                table.rows.push([
                    user.firstName,
                    user.lastName,
                    user.email,
                    user.tel,
                ]);
            }
            // Draw the table
            doc.moveDown().table(table, 10, 125, { width: 590 }); // Finalizethe PDF and end the stream
            doc.end();
            res.status(200).json({
                message: "HERE PDF (success)",
            });
        }
    });
});


app.post("/api/addreservation", (req, res) => {

    console.log("here in create reservation", req.body);

    let user = {};
    user = new User({

        firstName: req.body.firstName,

        email: req.body.email,

        tel: req.body.tel,
        role: req.body.role,
        date: req.body.daye,
        persons: req.body.persons




    });
    user.save();
    res.status(200).json({
        message: "user created"
    })




});








//export app
module.exports = app;