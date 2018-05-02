// private variable's Declaration
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var config = require('./config')
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var connectionString = config.MONGO_DB_CONNECTION_STRING;

var flights_data_to_import = JSON.parse(fs.readFileSync('./api/flights/flights.data-utf8.json', 'utf8'));


// Functions Declaration

var insertDocumentsToCollections = function (db, callback) {
    insertDocument(db, config.Mongo_DB_FLIGHT_Partitioned, flights_data_to_import, function () { });
}

// Insert Feedback data into MongoDB Database
var insertDocument = function (db, collection, data_to_import, callback) {
    for (let i = 0; i < data_to_import.length; i++) {
        db.collection(collection).insertOne(data_to_import[i], function (err, result) {
            assert.equal(err, null);
            if (i === data_to_import.length - 1) {
                console.log('Data imported successfully into the ' + collection + ' collection.');

                setTimeout(function () {
                    callback();
                }, 1500);
            }
        });
    }
};

// Execution starts
MongoClient.connect(connectionString, function (err, db) {
    assert.equal(null, err);

    insertDocumentsToCollections(db, function () {
        // db.close();
        // process.exit();
    });
});
