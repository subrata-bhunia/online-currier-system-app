import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import { Colors, Sizes } from '../constants/constants';
import { CustomHeader } from './Home';
import { API_URL } from './Tracking';

const Admin =()=>{
    const [allOrder,setAllOrder]=useState([]);
    const [orderId,setOrderId]=useState("");
    const [orderStatus,setOrderStatus]=useState("");


    // --------------------ALL ORDERS IDS------------------------- //
    const GetAllOrdersIds= async()=>{
       await axios({
            method:"GET",
            url:API_URL+"allOrders"
        }).then((res)=>setAllOrder(res.data.length === 0 ? [] : res.data))
        .catch((err)=>console.log(err))
    };
    // ----------------------------UPDATE DATABASE-------------------------------- //
    const UpadateDataBase=({order_id,order_status})=>{
        axios({
            method:"GET",
            url:API_URL+"update/"+order_id+"/"+order_status
        }).then((res)=>{
            res.data.rowsAffected === 0 ? (
                alert("Something went wrong. Please Check 😒")
            ) : (
                alert("Order Successfully Update 👌")
            )
        })
        .catch((err)=>console.log("err====>",err))
    }
    useEffect(()=>{
        GetAllOrdersIds();   
    },[]);
    // console.log(allOrder);
    // -----------------Order Status Array---------------------------------- //
    const OrderStatusArr=[
        {
            label:"Select Status",
            value:""
        },
        {
            label:"Pending",
            value:"Pending"
        },
        {
            label:"Picked UP",
            value:"Picked UP"
        },
        {
            label:"Dispatch",
            value:"Dispatch"
        },
        {
            label:"Shiped",
            value:"Shiped"
        },
        {
            label:"Out for Delivary",
            value:"Out for Delivary"
        },
        {
            label:"Delivered",
            value:"Delivered"
        },

    ]
    return(
        <View>
            <CustomHeader />
            <View style={{padding:10,borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:Colors.backColor,marginTop:-30,height:Sizes.screenHeiht}}>
                <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold"}}>
                    Admin Panel
                </Text>
                    <View style={{marginHorizontal:10,marginVertical:10}}>
                        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>
                            Order Id
                        </Text>
                        <View style={{backgroundColor:"#eee",borderRadius:30}}>
                            <Picker
                                selectedValue={orderId}
                                prompt="Select Order"
                                onValueChange={(itemValue, itemIndex) =>
                                    setOrderId(itemValue)
                                }
                                >
                                    <Picker.Item value="" label="Select Order Id" />
                                    {
                                        allOrder.map((arr,ind)=>{
                                            return(
                                                <Picker.Item key={ind} value={arr[0]} label={arr[0]} />
                                            )
                                        })
                                    }
                            </Picker>
                        </View>
                    </View>
                    <View style={{marginHorizontal:10,marginVertical:10}}>
                        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>
                            Order Status
                        </Text>
                        <View style={{backgroundColor:"#eee",borderRadius:30}}>
                            <Picker
                                selectedValue={orderStatus}
                                prompt="Select Order"
                                onValueChange={(itemValue, itemIndex) =>
                                    setOrderStatus(itemValue)
                                }
                                >
                                    {
                                        OrderStatusArr.map((itt,ind)=>{
                                            return(
                                                <Picker.Item key={ind} label={itt.label} value={itt.value} />
                                            )
                                        })
                                    }
                            </Picker>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            padding:10,
                            backgroundColor:Colors.accent3,
                            alignSelf:"center",
                            width:Sizes.screenWidth/3,
                            alignItems:"center",
                            borderRadius:10,marginVertical:10
                        }}
                        activeOpacity={0.5}
                        // onPress={()=>{AlertMass(),console.log(sendDataBody),OrderPlace()}}
                        // onPress={()=>{OrderPlace(),AlertMass()}}
                        onPress={()=>UpadateDataBase({
                            order_id:orderId,
                            order_status:orderStatus
                        })}
                        >
                            <Text style={{fontSize:18,color:Colors.backColor,fontWeight:"bold"}}>Update</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}


export default Admin ;