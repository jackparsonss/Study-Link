import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import "./TimeToStudy.css";
import { auth, db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import EnterClassesModal from "./EnterClassesModal";

function TimeToStudy({ timeLeft }) {
  const [userId, setUserId] = useState("");
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    class1: "",
    class2: "",
    class3: "",
    class4: "",
    class5: "",
  });

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
      <div className="timeToStudy__body">
        {classes.length === 0 ? (
          <>
            <div className="timeToStudy__enterClasses">
              <button
                className="timeToStudy__btn"
                onClick={() => setShowModal(true)}
              >
                Add Classes
              </button>
              <EnterClassesModal
                show={showModal}
                setShow={() => setShowModal(false)}
                values={values}
                setValues={setValues}
                usr={userId}
              />
            </div>
          </>
        ) : (
          <>
            <div className="timeToStudy__classList"></div>
            <p>Classes</p>
          </>
        )}
      </div>
    </div>
  );
}

export default TimeToStudy;
