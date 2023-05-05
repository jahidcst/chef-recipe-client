import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl text-red-600 font-bold mt-3 mb-3 text-center underline">Here Is Blog</h2>
      <div className="card card-body">
        <h2 className="font-bold">
          1.what is the differences between uncontrolled and controlled
          components.?
        </h2>
        <h4 className="text-slate-400"><span className="font-semibold">Ans:</span>
          The key difference between the two approaches is that controlled
          components rely on external input to manage their state, while
          uncontrolled components manage their own state internally. Controlled
          components are typically used for more complex components that require
          interaction with other parts of the system, while uncontrolled
          components are used for smaller, isolated components.
        </h4>
      </div>
      <div className="card card-body">
        <h2 className="font-bold">
          2.How to validate React props using PropTypes?
        </h2>
        <h4 className="text-slate-400"><span className="font-semibold">Ans:</span>
          PropTypes is a built-in library in React that provides a way to
          validate the type and shape of the props that are passed to a React
          component
        </h4>
      </div>
      <div className="card card-body">
        <h2 className="font-bold">
          3.what is the difference between nodejs and express js.?
        </h2>
        <h4 className="text-slate-400"><span className="font-semibold">Ans:</span>
          Node.js is a runtime environment that allows developers to run
          JavaScript code on the server-side, outside of the browser. It
          provides a set of core modules that can be used to build server-side
          applications in JavaScript.
           Express.js, on the other hand, is a web
          application framework built on top of Node.js. It provides a set of
          features and tools that simplify the process of building web
          applications, such as routing, middleware, and template rendering.
        </h4>
      </div>
      <div className="card card-body">
        <h2 className="font-bold">
          4.What is a custom hook, and why will you create a custom hook?
        </h2>
        <h4 className="text-slate-400"><span className="font-semibold">Ans:</span>
        A custom hook is a reusable function that contains some stateful or logic functionality that can be shared across different components in a React application. Custom hooks allow developers to extract common logic from components and reuse it across the application.
        </h4>
      </div>
    </div>
  );
};

export default Blog;
