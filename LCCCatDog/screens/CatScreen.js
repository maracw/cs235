import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

function CatScreen() {
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
    padding:20,
    flex:1,
  },
  imageContainer: {
    justifyContent: 'center',
    flex:1,
    width: '100%',
  },
  image: {
    flex: 1,
    // 6) set flex to take up all available space
    //...StyleSheet.absoluteFillObject,
  },
});

export default CatScreen;
