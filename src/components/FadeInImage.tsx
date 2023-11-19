import React, {useState} from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {ActivityIndicator, Animated, ImageStyle, StyleProp, View} from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({uri, style}: Props) => {
  const {fadeIn, opacity} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => {
    setIsLoading(false)
    fadeIn()
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator
          color="#5856D6"
          size={30}
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          ...style as any,
          opacity
        }}
      />
    </View>
  );
};
