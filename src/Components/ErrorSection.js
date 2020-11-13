import React from "react";

const ErrorSection = () => {
  return (
    <section class="error-section">
      <div class="container">
        <div class="error-box">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            We are sorry. But the page you are looking for cannot be found.{" "}
          </p>
          <a class="button-one" href="index.html">
            Go To HomePage
          </a>
        </div>
      </div>
    </section>
  );
};
export default ErrorSection;
