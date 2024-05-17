import { Image, Text} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          className="h-44 w-72 absolute left-0 bottom-0"
        />
      }>
        <Text className="text-white">
            some data
        </Text>

    </ParallaxScrollView>
  );
}
