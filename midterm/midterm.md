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