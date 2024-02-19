import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

function DogScreen() {
  const [catImage, setCatImage] = useState(null);

  const fetchCatImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCatImage(data[0].url);
        }
      })
      .catch((error) => {
        console.error('Error fetching cat image:', error);
      });
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {catImage && (
          <Image source={{ uri: catImage }} style={styles.image} resizeMode="contain" />
        )}
        <Button title="Load New Cat" onPress={fetchCatImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // 1) set flex to take up all available space
    // 2) set padding to 20
  },
  imageContainer: {
    // 3) set flex to take up all available space
    // 4) set width to be 100%
    // 5) center content vertically
  },
  image: {
    // 6) set flex to take up all available space
  },
});

export default DogScreen;
