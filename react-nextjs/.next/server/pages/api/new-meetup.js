"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js

// /api/new-meetup
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        // WE SHOULD HANDLE ERRORS WHILE CONNECTING TO THE DB AND FOR THE INSERTING
        // open the connection to the DB
        // this is code which you don't want to run on the client side
        // however the code in this API route will never end up on the client side :)
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://test:123456_@cluster0.zpqii7b.mongodb.net/?retryWrites=true&w=majority");
        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        // built-in query coomand for inserting one new document into this collection
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        // close the connection to the DB when we're done
        client.close();
        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(634));
module.exports = __webpack_exports__;

})();