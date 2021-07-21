import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import { Colors, Sizes } from '../constants/constants';
import { Card } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import AVA_AREA_LIST from '../Data/AVA_AREA_LIST';

const Product=()=>{
    // ----------SENDER DETAILS-------------- //
    const [sender_state,setSenderState]=useState("Select You State");
    const [sender_Name,setSenderName]=useState("");
    const [sender_Add,setSenderAdd]=useState("");
    const [sender_Mob,setSenderMob]=useState("");
    const [sender_Email,setSenderemail]=useState("");
    // ------------------------ORDER DETAILS------------------------- //
    const [price,setPrice]=useState(getRandomInt(999));
    const [orderid,setOrderId]=useState(getRandomInt(999999));
    const [tracking_id,setTrackingId]=useState(getRandomInt(999999));
    const [order_weight,setOrderWeight]=useState("");
    const [order_type,setOrderType]=useState("");
    // ---------------------RECIVER DETAILS------------------------ //
    const [reciver_state,setreciverState]=useState("Select You State");
    const [reciver_Name,setreciverName]=useState("");
    const [reciver_Add,setreciverAdd]=useState("");
    const [reciver_Mob,setreciverMob]=useState("");
    const [reciver_Email,setreciveremail]=useState("");

    // -------------------------DATA--------------------------- //
    const AlertMass=()=>{
        Alert.alert(
            `Please note your order id :${orderid} and your tracking id ${tracking_id} `
        )
    }
    // ----------------Random IDs------------------ //
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
      }

    //   useEffect(()=>{
    //   },[1000])
    return(
        <View style={{flex:1,backgroundColor:Colors.backColor,padding:10}}>
        <ScrollView >
            <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center",marginVertical:20}}>
                Sender Details
            </Text>
            <View>
                <Text>Sender Name</Text>
                <TextInput
                 placeholder="Enter Your Name"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee"}}
                 onChangeText={text=>setSenderName(text)}
                 />
            </View>
            <View>
                <Text>
                    Select Your State
                </Text>
                <View style={{backgroundColor:"#eee",borderRadius:30}}>
                        <Picker
                            selectedValue={sender_state}
                            prompt="Select Your State"
                            onValueChange={(itemValue, itemIndex) =>
                                setSenderState(itemValue)
                            }
                            >
                            {
                                AVA_AREA_LIST.map((item,ind)=>{
                                    return <Picker.Item key={ind} label={item.name} value={item.abbreviation}  />
                                })
                            }
                        </Picker>
                    </View>
            </View>
            <View>
                <Text>Address</Text>
                <TextInput
                 placeholder="Enter Pickup Point"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",height:90}}
                 multiline
                 onChangeText={text=>setSenderAdd(text)}
                 />
            </View>
            <View>
                <Text>Sender Email address</Text>
                <TextInput
                 placeholder="Enter Email Address"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",}}
                 keyboardType="email-address"
                 onChangeText={text=>setSenderemail(text)}
                 />
            </View>
            <View>
                <Text>Sender Mobile No</Text>
                <TextInput
                 placeholder="Enter Mobile No"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",}}
                 keyboardType="number-pad"
                 onChangeText={text=>{setSenderMob(text)}}
                 />
            </View>
            <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center",marginVertical:20}}>
                Order Details
            </Text>
            <View>
                <Text>Order Id</Text>
                <View style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",height:50,justifyContent:"center"}}>
                    <Text>
                        {orderid}
                    </Text>
                </View>
            </View>
            <View>
                <Text>Tracking Id</Text>
                <View style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",height:50,justifyContent:"center"}}>
                    <Text>
                        {tracking_id}
                    </Text>
                </View>
            </View>
            <View>
                <Text>Order Weight (in kg)</Text>
                <TextInput
                    placeholder="Enter Order Weight"
                    style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee"}}
                    onChangeText={text=>setOrderWeight(text)}
                    />
            </View>
            <View>
                <Text>
                    Select Order Type
                </Text>
                <View style={{backgroundColor:"#eee",borderRadius:30}}>
                        <Picker
                            selectedValue={order_type}
                            prompt="Select Your Order Type"
                            onValueChange={(itemValue, itemIndex) =>
                                setOrderType(itemValue)
                            }
                            >
                                <Picker.Item label="Percel" value="percel"  />
                                <Picker.Item label="Document" value="document"  />
                                {/* <Picker.Item label="Percel" value="percel"  /> */}
                        </Picker>
                    </View>
            </View>
            <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center",marginVertical:20}}>
                Reciver Details
            </Text>
            <View>
                <Text>Reciver Name</Text>
                <TextInput
                 placeholder="Enter Reciver Name"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee"}}
                 onChangeText={text=>setreciverName(text)}
                 />
            </View>
            <View>
                <Text>
                    Select Reciver State
                </Text>
                <View style={{backgroundColor:"#eee",borderRadius:30}}>
                        <Picker
                            selectedValue={reciver_state}
                            prompt="Select Reciver State"
                            onValueChange={(itemValue, itemIndex) =>
                                setreciverState(itemValue)
                            }
                            >
                            {
                                AVA_AREA_LIST.map((item,ind)=>{
                                    return <Picker.Item key={ind} label={item.name} value={item.abbreviation}  />
                                })
                            }
                        </Picker>
                    </View>
            </View>
            <View>
                <Text>Reciver's Address</Text>
                <TextInput
                 placeholder="Enter Deliver Point"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",height:90}}
                 multiline
                 onChangeText={text=>setreciverAdd(text)}
                 />
            </View>
            <View>
                <Text>Reciver Email address</Text>
                <TextInput
                 placeholder="Enter Email Address"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",}}
                 keyboardType="email-address"
                 onChangeText={text=>setreciveremail(text)}
                 />
            </View>
            <View>
                <Text>Reciver Mobile No</Text>
                <TextInput
                 placeholder="Enter Mobile No"
                 style={{borderWidth:0,borderRadius:30,backgroundColor:"#eee",}}
                 keyboardType="number-pad"
                 onChangeText={text=>{setreciverMob(text)}}
                 />
            </View>
            <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center"}}>
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </Text>
            {/* Price */}
            {console.log(reciver_state)}
            {
                reciver_state === "Select You State" ? null : (
                    <Card>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>
                            Price :{price} /-
                        </Text>
                    </Card>
                )
            }
            <TouchableOpacity
             style={{
                 padding:10,
                 backgroundColor:Colors.accent3,
                 alignSelf:"center",
                 width:Sizes.screenWidth/3,
                 alignItems:"center",
                 borderRadius:10,marginVertical:10
            }}
            onPress={()=>AlertMass()}
            >
                <Text style={{fontSize:18,color:Colors.backColor,fontWeight:"bold"}}>Order Place</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    )
}

export default Product;