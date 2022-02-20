import { collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import "./EnterClassesModal.css";
import { db } from "../../firebase";

function EnterClassesModal({ show, setShow, values, setValues, usr }) {
  if (!show) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await setDoc(doc(db, "users", usr), values);
  };

  return (
    <div className="enterClassesModal" onClick={setShow}>
      <div
        className="enterClassesModal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="enterClassesModal__header"></div>
        <div className="enterClassesModal__body">
          <form className="enterClassesModal" onSubmit={handleSubmit}>
            <div className="enterClassesModal-body">
              <h1 className="enterClassesModal-title">Enter Classes</h1>
              <div className="enterClassesModal-inputs">
                <label htmlFor="class1" className="enterClassesModal-label">
                  Class 1:
                </label>
                <input
                  id="class1"
                  type="text"
                  name="class1"
                  className="enterClassesModal-input"
                  placeholder="Enter your first class"
                  value={values.class1}
                  onChange={handleChange}
                />
              </div>
              <div className="enterClassesModal-inputs">
                <label htmlFor="class2" className="enterClassesModal-label">
                  Class 2:
                </label>
                <input
                  id="class2"
                  type="text"
                  name="class2"
                  className="enterClassesModal-input"
                  placeholder="Enter your second class"
                  value={values.class2}
                  onChange={handleChange}
                />
              </div>
              <div className="enterClassesModal-inputs">
                <label htmlFor="class3" className="enterClassesModal-label">
                  Class 3:
                </label>
                <input
                  id="class3"
                  type="text"
                  name="class3"
                  className="enterClassesModal-input"
                  placeholder="Enter your third class"
                  value={values.class3}
                  onChange={handleChange}
                />
              </div>
              <div className="enterClassesModal-inputs">
                <label htmlFor="class4" className="enterClassesModal-label">
                  Class 4:
                </label>
                <input
                  id="class4"
                  type="text"
                  name="class4"
                  className="enterClassesModal-input"
                  placeholder="Enter your fourth class"
                  value={values.class4}
                  onChange={handleChange}
                />
              </div>
              <div className="enterClassesModal-inputs">
                <label htmlFor="class5" className="enterClassesModal-label">
                  Class 5:
                </label>
                <input
                  id="class5"
                  type="text"
                  name="class5"
                  className="enterClassesModal-input"
                  placeholder="Enter your fifth class"
                  value={values.class5}
                  onChange={handleChange}
                />
              </div>

              <button
                className="timeToStudy__btn modalbtn"
                onClick={setShow}
                type="submit"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
        <div className="enterClassesModal__footer"></div>
      </div>
    </div>
  );
}

export default EnterClassesModal;
