// our-domain.com/
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image: "https://duttongarage.com/img/488130/67354",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://cdn.bimmertoday.de/wp-content/uploads/2016/10/2018-BMW-M5-F90-xTomi-Design-1.jpg",
//     address: "Some address 1-, 12345 Some City",
//     description: "This is a second meetup",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data (can use await)
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // WE SHOULD HANDLE ERRORS WHILE CONNECTING TO THE DB AND FOR THE FETCHING

  const client = await MongoClient.connect(
    "mongodb+srv://test:123456_@cluster0.zpqii7b.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // by default find will return all documents in the collection
  const meetups = await meetupsCollection.find().toArray();

  // close the connection to the DB when we're done
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
