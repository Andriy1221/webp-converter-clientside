# webp-converter-clientside

A handy and light-weight library for converting images to webp.

## How to use

### Import the package:

`import convertToWebp from "webp-converter-clientside";`

### Use the convertToWebp function

1. Provide a file as the first argument of the function (type File)
2. Provide the desired quality as the second argument of the function.  
   Possible values range from 0 to 1 with 0.1 increments (e.g. 0.7 or 0.5)

## Code example:

Using .then:  
`convertToWebp(file, 0.7).then(res => console.log(res)`

Using async/await:  
`const convertedFile = await convertToWebp(file, 0.7)`
