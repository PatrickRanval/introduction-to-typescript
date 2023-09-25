##What and Why?

I really struggle to follow videos and take notes at the same time, tbqh.

So TypeScript is basically stricter with typing to prevent unexpected behaviors.  

##Installing and Using TypeScript

I think the prework should have an "Understanding Command Prompt" module. 

Okay, I got everything to work properly. 

I don't understand why once I compile, VSCode decides that the .ts file has a ton of errors. I mean, I get that it looks like there's duplicate functions and variables in the code, but can I get it to stop doing this?

##Primatives 

Use lowercase to avoid confusion with the javascript object

##Arrays/Objects

It's a lot easier to use comments in the code-along as notes. 

The object/array assingment shows more of what can be done with typescript.

Honestly typescript is just what javascript should've had to begin with.  

##Type Inference

It is not considered good practice to use explicit type declarations unnecessarily
The above line that relies on type inference is 'correct' as written.  

##Union Types

//Union types can be used to declare a variable that takes more than one type. No cap. 

##Aliases 
//This is to reduce redundant declarations

##Functions and Types

**TypeScript** is inferring the return of a number when we write code the adds to numbers.

**However** we can explicitly declare a return type after the statement, this could be useful to do exotic things.

_'Void'_ exists as a special return type.
Void means this function never returns. 


##Generics

Possibly aiding utility functions
Denoted by a 'generic identifier' often T in angle brackets: <T>

Tells TypeScript to essentially make a inference chain and that the type and that the generics match

Generics allow 'Type-Safe' yet flexible.

##*Classes and Interfaces*

I don't really understand why we have to declare types on both the class definitiopn **and** the constructor.

Okay nevermind, why didn't he just lead with the shorthand?

'private' is an explicit keyword to denote that the property may only be accessed by **class** methods.

constructor(

public firstName: string,

public lastName: string,

public age: number,

public courses: string[]

){}

Super cool constructor shorthand

Is the default public if left blank in shorthand constructor?  

student.courses;

With the courses property private, trying to access this produces an error.

student.listCourses();

This method does work because it's defined within the class to call courses property

##Working with Interfaces

Interface code will not be compiled to JavaScript

Interfaces can be implemented by classes

Use "implements" keyword to force class property

A class built from an implemented class can have properties in addition to the class _it_ was implemented from, but MUST contain all the properties of the class being interfaced

##Compiler Configuration 

npx tsc --init

initiates a typescript configuration file that allows untargeted compilation of typescript files within the filetree

has cool settings, like removeComments that you can uncomment to 

