import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMoving} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity: opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMoving(-100);
        }}
        color={colors.primary}
      />

      <Button title="Fade Out" onPress={fadeOut} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    // backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
