import React from "react";
import { Helmet } from "react-helmet";

function TeacherDashboard() {
  return (
    <div>
      TeacherDashboard
      <Helmet>
        <title>Teacher Dashboard - LearnHub</title>
        <meta
          name="description"
          content="Manage your courses and track student progress on LearnHub."
        />
      </Helmet>
    </div>
  );
}

export default TeacherDashboard;
