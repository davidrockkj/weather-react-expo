import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import CaretDown from "phosphor-react-native/src/icons/CaretDown";
import BellRinging from "phosphor-react-native/src/icons/BellRinging";

import Sun from '../../assets/01d.svg';

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
            <MapPin color='#fff' size={25} />
            <Text style={styles.headerLeftText}>Petrolina</Text>
            <CaretDown color='#fff' size={25} />
          </View>
          <BellRinging color='#fff' size={25} />
        </View>

        <View style={styles.info}>
          <Text>Bom dia, David!</Text>
          <Sun />
          <Text>21°C</Text>
          <Text>Max.: 31°C | Min.: 25°C</Text>
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
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 10,
  },
  headerLeftText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "600",
  }
});
