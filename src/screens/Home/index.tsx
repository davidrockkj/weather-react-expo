import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export function Home() {
  return (
    <LinearGradient
      colors={[
        "#292A4E",
        "#715c77",
        "#C75C2E",
      ]}
      style={styles.container}>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
