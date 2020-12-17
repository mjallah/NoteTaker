// Require 'path' package to get file path for our html
const express = require("express");
const path = require("path");
const db = require("../db/db.json");
const fs = require("fs")
const dbFile = __dirname + "/../db/db.json"


module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        res.json(db)
    })

    app.post("/api/notes", (req, res) => {
        console.log(req.body)
        // Get the contnent from the DB file
        // Read it
        // turn it into an array
        // Add to that array
        // write again
        // read again

        fs.readFile(dbFile, "utf-8", (err, data) => {
            console.log(data)
            let old = JSON.parse(data)
            old.push(req.body)
            fs.writeFile(dbFile, JSON.stringify(old), "utf-8", () => {
                fs.readFile(dbFile, "utf-8", (err, data) => {
                    res.json(JSON.parse(data))
                })
            })
        })
    })




};