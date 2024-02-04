# week3 ctf
RNBNode
: v20.11.0


RNBCL1
: pwd|ls|cd
RNBCL2
: touch|rm
RNBCL3
: mkdir|rm -r

RNBCL4
: .|..|~

All together
: pwd|ls|cd|touch|rm|mkdir|rm -r|.|..|~

RNBCurl
: Google


RNBClone
: rn-starter

RNBErr
: JSX

RNBBabel
: _ref

RNBProp
: , pets: 7
: flag is UMSPjrvdC

RNBDispVar
: <Text>I have {petCnt} pets.

RNBDispProp 
: 7wv3Xee3S

RNBDestruct (WRONG)
: d5S6RccrS for {name, age}

The code for this is

`const personInfo = {
  name: 'Brody',
  age: 28,
}

function displayNameAge( {name, age}
) {
  return `${name}: ${age}`
}`

RNBAboutScreen
: B8VEahnUm

RNBApp
: flag is 89fZKDGqy

RNBHomeScreen
: flag is EZx5SbJfP
### React notes

#### React and React-Native

These are different libriaries

#### What's a component

A function that returns some JSX

It has one return statement with JSX in it

The JSX must be inside a single element

#### four parts to set up a component

1. Import libraries we need to create component. Import the full React library and specific parts from React Native library.

2. Create a component - i.e. a function that returns JSX, or a const that is an arrow function

3. Create a stylesheet to style the component

4. Export the component so it can be used elsewhere inside the project

## React native basics

Text is a _primative component_, that means it is a built in component that we can use in the mobile app. Text just shows text to the user. Text _outside_ a Text component will result in an error.

Other primative components are (note the Capitialization)
- Image, shows an image
- View, used to group elements or styles
- Button, makes a button the user can press

We write in JSX, but Babel converts it into plain JS.

AppNavigator? Comes from React Navigation library.

Stylesheet.create? This function call will validate the style rule before trying to apply it. But you could also apply it directly inline. The error message is easier to read when you use the Stylesheet object.


## Lists and FlatList
Needs 2 props: the data (the array of objects) and renderItem (a function)
Works like mapping in regular React - use the FlatList instead
FlatList is a RN primative

when adding the render item
if you use element on its own you get 
renderItem(element) => {element === {item : {name : 'friend'}, index : 0}}

pull out the item with destructuring
renderItem({item}) => {item === {name : 'friend'}}

### It needs a KEY 
if list changes - RN will reload the whole list if no key
with key - only that element to be changed
important with long lists/ complex objects
improves performance with dynamic data

### how to add a KEY
add a key property to each list item
must be a UNIQUE STRING that is consistent i.e. key ='1', key ='2'

or
use keyExtractor prop
keyExtractor = {friend => {friend.name}}
the thing must also be unique string
### Horizontal scroll
use prop horizontal (word is equal to horizontal ={true})
and hide scrollbar
        showsHorizontalScrollIndicator={false}


## STYLES

instead of margin-bottom, use marginVertical
can't use em, can use %


## random JSX
can't use Text element to show an entire jsx object
you can also have variable that is a Text element
only one semicolon 

you can use 
return ( Some JSX tag )
or return JSX tag
NOT return followed by new line
return 
  SOME JSX