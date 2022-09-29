import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
      <div className='blog'>
        <h1>Read, Some React Question and Answer??</h1>
        <h2>How Does React Work?</h2>
        <p>
          React is a front-end JavaScript library developed by Facebook in 2011.
          It follows the component based approach which helps in building
          reusable UI components. It is used for developing complex and
          interactive web and mobile UI.It uses the virtual DOM instead of the
          real DOM. It uses server-side rendering. It follows uni-directional
          data flow or data binding..
        </p>

        <h2>Difference between pros and state?</h2>
        <p>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The this.setState property is used to
          update the state values in the component.
        </p>

        <h2>What is the benifit of UseEffect hooks except api call?</h2>
        <p>
          The motivation behind the introduction of useEffect Hook is to
          eliminate the side-effects of using class-based components. For
          example, tasks like updating the DOM, fetching data from API
          end-points, setting up subscriptions or timers, etc can be lead to
          unwarranted side-effects
        </p>
      </div>
    );
};

export default Blog;