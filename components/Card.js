import React from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';

import styles,{DAVYS_GREY,PEARL_AQUA,RUSTY_RED} from "../styles";
import EyeIcon from "./EyeIcon";
import {hideOverflow} from "../utils/helpers";

export default class Card extends React.Component {
  state = {
    showingAnswer : false
  }

  toggleAnswer = () => {
    this.animatedDotSequence();
    this.setState( prevState => ({showingAnswer: !prevState.showingAnswer}))
  }

  determineSwipeConfig = (attempt, startValue, answer) => {
    return Animated.timing(
      startValue,
      {
        toValue: attempt === "correct" ? 400 : attempt === "incorrect" ? -400 : null,
        duration: attempt !== answer ? 1000 : 400
      }
    )
  }

  swipeCardAnimation = () => {
    const { attempted, answer } = this.props.item;
    const sequence = [
      this.determineSwipeConfig(attempted, this.x, answer),
      this.animatedDotSequence()
    ];
    Animated.parallel(sequence).start(() => this.props.removeAttemptedCard());
  }

  animatedDotSequence = () => {
    Animated.sequence([
      this.animatedDotOpacity(),
      this.animateDotScaleUp()
    ])
  }

  animatedDotOpacity(){
      Animated.timing(
        this.dotOpacity,
        {
          toValue: 1,
          duration:100
        }
      ).start()
  }

  animateDotScaleUp(){
      Animated.spring(
        this.dotScale,
        {
          toValue:90,
          tension:50,
          duration:600
        }
      ).start()
  }

  componentWillMount(){
    this.x = new Animated.Value(0);
    this.dotOpacity = new Animated.Value(0);
    this.dotScale = new Animated.Value(1);
    this.flip = new Animated.Value(0);
    this.fontScale = new Animated.Value(1);
  }

  componentDidUpdate() {
    this.props.item.attempted !== "" && 
    this.swipeCardAnimation();
  }

  render() {
    const {showingAnswer} = this.state;
    const {index, item} = this.props;
    const rotation = this.x.interpolate({
      inputRange: [0, 200],
      outputRange: ['0deg', '45deg']
    })
    const rotationAnimation = {transform: [{rotate: rotation}]};
    const scaleDotAnimation = {transform:[{scale:this.dotScale}]};
    const initialXAnimation = {left:this.x};
    const dynamicTopMarginStyle = { marginTop:(index+1)*8};
    const conditionallyHideOverflowStyle = item.attempted !== "" || showingAnswer ? hideOverflow() : null;
    const conditionallyJustifyCardContents = showingAnswer ? {justifyContent: 'flex-start'} : {justifyContent: 'center'}
    const conditionallySetDotAnimationColor = item.attempted !== item.answer && showingAnswer === true ? {opacity:1,backgroundColor:"grey"}
                                                : item.attempted === item.answer ? {backgroundColor:PEARL_AQUA}
                                                  : item.attempted !== item.answer ? {backgroundColor:RUSTY_RED} 
                                                    : null
    return (
      <Animated.View style={[styles.card, conditionallyJustifyCardContents, rotationAnimation, initialXAnimation, dynamicTopMarginStyle, conditionallyHideOverflowStyle]}>
        <Animated.Text style={[styles.question, item.attempted !== "" ? {color:"white",zIndex:2}:{color: DAVYS_GREY}]}>{this.props.item.question}</Animated.Text>
        {showingAnswer ? <Text>ANSWER</Text> : null}
        <TouchableOpacity style={styles.eyeButton} onPress={() => this.toggleAnswer()}>
          <EyeIcon />
        </TouchableOpacity>
        <Animated.View style={[styles.radialAnimationDot, scaleDotAnimation, conditionallySetDotAnimationColor ,{opacity:this.dotOpacity}]}/>
      </Animated.View>
    );
  }
}
