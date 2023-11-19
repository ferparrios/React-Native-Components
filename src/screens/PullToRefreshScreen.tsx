import React, {useContext, useState} from 'react';
import {ScrollView, View, RefreshControl, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets()
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3000);
  };
  const {theme: {colors, dividerColor, dark}} = useContext(ThemeContext)
  return (
    <ScrollView
    style={{
      marginTop: refreshing ? top : 0
    }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10} //solo android
          progressBackgroundColor={colors.primary}
          colors={[colors.text]} //solo android
          style={{backgroundColor: '#5856D6'}} //solo ios
          tintColor={dark ? 'white' : 'black'} //solo ios
          title='Refreshing'
          titleColor={'white'}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
