import React, {Component} from "react"
import * as actions from "../action/RouteAction"
import {connect} from "react-redux"
import {View, Text} from "react-native"
// eslint-enable no-unused-vars

import GuideViewModel from "./Guide"
import SetUpViewModel from "./SetUp"
import MainViewModel from "./Main"

interface routeProps {
  booth?: string
  modifyBooth: any
}

interface routeState {
}

export var routeGate = {
  guideGate: "GUIDE",
  setUpGate: "SETUP",
  mainGate: "MAIN"
}

class RouteViewModel extends Component <routeProps, routeState> {// eslint-disable-line require-jsdoc
    calculateView = () => {
      switch (this.props.booth) {// eslint-disable-line no-invalid-this
        case (routeGate.guideGate):
          return <GuideViewModel/>
        case (routeGate.setUpGate):
          return <SetUpViewModel/>
        case (routeGate.mainGate):
          return <MainViewModel/>
        default:
          return notFoundView
      }
    }
    // eslint-disable-next-line require-jsdoc
    render() {
      return (this.calculateView())
    }
}

const mapStateToProps = (state, ownProps) => {
  console.log("booth o " + state.route.booth)
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

const notFoundView = <View><Text>Not found view</Text></View>

export default connect(mapStateToProps, mapDispatchToProps)(RouteViewModel)
