
import React from "react";
import { Drawer } from 'expo-router/drawer';
import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout(){
    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options= {{title: 'Dolar Americano'}}
                />
                <Drawer.Screen 
                    name="eur"
                    options= {{title: 'Euro'}}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}