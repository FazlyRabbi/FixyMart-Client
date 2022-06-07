import React from "react";
import Navbar from "../Shared/Navbar";

function Blog() {
  return (
    <div className=" container mx-auto px-9">
      <Navbar />
      <div className="qextion-1 py-12">
        <h1 className="font-bold text-left text-2xl">
          Q-1: How will you improve the performance of a React Application?
        </h1>
        <article className="text-justify text-center py-4">
          Keeping component state local where necessary. Memoizing React
          components to prevent unnecessary re-renders. Code-splitting in React
          using dynamic import() Windowing or list virtualization in React. Lazy
          loading images in React.Keeping component state local where necessary.
          Memoizing React components to prevent unnecessary re-renders.
          Code-splitting in React using dynamic import() Windowing or list
          virtualization in React. Lazy loading images in React.
        </article>
      </div>
      <div className="qextion-2 py-12">
        <h1 className="font-bold text-left text-2xl">
          Q-2:What are the different ways to manage a state in a React
          application?
        </h1>
        <article className="text-justify text-center py-4">
          There are four main types of state you need to properly manage in your
          React apps: Local state. Global state. Server state. URL state.
        </article>
      </div>
      <div className="qextion-3 py-12">
        <h1 className="font-bold text-left text-2xl">
          Q-3: How does prototypical inheritance work?
        </h1>
        <article className="text-justify text-center py-4">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
        </article>
      </div>
      <div className="qextion-4 py-12">
        <h1 className="font-bold text-left text-2xl">
          Q-4: Why you do not set the state directly in React. For example, if
          you have const [products, setProducts] = useState([]). Why you do not
          set products = [...] instead, you use the setProducts
        </h1>
        <article className="text-justify text-center py-4">
          React will then look at the virtual DOM, it also has a copy of the old
          virtual DOM, that is why we shouldn't update the state directly, so we
          can have two different object references in memory, we have the old
          virtual DOM as well as the new virtual DOM.
        </article>
      </div>
    </div>
  );
}

export default Blog;
