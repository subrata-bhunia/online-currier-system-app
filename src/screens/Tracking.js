import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Colors, Sizes } from '../constants/constants';
import SearchBar from 'react-native-dynamic-search-bar';
import { useState,useEffect } from 'react';
import {Card } from 'react-native-elements';
import axios from 'axios';


const OrderDetails=({order_id ,tracking_id,order_weight,order_type,order_price,order_status,sender_name,sender_state,sender_address,sender_mobileno,reciver_name,reciver_state,reciver_address,reciver_mobileno})=>{
    const [status,setStatus]=useState("pending");
    return(
        <View>
            <Card containerStyle={[styles.CARD,{
                backgroundColor: status === 'canceled' ? "#f00" : "#eee"
            }]}>
                {/* Order Details */}
                <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                    ~~~~~Order Details~~~~~
                </Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",margin:20}}>
                    <View>
                        <Text>
                            Order Id : {order_id}
                        </Text>
                        <Text>
                            Tracking Id : {tracking_id}
                        </Text>
                        <Text>
                            Order Weight : {order_weight}
                        </Text>
                        <Text>
                            Order Type : {order_type}
                        </Text>
                        <Text>
                            Order Price : {order_price} /-
                        </Text>
                    </View>
                    <View style={{borderRadius:30,height:100,width:100,backgroundColor:"#0F0",justifyContent:"center"}}>
                        <Text style={{fontWeight:"bold",textAlign:"center",transform:[{rotate:"-30deg"}],fontSize:20}}>
                            {order_status}
                        </Text>
                    </View>
                </View>
                {/* Sender Details */}
                <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                    ~~~~~Sender Details~~~~~
                </Text>
                <View style={{margin:20}}>
                    <Text>
                        Name : {sender_name}
                    </Text>
                    <Text>
                        Address : {sender_address},{sender_state}
                    </Text>
                    <Text>
                        Mobile No : {sender_mobileno}
                    </Text>
                </View>
                {/* Reciver Details */}
                <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                    ~~~~~Reciver Details~~~~~
                </Text>
                <View style={{margin:20}}>
                    <Text>
                        Name : {reciver_name}
                    </Text>
                    <Text>
                        Address : {reciver_address},{reciver_state}
                    </Text>
                    <Text>
                        Mobile No : {reciver_mobileno}
                    </Text>
                </View>
            </Card>
        </View>
    )
}


const API_URL ="http://10.0.2.2:3001/"
const Tracking=()=>{
    const [dynamic_placeholder,setPlaceHolder]=useState("order id");
    const [spiner,setSpiner]=useState(false)
    const [id,setId]=useState("");
    const PlaceHolderChange=({name})=>{
        setPlaceHolder(name)
    }
    const [order,setOrder]=useState([]);

    const SearchByOrderId=({order_id})=>{
        axios({
            method:"GET",
            url:API_URL+"order_id/"+`${order_id}`
        }).then(res=>{setOrder(res.data.length === 0 ? [] : res.data[0]),setSpiner(false)})
        .catch(err=>console.log(err))
    };
    const SearchByTrackingId=({tracking_id})=>{
        axios({
            method:"GET",
            url:API_URL+"tracking_id/"+`${tracking_id}`
        }).then(res=>{setOrder(res.data.length === 0 ? [] : res.data[0]),setSpiner(false)})
        .catch(err=>console.log(err))
    };
    // console.log("orderID==========>",id)
    return(
        <View style={styles.Main}>
            {/* <GreetinngsMsg /> */}
            <View style={{alignSelf:"center",justifyContent:"center"}}>
                <Text style={{textAlign:"center"}}>
                    What you Have ? (Order Id or Tracking Id)
                </Text>
                <View
                 style={{flexDirection:"row",alignSelf:"center",justifyContent:"space-between",width:Sizes.screenWidth/1.8,marginTop:10}}>
                    <TouchableOpacity style={styles.BUTTON} onPress={()=>PlaceHolderChange({name:"order id"})}>
                        <Text style={{fontSize:20}}>
                            Order Id
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BUTTON} onPress={()=>PlaceHolderChange({name:"tracking id"})}>
                        <Text style={{fontSize:20}}>
                            Tracking Id
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20}}>
                <SearchBar
                    placeholder={`Enter your ${dynamic_placeholder}`}
                    onChangeText={(text) =>{setId(text),setSpiner(true)}}
                    onSearchPress={() => console.log("Search Icon is pressed")}
                    spinnerVisibility={spiner}
                    spinnerColor={Colors.cardColor}
                    spinnerSize={30}
                    spinnerType="Wave"
                    style={{
                        backgroundColor:"#999",
                        elevation:5
                    }}
                />
                <View>
                    {
                        dynamic_placeholder === "order id" ? (
                            <TouchableOpacity
                                style={{
                                    padding:10,
                                    backgroundColor:Colors.accent3,
                                    alignSelf:"center",
                                    width:Sizes.screenWidth/3,
                                    alignItems:"center",
                                    borderRadius:10,
                                    marginTop:20
                                }}
                                activeOpacity={0.5}
                                onPress={()=>SearchByOrderId({order_id:id})}
                                >
                                    <Text style={{fontSize:18,color:Colors.backColor,fontWeight:"bold"}}>Search</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={{
                                    padding:10,
                                    backgroundColor:Colors.accent3,
                                    alignSelf:"center",
                                    width:Sizes.screenWidth/3,
                                    alignItems:"center",
                                    borderRadius:10,
                                    marginTop:20
                                }}
                                activeOpacity={0.5}
                                onPress={()=>SearchByTrackingId({tracking_id:id})}
                                >
                                    <Text style={{fontSize:18,color:Colors.backColor,fontWeight:"bold"}}>Search</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

                </View>
            </View>
            {
                order.length === 0 || undefined ? null : (
                    <OrderDetails
                        order_id={order[0]}
                        tracking_id={order[1]}
                        order_weight={order[2]}
                        order_type={order[3]}
                        order_price={order[4]}
                        order_status={order[5]}
                        sender_name={order[6]}
                        sender_state={order[7]}
                        sender_address={order[8]}
                        sender_mobileno={order[9]}
                        reciver_name={order[10]}
                        reciver_state={order[11]}
                        reciver_address={order[12]}
                        reciver_mobileno={order[13]}
                     />
                )
            }
        </View>
    )
}
const styles=StyleSheet.create({
    Main:{
        backgroundColor:Colors.backColor,
        padding:Sizes.mainPadding,
        flex:1,
    },
    GREETINGS:{
        fontSize:Sizes.fontSize+15,
        fontWeight:"bold",
        fontFamily:"cursive"
    },
    BUTTON:{
        backgroundColor:Colors.cardColor,
        padding:10,
        borderRadius:10,
        elevation:5
    },
    CARD:{
        borderRadius:20,
        height:Sizes.screenHeiht/1.8,
        elevation:3
    }
})
export default Tracking;