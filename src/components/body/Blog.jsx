import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col flex-wrap text-justify mx-32 mt-36">
            <h1 className="text-3xl font-bold text-center underline">Question and Answer</h1>
            <div className="mt-16 mb-4">
                <div className="mb-1 flex">
                    <h1 className="text-xl font-bold mr-3">Q1.</h1>
                    <h1 className="text-xl font-bold">When should we use context API?</h1>
                </div>
                <div>
                    <div className="flex">
                        <p className="font-bold mr-2">Ans:</p>
                        <p className="text-justify">Context API in React should be used when you need to pass data or state down to multiple levels of child components
                            without having to explicitly pass the data through each component as a prop. It is especially useful in larger applications where there are many nested components that need access to the same data.</p>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div className="mb-1 flex">
                        <h1 className="text-xl font-bold mr-3">Q2.</h1>
                        <h1 className="text-xl font-bold">What is custom hook?</h1>
                    </div>
                    <div className="flex">
                        <p className="font-bold mr-3">Ans:</p>
                        <p className="text-justify">There are many kind of build in hook in react. These hooks are used for different type of word. But react has some custom hook features also. Custom hooks are useful when you have complex logic that needs to be reused across multiple components. By creating a
                            custom hook, you can extract that logic into a separate function, and then use that function in any component that needs
                            it.</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="mb-1 flex">
                        <h1 className="text-xl font-bold mr-3">Q3.</h1>
                        <h1 className="text-xl font-bold">What is useRef??</h1>
                    </div>
                    <div>
                        <div className="flex">
                            <p className="font-bold mr-3">Ans:</p>
                            <p className="text-justify">useRef is a built-in React hook that accepts one argument as the initial value and returns a reference. useRef can be used to store and access values that are associated with the
                                component but should not trigger a re-render.</p>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Blog;