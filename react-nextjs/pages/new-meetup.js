// our-domain.com/new-meetup
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupandler = async (enteredMeetupData) => {
    // handle errors

    // absolute path to the file in the api folder
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create mazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
