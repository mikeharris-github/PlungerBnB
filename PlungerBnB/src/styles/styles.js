import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 4,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  bottomDelivererContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  profileImage: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  profile: {
    marginLeft: 20,
    marginBottom: 50,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOpacity: .75,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  delivererProfile: {
    marginRight: 20,
    marginBottom: 50,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOpacity: .75,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  profileName: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginBottom: 30,
  },
  delivererName: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 30,
  }
});

export default styles;
