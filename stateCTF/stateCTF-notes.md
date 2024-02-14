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


## More on style vs props
Some components have PROPS that control appearance, like color for Button, backgroundColor for View

## color in RN

can make a view with a set height and width and then add a backgroundColor property with an RGB value

for color app - make a siece of state that will be an array of strings with rgb values

# CTF Answers


RNSApp flag is Ams5tfwN5


## set color functions

### reducers - like state kind of...

like a useEffect.. kind of.. it watches for a state change AND when the state changes - it calls a special function (called a reducer) to handle what happens next, When you call a reducer function  you use dispatch (kind of like a setter). YOu can name the reduce function anything you want, but dispatch needs to be the same. AND reducer is a good default name to use
When you call dispatch you send a set of key value pairs (like properties) that can be used by the reducer function

standard names for properties sent to reducer is type and payload