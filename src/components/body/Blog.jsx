import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col flex-wrap text-justify mx-32 mt-36 mb-28">
            <h1 className="text-3xl font-bold text-center underline">Question and Answer</h1>
            <div className="mt-16 mb-4">
                <div className="mb-1 flex">
                    <h1 className="text-xl font-bold mr-3">Q1.</h1>
                    <h1 className="text-xl font-bold">Tell us the differences between uncontrolled and controlled components.</h1>
                </div>
                <div>
                    <div className="flex">
                        <p className="font-bold mr-2">Ans:</p>
                        <p className="text-justify">In according to React, uncontrolled and controlled components refer to two different ways of managing form data and user input in a React application. Controlled components refer to components that have their state and behavior controlled by the parent component and uncontrolled components refer to components that manage their own state internally.</p>
                    </div>
                </div>
                <div className="mt-10 mb-4">
                    <div className="mb-1 flex">
                        <h1 className="text-xl font-bold mr-3">Q2.</h1>
                        <h1 className="text-xl font-bold">How to validate React props using PropTypes?</h1>
                    </div>
                    <div className="flex">
                        <p className="font-bold mr-3">Ans:</p>
                        <p className="text-justify">In React, you can use PropTypes to validate the props that are passed down to a component. PropTypes is a type-checking library that helps you ensure that the data passed to your component is of the correct type. PropTypes is a library that can be used to validate React props.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="mb-1 flex">
                        <h1 className="text-xl font-bold mr-3">Q3.</h1>
                        <h1 className="text-xl font-bold">Tell us the difference between nodejs and express js</h1>
                    </div>
                    <div>
                        <div className="flex">
                            <p className="font-bold mr-3">Ans:</p>
                            <p className="text-justify">Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. Express.js is a web application framework for Node.js that provides a set of features to simplify the development of web and mobile applications.</p>
                        </div>
                    </div>
                </div >
                <div className="mt-10">
                    <div className="mb-1 flex">
                        <h1 className="text-xl font-bold mr-3">Q4.</h1>
                        <h1 className="text-xl font-bold">What is a custom hook, and why will you create a custom hook?</h1>
                    </div>
                    <div>
                        <div className="flex">
                            <p className="font-bold mr-3">Ans:</p>
                            <p className="text-justify">Custom hooks are reusable functions that allow developers to add special and unique functionality to React applications. Custom hooks are like super-powered helper functions ⁽¹⁾ and can be used to solve problems that would otherwise require a third-party library</p>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};


export default Blog;