import React, { Component } from "react"
import * as actions from "../action/RouteAction"
import { connect } from "react-redux"
// eslint-enable no-unused-vars
import RNLocation from "react-native-location"
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

RNLocation.configure({
  distanceFilter: 100,
  desiredAccuracy: {
    ios: "threeKilometers",
    android: "lowPower"
  }
})

interface routeProps {
  booth?: string
  modifyBooth: any
  locationSubscription?: any
}

interface routeState {
}

class MainViewModel extends Component<routeProps, routeState> {// eslint-disable-line require-jsdoc
  componentDidMount() {
    RNLocation.requestPermission({
      ios: "always",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
      if (granted) {
        RNLocation.subscribeToLocationUpdates(locations => {
          console.log(locations)
        })
      }
    })
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.route.booth)
  return {
    booth: state.route.booth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyBooth: (booth) => {
      dispatch(actions.modifyBooth(booth))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewModel)
