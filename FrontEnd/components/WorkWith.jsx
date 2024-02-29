import React, { useRef, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';
import Universities from './Universities';
import Individuals from './Individuals';
import Government from './Government';

const WorkWith = () => {
    const scrollViewRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward

    const scrollToPage = (page) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: page * SIZES.width, animated: true });
        }
    };

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newPage = Math.floor(contentOffsetX / SIZES.width);
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            let nextPage = currentPage + scrollDirection;
            if (nextPage >= 3) {
                nextPage = 0;
            } else if (nextPage < 0) {
                nextPage = 2; 
            }
            scrollToPage(nextPage);
            setCurrentPage(nextPage);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentPage, scrollDirection]);

    return (
        <View style={styles.firstContainer}>
            <View style={styles.deco1}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.innerDeco1}></View>
                    <Text style={styles.work}>WHO WE WORK WITH</Text>
                </View>
            </View>

            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16} 
                style={{ zIndex: 1, marginTop: -45}}
            >
                 <View style={{ width: SIZES.width }}>
                    <Individuals />
                </View>
                
                <View style={{ width: SIZES.width}}>
                    <Universities />
                </View>
               
                <View style={{ width: SIZES.width }}>
                    <Government />
                </View>
            </ScrollView>

            <View style={styles.deco}>
                <View style={styles.innerDeco}></View>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');
const isBigScreen = width >= 1050;
const styles = StyleSheet.create({
    firstContainer: {
        backgroundColor: COLORS.primary,
        padding: 20,
        width: isBigScreen ? SIZES.width * 0.8 : '100%', 
        marginHorizontal:"auto",
        height: 350
    },
    deco1: {
        backgroundColor: COLORS.red,
        height: 100,
        width: 50,
        marginLeft: -20,
        borderBottomRightRadius: 999,
        borderTopRightRadius: 999,
    },
    innerDeco1: {
        backgroundColor: COLORS.primary,
        height: 80,
        width: 40,
        borderBottomRightRadius: 999,
        borderTopRightRadius: 999,
        marginTop: 10
    },
    work: {
        width: SIZES.width * 0.83,
        height: 30,
        textAlign: "center",
        color: COLORS.secondary,
        fontSize: 20,
        fontFamily: 'bold',
        marginTop: 20
    },
    deco: {
        backgroundColor: COLORS.red,
        height: 100,
        alignSelf: 'flex-end',
        marginRight: -20,
        borderBottomLeftRadius: 999,
        borderTopLeftRadius: 999,
        marginTop: -70,
    },
    innerDeco: {
        backgroundColor: COLORS.primary,
        height: 80,
        width: 40,
        marginLeft: 10,
        borderBottomLeftRadius: 999,
        borderTopLeftRadius: 999,
        marginTop: 10
    },
});

export default WorkWith;
