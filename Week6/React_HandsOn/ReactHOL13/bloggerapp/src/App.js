import React from "react";
import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div className="container">

      <h1>Blogger App</h1>

      {/* 1. IF using Element Variable */}

      {(() => {

        let component;

        if (showBooks) {
          component = <BookDetails />;
        }

        return component;

      })()}

      {/* 2. Logical AND */}

      {showBlogs && <BlogDetails />}

      {/* 3. Ternary Operator */}

      {showCourses ? <CourseDetails /> : <h2>No Courses Available</h2>}

    </div>

  );

}

export default App;