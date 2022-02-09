import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/home";
import Bag from '../pages/bag';
import Logout from "../pages/logout";
import Orders from "../pages/orders";
import Profile from "../pages/profile";
import Shop from "../pages/shop";
import Search from "../pages/search";
import WhishList from "../pages/whishList";


const mainDrawer = createDrawerNavigator();

export default function MainNavigator(){
    return(
        <mainDrawer.Navigator   screenOptions={{
            drawerStyle: {
                width:"60%",
            },
              drawerContentStyle:{
                  width:"100%"
              }
                                }}
         >
            <mainDrawer.Screen name='home'component={Home}/>
            <mainDrawer.Screen name='bag'component={Bag} />
            <mainDrawer.Screen name='orders'component={Orders} />
            <mainDrawer.Screen name='profile'component={Profile} />
            <mainDrawer.Screen name='search'component={Search} />
            <mainDrawer.Screen name='shop'component={Shop} />
            <mainDrawer.Screen name='whishList'component={WhishList} />
            <mainDrawer.Screen name='logout'component={Logout} />
        </mainDrawer.Navigator>
    )
}