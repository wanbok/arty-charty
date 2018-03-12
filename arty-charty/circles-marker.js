import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import Svg,{
    Defs,
    G,
    LinearGradient,
    Path,
    Stop
} from 'react-native-svg';
import {Spring, EasingFunctions} from '../timing-functions';
import {lightenColor, Tweener, makeCircle} from '.';

const MARKER_RADIUS = 5;

class CirclesMarker extends Component {
  constructor(props) {
    super(props);
  }

  _makeMarker(cx, cy) {
    let baseColor = this.props.baseColor || 'rgba(0,255,0,.75)'
    let currentColor = this.props.active ? lightenColor(baseColor, .3) : baseColor
    return (
      <G>
        <Path
          d={makeCircle(cx, cy, MARKER_RADIUS)}
          fill={currentColor}
        />
      </G>
    );
  }

  render() {
      return this._makeMarker(this.props.cx, this.props.cy);
  }
}

export default CirclesMarker;
