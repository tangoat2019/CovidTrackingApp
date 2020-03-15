import React, {Component} from "react"
import * as actions from "../action/RouteAction"
import {connect} from "react-redux"
import {View, Text, Button} from "react-native"
// eslint-enable no-unused-vars

import {routeGate} from "./Route"

interface routeProps {
  booth?: string
  modifyBooth: any
}

interface routeState {
}

class SetUpViewModel extends Component <routeProps, routeState> {// eslint-disable-line require-jsdoc
    render() {
      return (<View>
         <Button 
          title="Setup"
          color="#f194ff"
          onPress = {()=>this.props.modifyBooth(routeGate.mainGate)} />
      </View>)
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

export default connect(mapStateToProps, mapDispatchToProps)(SetUpViewModel)
