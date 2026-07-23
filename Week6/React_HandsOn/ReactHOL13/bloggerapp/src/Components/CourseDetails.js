import React from "react";

function CourseDetails() {

  const courses = [
    {
      id: 1,
      course: "React JS",
      duration: "45 Hours"
    },
    {
      id: 2,
      course: "Spring Boot",
      duration: "40 Hours"
    },
    {
      id: 3,
      course: "Microservices",
      duration: "35 Hours"
    }
  ];

  return (

    <div className="card">

      <h2>🎓 Course Details</h2>

      {
        courses.map(course => (
          <div key={course.id} className="item">
            <h3>{course.course}</h3>
            <p>Duration : {course.duration}</p>
          </div>
        ))
      }

    </div>

  );

}

export default CourseDetails;