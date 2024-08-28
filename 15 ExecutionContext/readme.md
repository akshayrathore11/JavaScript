# JavaScript Code Execution

JavaScript is a _synchronous_ (Moves to the next line only when the execution of the current line is completed) and _single-threaded_ (Executes one command at a time in a specific order one after another serially) language. To know behind the scene of how JavaScript code gets executed internally, we have to know something called **Execution Context** and its role in the execution of JavaScript code.

**Execution Context:** Everything in JavaScript is wrapped inside Execution Context, which is an abstract concept (can be treated as a container) that holds the whole information about the environment within which the current JavaScript code is being executed.

Now, an Execution Context has two components and JavaScript code gets executed in two phases.

- **Memory Allocation Phase:** In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns _undefined_ as a placeholder.
- **Code Execution Phase:** In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context.

Let’s see the whole process through an example.

## Javascript

`var` `number = 2;`

`function` `Square (n) {`

`var` `res = n * n;`

`return` `res;`

`}`

`var` `newNumber = Square(3);`

In the above JavaScript code, there are two variables named _number_ and _newNumber_ and one function named _Square_ which is returning the square of the number. So when we run this program, Global Execution Context is created.

So, in the Memory Allocation phase, the memory will be allocated for these variables and functions like this.

![](https://media.geeksforgeeks.org/wp-content/uploads/20210211222239/Capture-660x298.JPG)

Global Execution Context

In the Code Execution Phase, JavaScript being a single thread language again runs through the code line by line and updates the values of function and variables which are stored in the Memory Allocation Phase in the Memory Component.

So in the code execution phase, whenever a new function is called, a new Execution Context is created. So, every time a function is invoked in the Code Component, a new Execution Context is created inside the previous global execution context.

![](https://media.geeksforgeeks.org/wp-content/uploads/20210211222240/Capture1-660x301.JPG)

Global Execution Context

So again, before the memory allocation is completed in the Memory Component of the new Execution Context. Then, in the Code Execution Phase of the newly created Execution Context, the global Execution Context will look like the following.

![](https://media.geeksforgeeks.org/wp-content/uploads/20210211222242/Capture2-660x276.JPG)

Global Execution Context

As we can see, the values are assigned in the memory component after executing the code line by line, i.e. _number: 2, res: 4, newNumber: 4._

After the _return_ statement of the invoked function, the returned value is assigned in place of undefined in the memory allocation of the previous execution context. After returning the value, the new execution context (temporary) gets completely deleted. Whenever the execution encounters the return statement, It gives the control back to the execution context where the function was invoked.

![](https://media.geeksforgeeks.org/wp-content/uploads/20210211222243/Capture4-660x303.JPG)

Global Execution Context

After executing the first function call when we call the function again, JavaScript creates again another temporary context where the same procedure repeats accordingly (memory execution and code execution). In the end, the global execution context gets deleted just like child execution contexts. The whole execution context for the instance of that function will be deleted

# What is the Call Stack in JavaScript ?

The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

\***\*Example:\*\*** The below example demonstrates the call stack.

## Javascript

`function` `f1() {`

` console.log(``'Hi by f1!'``); `

`}`

`function` `f2() {`

`f1();`

` console.log(``'Hi by f2!'``); `

`}`

`f2();`

**Output**

Hi by f1!
Hi by f2!

\***\*Explanation:\*\*** The steps and illustrations below explain the call stack of the above function.

\***\*Step 1:\*\*** When the code loads in memory, the global execution context gets pushed in the stack.

![](https://media.geeksforgeeks.org/wp-content/uploads/20201213100232/global.png)

\***\*Step 2:\*\*** The **f2()** function gets called, and the execution context of **f2()** gets pushed into the stack.

![](https://media.geeksforgeeks.org/wp-content/uploads/20201213101056/global.png)

\***\*Step 3:\*\*** The execution of **f2()** starts and during its execution, the **f1()** function gets called inside the **f2()** function. This causes the execution context of **f1()** to get pushed in the call stack.

![](https://media.geeksforgeeks.org/wp-content/uploads/20201213102457/global.png)

\***\*Step 4:\*\*** Now the **f1()** function starts executing. A new stack frame of the **console.log()** method will be pushed to the stack.

![](https://media.geeksforgeeks.org/wp-content/uploads/20201213103357/global.png)

\***\*Step 5:\*\*** When the **console.log()** method runs, it will print “Hi by f1” and then it will be popped from the stack. The execution context will go back to the function and now there are no lines of code that remain in the **f1()** function, and as a result, it will be popped from the call stack.

\***\*Step 6:\*\*** This will similarly happen with the **console.log()** method that prints the line “Hi by f2” and then finally the function **f2()** would finish and would be pushed off the stack.
