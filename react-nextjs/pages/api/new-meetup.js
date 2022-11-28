import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // WE SHOULD HANDLE ERRORS WHILE CONNECTING TO THE DB AND FOR THE INSERTING

    // open the connection to the DB
    // this is code which you don't want to run on the client side
    // however the code in this API route will never end up on the client side :)
    const client = await MongoClient.connect(
      "mongodb+srv://test:123456_@cluster0.zpqii7b.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    // built-in query coomand for inserting one new document into this collection
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    // close the connection to the DB when we're done
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
