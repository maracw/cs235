## resources

How to start a reative native app from scratch
https://reactnative.dev/docs/environment-setup

Link to style props
https://reactnative.dev/docs/image-style-props

Link to core components/ primative elements
https://reactnative.dev/docs/components-and-apis

## state

import useState from React
state - tracks a single piece of state(data) -when it changes, something happens
use setter to set state to trigger the rerender

### defining state
what piece of datat is chamging in the app?
what type of data is it ( a list, a number, an object..)
what is the starting value

### managing user input to change state

#### example counter

#### example: name input
name of user that they type in an input box
name variable is a string
default is " " 

#### example blog posts
show a list of blog posts
go fetch a list of blog posts from a server when the app starts
a list
starts empty
when app starts go fetch the list, and fetch when user presses refresh button

### initialize piece of state
const [counter, setCounter] =useState(0);

array uses destructuring to create variable and a setter
