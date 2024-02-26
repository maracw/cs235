## Layout Systems
Box object Model - used to position single element
Flexbox- used to position group of elements in relation to parent
Position - powerful override 

### padding, margin etc
margin : all sides
marginHorizontal/ marginVertical
margin


### flexbox

#### alignItems
set on PARENT element
alignItems
stretch is default 

flex-start - will get as close to left side
center - will center
flex-end - righthand side

#### flexDirection
set on PARENT
flexDirection - default is column (for a phone) vertical
when flexDirection is row - THEN alignItems controls vertical space
when flex direction is row - strech will work vertically

#### justify content
Does the opposite of align items


### child properties

#### flex
this is flex grow/ shrink
choices are 1 for take up as much space as possible
multiple items can have flex 1 - will share available space

can use numbers to split the space into percentages
flex: 2 -> 20%
Flex:4 ->40%
flex: 4 ->40%

#### align-self
will override align-items value on parent element

## position
default is position relative
change to absolute will pull it out of order
but will also follow some align-items/ flexbox properties
BUT will not stretch

### top right bottom left
top etc will add space to element after the rest of the page is layed out
WEIRDLY you don't have to set a position - you can use t/b/l/r without position (position will be relative)

filling up a parent element
set position absolute
AND top etc to 0

     position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    instead of this 
    ...StyleSheet.absoluteFillObject


How it decides
boxModel first
1. then position absolute - some flexbox added
2. then top/left/right/bottom

if no position set
flexbox
then top/left/right/bottom

## CTF
RNLBox1
box1|10|30|20

RNLBox2
box2|marginHorizontal|paddingVertical|0|20
-incorrect likely 3rd answer

marginHorizontal|paddingVertical|0|20

Flag RNLPos1 
box2|absolute|30|20
correct

Flag RNLPos2 
box2|relative|0|0

box2|relative|30|20
-needs email

RNLFlexBox1
answer is row - BUT the RN code is not showing that


justifyContent|flex-end|center|space-around|space-between|space-evenly


justifyContent|flex-end|justifyContent|center|justifyContent|space-around|justifyContent|space-between|justifyContent|space-evenly

FlexBox3
alignItems|flex-start|flex-end|center

Flex4
box2|alignSelf|flex-end

RNLApp

school|tabBarActiveTintColor|tomato|tabBarInactiveTintColor|gray

Cat flag
D25jW1V07