import React from "react";

const Blogs = () => {
  return (
    <div className="mt-16 h-screen mx-5">
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
          <p>
            The Four Kinds of React State to Manage When we talk about state in
            our applications, it’s important to be clear about what types of
            state actually matter. There are four main types of state you need
            to properly manage in your React apps: <br />
            1. Local state
            <br />
            2. Global state
            <br />
            3. Server state
            <br />
            4. URL state
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div class="collapse-content">
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          you have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </div>
        <div class="collapse-content">
          <p>
            First of all I need to fetch the data from server or json file.
            After fetching the data I should map them. If I map a thing, it will
            give me all the data. So I can easily get them at my own. For making
            it a little easier we can destructure them. Beside that, we can use
            axios. Nonetheless If I need to reuse it, I can make a custom hook
            to make it reusable for me. So, basically this is how it works
            actually from my point of view and learning throughout the time.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div class="collapse-content">
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
