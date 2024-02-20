import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { FlatList, View, Animated, StyleSheet, Dimensions } from "react-native";
import OnBordingItem from "./onBoardingItem";
import slides from "./list/slides";
import Paginator from "./paginator";
import HeaderStyle from "./headerStyle/style";
import BottomButton from "./bottomButton";

const { width, height } = Dimensions.get('screen');

const OnBording = (props) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideref = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  
    const scrollToNext = () => {
        currentIndex<slides.length-1?
            slideref.current.scrollToIndex({index: currentIndex + 1})
        :console.warn('last index')
    }
  
    const scrollToPrevious = () => {
        currentIndex>0?
            slideref.current.scrollToIndex({index: currentIndex - 1})
        :console.warn('first index')
    }

    return (
        <View style={styles.container}>
            <View>
                <HeaderStyle/>
                <FlatList style={{marginTop:-(height*0.5),zIndex:1}} 
                    data={slides} renderItem={({ item }) => <OnBordingItem item={item} />}

                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slideref}
                />
                    
                <Paginator data = {slides} scrollX={scrollX}/>
              
               <BottomButton scrollToNext={scrollToNext} 
                    scrollToPrevious={scrollToPrevious} 
                    currentIndex={currentIndex} props={props}/>

            </View>
            
        </View>
    )
}


export default OnBording;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
   
   
})






