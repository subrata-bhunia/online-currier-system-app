import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import { Colors, Sizes } from '../constants/constants';
import SearchBar from 'react-native-dynamic-search-bar';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AVA_AREA_LIST from '../Data/AVA_AREA_LIST';

// -----------------//



const CustomHeader=()=>{
    return(
        <View style={styles.CustomHeader}>
            <Text style={styles.GREETINGS}>
                Hi,{"\n"}Welcome{"\n"} To{"\n"} Online Curier System
            </Text>
        </View>
    )
}
// ============== //
const Home =()=>{
    const navigation=useNavigation();
    return(
        <View style={{backgroundColor:Colors.backColor,flex:1}}>
            <ScrollView>
            <CustomHeader />
            <View style={{padding:10,borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:Colors.backColor,marginTop:-30}}>
                <Text style={{marginTop:30,fontSize:18,fontStyle:"italic"}}>
                    What are you looking for today ?
                </Text>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
                    <TouchableOpacity style={{alignItems:"center",elevation:6}} onPress={()=>navigation.navigate("Product")}>
                        <Icon name="package" type="octicon" reverse size={30} style={{elevation:6}} color={Colors.accent3} />
                        <Text>
                            Send Package
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center",elevation:6}} onPress={()=>navigation.navigate("Tracking")}>
                        <Icon name="search-location" type="font-awesome-5" reverse size={30} color={Colors.accent3}/>
                        <Text>
                            Track Package
                        </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{alignItems:"center",elevation:6}} onPress={()=>navigation.navigate("CheckPrice")}>
                        <Icon name="text-box-search-outline" type="material-community" reverse size={30} color={Colors.accent3}/>
                        <Text>
                            Check Price
                        </Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            <View style={{marginTop:20,padding:10}}>
                <Text>
                     Available State's 
                </Text>
                <View style={{flexDirection:"row",flexWrap:'wrap'}}>
                {
                    AVA_AREA_LIST.map((item,ind)=>{
                        return(
                            <View key={ind} style={{backgroundColor:Colors.accent1,margin:3,padding:7,borderRadius:10,elevation:5}}>
                                <Text style={{fontSize:15,color:Colors.backColor}}>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    })
                }
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    GREETINGS:{
        fontSize:Sizes.fontSize+15,
        fontWeight:"bold",
        fontFamily:"cursive",
        color:Colors.backColor
    },
    CustomHeader:{
        height:Dimensions.get("window").height/3,
        backgroundColor:Colors.accent3,
        padding:10,
        justifyContent:"center",
    }
})
export default Home;