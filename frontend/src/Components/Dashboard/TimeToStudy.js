import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import "./TimeToStudy.css";
import { auth, db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function TimeToStudy({ timeLeft }) {
  const [userId, setUserId] = useState("");
  const [classes, setClasses] = useState([]);

  const getClasses = async () => {
    const colRef = collection(db, "users");
    const querySnapshot = await getDocs(colRef);
    querySnapshot.forEach((doc) => {
      if (doc.id === userId) {
        setClasses(doc.data().Classes);
        console.log(classes);
      }
    });
  };

  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        getClasses();
      }
    });
    return loggedIn;
  }, []);

  return (
    <div className="timeToStudy">
      <h2 className="timeToStudy__title">
        {timeLeft} Hours Left To Study This Week
      </h2>
      {classes.length === 0 ? (
        <>
          <p>Please enter your classes</p>
        </>
      ) : (
        <>
          <p>Classes</p>
        </>
      )}
    </div>
  );
}

export default TimeToStudy;
