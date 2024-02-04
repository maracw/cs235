Make an ImageScreen and hook upo to home
Make a components directory
Add ImageDetail

Adding the Images
bring in images to assets
import Image RN primative
Image uses 'source' not 'src'
This is the syntax 
  <Image source={require('../../assets/beach.jpg')}></Image>

When passing as a prop it needs to look like 
imageSource = {require('../../assets/forest.jpg')}

Why can't I send the unique file name and build the path dynamically?

## starting from scratch
I want to not have the existing git repo
I copied files from starter project 
- with the whole folder the git is present
-so I deleted it and made an App.js, and copied in app.json, package.json, and the babel.config files
-I mage a src folder with a screens subfolder
-then I created a new home screen
-I copied the guts of the start App.js and modfied it so it only references the HomeScreen
- I added each file using git add and didn't run into the warnings

### npm install first
-took a few tries to remember that I need to be in my project folder and run npm install --legacy-peer-deps
-that made the package-lock file and the node modules folder
-then I ran npm audit fix --force to fix things

#### pause for git problems
-accidentally forgot that I need a gitignore file and added everything which added ALL the node modules
- did not commit this 
-added a .gitignore to cs235 folder
-but had to figure out how remove the modules
  -- cd into midterm
  -- ran 'git rm -r --cached node_modules'
  -- did a git add/ git status
  -- commit and push

## back to install process
tried to use 'npm start'
-'This command requires Expo CLI.
Do you want to install it globally [Y/n]? Y
Installing the package 'expo-cli'...'
- Installing Expo CLI failed. You can install it manually with:
  npm install --global expo-cli

tried npm install --global expo-cli
-fails
-ran in regular terminal window with sudo command
-installed, with lots of depecated warnings
-ran npm start - got BIG warning about the deprecated package
-this is when I remember that my node.js on the mac is old..

-updated node.js
-ran into the expo error that Dr.M mentions
-followed directions
To resolve this issue, I updated the project on my computer to Expo 49 by running the two commands below inside the application folder (i.e., inside rn-starter).

  npm install expo@49
  npx expo install --fix


### Progress
finished app set up and git set up
finished first button on Home screen - unsure of directions
next ste is HikeDetail component