import React, {Component} from "react"
import * as actions from "../action/RouteAction"
import {connect} from "react-redux"
import {View, Button} from "react-native"
// eslint-enable no-unused-vars

import {routeGate} from "./Route"

interface routeProps {
  modifyBooth: any
}

interface routeState {
}

class GuideViewModel extends Component <routeProps, routeState> {// eslint-disable-line require-jsdoc
    render() {
        console.log(routeGate)
      return (<View>
          <Button 
          title="Press me"
          color="#f194ff"
          onPress = {()=>this.props.modifyBooth(routeGate.setUpGate)}/>
      </View>)
    }
}

const mapStateToProps = (state, ownProps) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyBooth: (booth: string) => {
      dispatch(actions.modifyBooth(booth))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuideViewModel)
