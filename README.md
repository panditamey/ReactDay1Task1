React JS Day 1

Webpack : JavaScript module bundler that is commonly used with React to bundle and manage dependencies.

Babel : Traspiler for Javascript. Babel with React to transpile the JSX code into simple React functions that can be understood by browsers.

Virtual Dom : ##

EXPORTSS:
named exports : {}.
default exportz : no {} and only one export.

.mjs and .cjs are a way to tell Node.js explicitly how to interpret your JavaScript files.

If you're using CommonJS modules with require, you should use .cjs.

If you're using ES modules with import, you should use .mjs.

Data Pass from Child To Parent : Functional Prop (Callback)
Data Pass from Parent To Children : Data Prop (Any data Object)

//Prop Drilling

Controlled Input : React Component can control the input field.
UnControlled Input : React Component cannot control the input field.

e.target.value : Target : DOM contains Event that can be accessed from target.

    <Animal name={name} count={count} isEndangered={isEndangered}/>
    <Animal name="String" count={count} isEndangered={isEndangered}/>

    When Passing Attribute we can only pass STRING or JAVASCRIPT Object.

Higher Order Component - Component that accepts Component as prop and returns enhanced component.
