import React from 'react';

const Blog = () => {
  return (
    <div className='p-20 '>
      <div >
        <h1 className='text-lg font-semibold text-purple-800'>Q.1:- Tell us the differences between uncontrolled and controlled components.</h1>
        <p>Ans:In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. </p><br />
      </div>
      <div>
        <h1 className='text-lg font-semibold text-purple-800'>Q.2:- How to validate React props using PropTypes</h1>
        <p>Ans: <ul>
          PropTypes.any : The prop can be of any data type.
          PropTypes.bool : The prop should be a Boolean.
          PropTypes.number : The prop should be a number.
          PropTypes.string : The prop should be a string.
          PropTypes.func : The prop should be a function.
          PropTypes.array : The prop should be an array.
        </ul></p><br />
      </div>
      <div>
        <h1  className='text-lg font-semibold text-purple-800'>Q.3:- Tell us the difference between nodejs and express js.</h1>
        <p>Ans: NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p><br />
      </div>
      <div>
        <h1 className='text-lg font-semibold text-purple-800'>Q.4:- What is a custom hook, and why will you create a custom hook?</h1>
        <p>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</p>
      </div>
    </div>
  );
};

export default Blog;