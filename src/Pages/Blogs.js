import React from "react";

const Blogs = () => {
  return (
    <div className="mt-16 ">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div class="collapse-content">
          <p>
            Whenever we create a rendered component, React creates a virtual DOM
            for and its element tree in the component. Now, whenever the state
            of the component there changes, by the time React recreates the
            virtual DOM tree and compares the result with the previous render.
            It then only updates the changed element in the actual DOM. This
            process is called diffing. React uses the concept of a virtual DOM
            to minimize the performance cost of the re-rendering a webpage
            because the actual DOM is expensive to manipulate. This is great
            because it speeds up the UI render time. However, this concept can
            also slow down a complex app if it’s not managed very well.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div class="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div class="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div class="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
