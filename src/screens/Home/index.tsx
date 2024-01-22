import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import CaretDown from "phosphor-react-native/src/icons/CaretDown";
import BellRinging from "phosphor-react-native/src/icons/BellRinging";

import Sun from '../../assets/01d.svg';
import Sun2 from '../../assets/02d.svg';

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
          <Text style={styles.infoTextUser}>Bom dia, David!</Text>
          <Sun width={200} height={200} />
          <Text style={styles.clima}>21°C</Text>
          <Text style={styles.maxMin}>Max.: 31°C | Min.: 25°C</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun2 width={40} height={40} />
            <Text style={styles.footerCardPreview}>19°C</Text>
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
    alignItems: 'center',
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
  },
  info: {
    paddingVertical: 70,
    alignItems: 'center',
    gap: 10,
  },
  infoTextUser: {
    fontSize: 32,
    fontWeight: '300',
    color: '#fff',
  },
  clima: {
    fontSize: 100,
    fontWeight: '300',
    color: '#fff',
  },
  maxMin: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  footer: {
    width: '100%',
    paddingLeft: 40,
    gap: 10,
  },
  footerText: {
    fontSize: 20,
    fontWeight: '300',
    color: '#fff',
  },
  footerCard: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: 99,
    height: 129,
    backgroundColor: 'rgba(255, 255, 255, 0.23)',
    borderRadius: 8,
  },
  footerCardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  footerCardPreview: {
    fontSize: 24,
    fontWeight: '300',
  }
});
