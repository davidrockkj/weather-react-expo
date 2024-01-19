import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import CaretDown from "phosphor-react-native/src/icons/CaretDown";

export function Home() {
  return (
    <LinearGradient
      colors={[
        "#292A4E",
        "#715c77",
        "#C75C2E",
      ]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color='#fff' size={32} />
            <Text>Petrolina</Text>
            <CaretDown color='#fff' size={32} />
          </View>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 35,
    paddingTop: 40,
  },
  header: {

  },
  headerLeft: {
    
  },
});
