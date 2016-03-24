'use strict';

var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'map';
var {
  AppRegistry,
  StyleSheet,
  View,
  Text
} = React;

var map = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {
      center: {
        latitude: 47.38,
        longitude: 8.54
      },
      zoom: 13
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <Mapbox
          style={styles.container}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          ref={mapRef}
          accessToken={'your-mapbox.com-access-token'}
          styleURL={'https://raw.githubusercontent.com/osm2vectortiles/osm2vectortiles/gh-pages/styles/bright-v8.json'}
          centerCoordinate={this.state.center}
          zoomLevel={this.state.zoom}
          logoIsHidden={true}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('map', () => map);
