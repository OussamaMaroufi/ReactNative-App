import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, FlatList, SafeAreaView,Image } from 'react-native'
import Category from '../../components/categorie';
import Product from '../../components/product';
import Swiper from 'react-native-swiper/src';


export default function Home({ navigation }) {

    const [userData] = useState([
        {
            img: 'https://randomuser.me/api/portraits/men/81.jpg',
            name: 'Maurice Davis',
        },
        {
            img: 'https://randomuser.me/api/portraits/women/20.jpg',
            name: 'Bernice Alvarez',
        },
        {
            img: 'https://randomuser.me/api/portraits/women/19.jpg',
            name: 'Jennie Barnett',
        },
        {
            img: 'https://randomuser.me/api/portraits/men/55.jpg',
            name: 'Matthew Wagner',
        },
        {
            img: 'https://randomuser.me/api/portraits/men/71.jpg',
            name: 'Christian Wilson',
        },
        {
            img: 'https://randomuser.me/api/portraits/women/21.jpg',
            name: 'Sophia Fernandez',
        },
        {
            img: 'https://randomuser.me/api/portraits/women/42.jpg',
            name: 'Sylvia Lynch',
        },
    ]);

    const PRODUCTS = [
        {
            id:1,
            price:42.95,
            name:"prod1"
        },
        {
            id:2,
            price:133.98,
            name:"prod2"
        },
        {
            id:3,
            price:14.23,
            name:"prod3"
        },
        {
            id:4,
            price:9.98,
            name:"prod4"
        },
        {
            id:5,
            price:19.15,
            name:"prod5"
        },
        {
            id:6,
            price:11.99,
            name:"prod6"
        },
    ]

    const ANIMAL_NAMES = [
        {
            id: 1,
            name: 'Clothes',
        },
        {
            id: 2,
            name: 'Accessoir',
        },
        {
            id: 3,
            name: 'Glasses',
        },
        {
            id: 4,
            name: 'watches',
        },
        {
            id: 5,
            name: 'Strobres',
        },
        {
            id: 6,
            name: '.....',
        },
        {
            id: 7,
            name: 'Horse',
        }

    ];

    const ItemRender1 = ({ name }) => (
        <Category name={name} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.flat}>
                <FlatList
                    data={ANIMAL_NAMES}
                    renderItem={({ item }) => <ItemRender1 name={item.name} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.newArrivals} >

                <Text style={styles.titleSection}>New Arrivals</Text>

                <View>
                    <Swiper  style={{ height: 250 }} showsButtons={true}  showsPagination={false}>
                        {userData.map((user) => (
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{ width: "80%", height:250,borderRadius:20 }}
                                    source={{ uri: user.img }}
                                />
                            </View>
                        ))}
                    </Swiper>
                </View>

            </View>
            <View style={styles.featured}>
                <Text style={styles.titleSection}>Featured</Text>

                <View style={styles.featuredFlat}>
                <FlatList
                    data={PRODUCTS}
                    renderItem={({ item }) =><Product name={item.name} price={item.price}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                </View>
            </View>
            <View style={styles.bestSellers}>
                <Text style={styles.titleSection}>Best Sellers</Text>
                <View style={styles.bestSellersList} >
                    {PRODUCTS.map((product)=><Product name={product.name} price={product.price}/>)}
                </View>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    newArrivals: {
        marginTop: 3
    },
    flat: {
        height: 140
    },
    titleSection: {
        marginLeft:10,
        fontSize: 27,
        fontWeight: "800",
        color: "grey",
        marginBottom:15
    },
    featured:{
        marginTop:20
    },
    featuredFlat:{
        height:210
    },
    bestSellersList:{
        flex:1,
        alignItems:"center",
        flexDirection:"row"
    }
})