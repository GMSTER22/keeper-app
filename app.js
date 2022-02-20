//jshint esversion:6

const express = require("express");
let ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
// const router = express.Router();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/wikiDB")
}

main();

const articleSchema = new mongoose.Schema({
    title: String, 
    content: String
});

const Article = mongoose.model("Article", articleSchema);


/////////////////////// REQUEST TARGETING ALL ARTICLES //////////////////////

app.route("/articles")
    .get((req, res) => {
        Article.find( (error, articles) => {
            if (!error) {
                res.send(articles);
            } else {
                res.send(error);
            }
        })
    })
    .post((req, res) => {
        const articleTitle = req.body.title;
        const articleContent = req.body.content;
        
        const newArticle = new Article({
            title: articleTitle,
            content: articleContent
        });
    
        newArticle.save( error => {
            if (!error) {
                res.send("Successfully added a new article");
            } else {
                res.send(error);
            }
        })
    })
    .delete((req, res) => {
        Article.deleteMany( error => {
            if (!error) {
                res.send("Successfully deleted all articles");
            } else {
                res.send(error);
            }
        });
    });


    ///////////////////// REQUEST TARGETING A SPECIFIC ARTICLE ////////////

app.route("/articles/:articleTitle")
    .get((req, res) => {

        Article.findOne( {title: req.params.articleTitle}, (error, article) => {
            if (!error) {
                res.send(article);
            } else {
                res.send("No article matching that title was found.");
            }
        })
    })
    .put((req, res) => {
        Article.replaceOne(
            {title: req.params.articleTitle}, 
            { title: req.body.title, content: req.body.content},
            function(error) {
                if (!error) {
                    res.send("Successfully updated article");
                } else {
                    res.send("Couldn't update the article.")
                }
            })
    })
    .patch((req, res) => {
        Article.updateOne(
            {title: req.params.articleTitle}, 
            { $set: req.body},
            function(error) {
                if (!error) {
                    res.send("Successfully updated the article");
                } else {
                    res.send("Couldn't update the article.")
                }
            })
    })    
    .delete((req, res) => {
        Article.deleteOne(
            {title: req.params.articleTitle},
            function(error) {
                if (!error) {
                    res.send("Successfully deleted the article");
                } else {
                    res.send("Couldn't delete the article.")
                }
            })
    })    



app.listen("3000", function() {
    console.log("server is up on 3000")
});