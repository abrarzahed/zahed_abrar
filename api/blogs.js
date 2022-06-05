const blogs = [
  {
    id: 1,
    title: "An Overview of JavaScript",
    body: `
        <p style="margin-top: 1rem; font-size: 1.15rem">Javascript is a high-level, prototyped-based, object-oriented 
        multi-paradigm,dynamic, single-threaded, garbage-collected 
        programing language with first-class-functions and a 
        non-blocking event loop concurrency model.🤨</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">This definition and terms are overwhelming. Isn't it? Lets explore them</p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>High-level:- </b>  Every programs that runs on computer needs some hardware resources
        such as memory, cpu to work. There are low level languages such as C or C# where
        you have to manually manage these resources.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">
        For example asking to computer for memory to store a variable. 
        On the other hand there are high-level languages such as javascript and python, 
        where you do not need to manually manage these resources. Because these languages
        have so called abstractions that takes all of that work away from us.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">
        These makes the language easier to learn and use. But the down site is that, the programs will not be as fast as low level language such as C and C# programs. One of the powerful tool that take memory collection away from developers is called garbage collection.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Garbage-collected:- </b> Garbage collection is basically and algorithm inside javascript engine which automatically removes all unused objects from computer memory. In order not to clog it up with unnecessary stuff.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Interpreted or just-in-time compiled:- </b> Computer processor only understands 0 and 1 which is called machine code. But they are not efficient to write and read. So programmers write human readable code. Which is an abstraction over machine code. But still this code eventually needs to be translated into machine code. And thats step can be either needs compiling or interpreting. In the case of javascript this happens inside the javascript engine.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Multi-paradigm:- </b> One of the thing that makes javascript so popular is the fact that, javascript is multi-paradigm language. In programming paradigm is an approach and mindset of structuring code, which will direct your coding style and technique.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Prototyped-based object-oriented:- </b> Javascript is a prototyped-based 
        object-oriented programming language. That means almost everything in javascript 
        is an object. Except for preemptive values such as numbers, strings etc. 
        Even arrays are objects in javascript.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Dynamic:- </b> That means javascript dynamically typed language. 
        In javascript we don't assign data types to variables. They only became known 
        when javascript engine execute the code. Also the types of variables can be 
        changed at any point of program by reassigning them.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>First-class functions:- </b> Javascript is a language with first-class functions. 
        That means in javascript, functions are simply treated as regular variables. 
        Functions can be passed into other functions. And can be returned as well. 
        Which is extremely powerful because it turns on the ability of functional programming.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Single-treaded & non-blocking event loop:- </b> Javascript runs in one single thread. 
        So it can only do one thing at time. Therefore in a long-running task such as 
        fetching data from external server, would block the single thread 😫. 
        But there is another term in javascript which is responsible to prevent 
        this from happening which is called non-blocking event loop 😊.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem">By using non-blocking event loop, javascript takes long running tasks and execute them in background. And then puts them back in the main thread once they are finished.</p>

        `
  },
  {
    id: 3,
    title: "Concept of JavaScript Engine",
    body: `
       
        <p style="margin-top: 1rem; font-size: 1.15rem">What is javaScript engine? <br/> Javascript engine is a program that executes javascript code.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">Every browser has its own javascript engine. But provably the most known javascript engine is google V8 engine.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">Any javascript engine always contains a cal-stack and a heap. The call-stack 
        is where all the code is executes using something called "execution context". 
        And the heap is an unstructured memory that stores all the objects that applications need.
        With that this is clear that where javascript code is executes. But now the question 
        is how the code will be compiled into machine code?</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">
        Well at first lets take a look at the deference between compilation and interpretation. 
        As we now that every single computer programs eventually needs to be converted as 
        machine code. And this can be happen by either compilation or interpretation.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Compilation:- </b>In compilation the entire code will be converted into 
        machine code at once. And then that machine code will be written in a portable 
        binary file that can be executed by any computer. So here the execution can be 
        happen way after compilation.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem"><b>Interpretation:- </b> In interpretation there is an interpreter which runs through 
        the source code and execute them line by line. So here we do not have the same two 
        steps unlike in compilation. So the code is read an execute at a same time. 
        of course the source code is still needs to be converted into machine code. 
        But it simply happens right before its execution and not ahead of time.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">Before emergence of modern javascript, it used to be a purely interpreted language. 
        But the problem of  interpreted languages is that they are much much slower than compiled languages. Still many people think javascript is an interpreted language, 
        but this is not true any more. Instead of simple interpretation, 
        now modern javascript engine uses a mix version of compilation and interpretation. 
        Which is called just-in-time(JIT) compilation.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem">This approach basically compiles the entire code into machine at once and then 
        executes them right away. There is still two steps as simple compilation approach but 
        now there isn't any portable file. So the execution happens immediately after compilation. 
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem">And surely this is indeed a faster approach than executing line by line.
        </p>

        

        `
  },
  {
    id: 2,
    title: "Concept of JavaScript Runtime",
    body: `
       
        <p style="margin-top: 1rem; font-size: 1.15rem"> What is javaScript runtime? <br/> The most common javaScript runtime is the browser.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">JavaScript runtime can be imagined  as a big container. Which contains all the 
        things that needed to use javaScript. The heart of any javascript runtime is 
        always a javascript engine. Without an engine there is no runtime and no javascript at all. However the engine alone is not enough in order to work properly. We also need 
        access to web APIs such as DOM, Timers, fetch and so on and so forth.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">Web APIs are functionalities provided to the engine which are not part of 
        javascript language itself. Javascript simply gets access to these APIs through 
        the global window object. Actually web APIs are the parts of runtime.
        Because as we know that javascript runtime is such a container which 
        contains all the javascript related stuff that we need.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">A typical javascript runtime also includes a so called "callback queue". 
        This is nothing but a data structure that contains all the callback functions 
        which are ready to be executed, Which happens through something called event loop.</p>

        

        `
  },
  {
    id: 3,
    title: "Execution Context in JavaScript",
    body: `
       
        <p style="margin-top: 1rem; font-size: 1.15rem"> After compilation of javascript code, there will be a a global execution
        context for top level code. Top level code means the code which is not inside a function.
        The defecation of execution context can be like, an environment in which stored all the necessary information for code to be executed with a specific order and role.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">For each and every function, an new execution context will be created. 
        Same goes for methods because there simply functions attached to objects.</p>


        <p style="margin-top: 1rem; font-size: 1.15rem">After execution of all functions the engine waits for callback functions to arrive. 
        For example a callback function associated with a click event.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">Now lets explore what inside of an execution context. The first thing inside 
        any execution context is so called variable environment. In this environment 
        all the variables and function declaration are stored. And there is also a spacial
        arguments object. This object contains all the arguments passed into function that 
        the current execution context belongs to. Because each function gets its own execution
        context as soon as the function is called. So all the variable declared inside a function
        will end up in its variable environment.</p>

        <p style="margin-top: 1rem; font-size: 1.15rem">However a function can also access a variable outside of the function. This work 
        because something called scope chain.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem">Basically scope chain is consists of references to variables that are located outside
        of the current function. to keep track of the scope chain it is stored in each 
        execution context. Each context also get a spacial variable called this keyword.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem">The content of the execution context variable environment, scope chain and this keyword 
        are generated in the sp called creation face. Which happens right before execution.
        </p>

        <p style="margin-top: 1rem; font-size: 1.15rem">But execution context belonging to arrow functions, do not get there argument object and 
        the this keyword. Basically arrow functions do not have argument object and this keyword.
        Instead they can use the argument and this keyword from their closest regular function.
        </p>

        `
  }
];
export default blogs;
