import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { ArrowLeft, MoreVertical, Users, Star } from 'lucide-react-native';

export default function BookingScreen() {
  const bookings = [
    {
      id: 1,
      title: 'Three Bedded Room',
      rating: 4.5,
      price: '₹2,200',
      guests: '2 Guests (1 Room)',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Three Bedded Room',
      rating: 4.5,
      price: '₹2,200',
      guests: '2 Guests (1 Room)',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Three Bedded Room',
      rating: 4.5,
      price: '₹2,200',
      guests: '2 Guests (1 Room)',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking</Text>
        <TouchableOpacity>
          <MoreVertical size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.filterSection}>
        <View style={styles.filterRow}>
          <Text style={styles.filterLabel}>📅 Check-In  Date - Check-Out  Date</Text>
        </View>
        <View style={styles.guestRow}>
          <Text style={styles.guestText}>2 Guest · 2 Adult · 0 Children</Text>
        </View>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText}>Check Availability</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.bookingsList} showsVerticalScrollIndicator={false}>
        {bookings.map((booking) => (
          <TouchableOpacity key={booking.id} style={styles.bookingCard}>
            <Image
              source={{ uri: booking.image }}
              style={styles.bookingImage}
            />
            <View style={styles.bookingInfo}>
              <View style={styles.titleRow}>
                <Text style={styles.bookingTitle}>{booking.title}</Text>
                <View style={styles.ratingBadge}>
                  <Star size={14} color="#f59e0b" fill="#f59e0b" />
                  <Text style={styles.rating}>{booking.rating}</Text>
                </View>
              </View>
              <Text style={styles.price}>{booking.price}/Per night</Text>
              <View style={styles.guestInfo}>
                <Users size={16} color="#6b7280" />
                <Text style={styles.guestType}>Guest</Text>
                <Text style={styles.guestCount}>{booking.guests}</Text>
              </View>
              <View style={styles.amenities}>
                <Text style={styles.amenityIcon}>🛏️</Text>
                <Text style={styles.amenityIcon}>📺</Text>
                <Text style={styles.amenityIcon}>🚿</Text>
                <Text style={styles.amenityIcon}>🔑</Text>
                <Text style={styles.amenityIcon}>✓</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  filterSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterRow: {
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  guestRow: {
    marginBottom: 12,
  },
  guestText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  checkButton: {
    backgroundColor: '#0f4c8b',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  bookingsList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bookingCard: {
    flexDirection: 'row',
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  bookingImage: {
    width: 100,
    height: 120,
    backgroundColor: '#e5e7eb',
  },
  bookingInfo: {
    flex: 1,
    padding: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bookingTitle: {
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  rating: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000',
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f4c8b',
    marginBottom: 8,
  },
  guestInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  guestType: {
    fontSize: 12,
    color: '#6b7280',
  },
  guestCount: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
  amenities: {
    flexDirection: 'row',
    gap: 8,
  },
  amenityIcon: {
    fontSize: 14,
  },
});
