import { Dimensions } from "react-native"

const {height,width}= Dimensions.get("screen");

export const Colors= {
    backColor:"#FFFFFF",
    textColor:"#000",
    cardColor:"#0ff",
    primary:"#FF3941",
    accent1:"#15294B",
    accent2:"#B4C2CD",
    accent3:"#0088FF"

}

export const Sizes={
    iconSize:20,
    fontSize:20,
    mainPadding:10,
    screenHeiht:height,
    screenWidth:width
}

