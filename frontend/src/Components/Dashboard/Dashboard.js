import React from "react";
import SimilarPeople from "./SimilarPeople";
import TimeToStudy from "./TimeToStudy";
import Upcoming from "./Upcoming";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <SimilarPeople />
      <TimeToStudy timeLeft={4} />
      <Upcoming />
    </div>
  );
}

export default Dashboard;
