import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import banner from "../../assets/images/banner1.png";
import { Link } from "expo-router";

import {
  catagories,
  rightarrow,
  adjust,
  notification,
  cart,
  heart,
} from "../../components/data";

export default function home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          >
            <TextInput
              style={[styles.searchInput, { flex: 1 }]}
              placeholder="Search..."
              placeholderTextColor="#999"
            />
            <View
              style={{
                backgroundColor: "#FF123D",
                width: 20,
                height: 20,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={adjust}
                style={{
                  width: 10.77,
                  height: 8.23,
                  tintColor: "#fff",
                  backgroundColor: "#FF123D",
                }}
              />
            </View>
          </View>
          <View style={styles.headerIcons}>
            <Ionicons name="heart-outline" size={24} color="#FF123D" />
            <MaterialIcons name="shopping-cart" size={24} color="#FF123D" />
            <Ionicons name="notifications-outline" size={24} color="#FF123D" />
          </View>
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Good Morning</Text>
        <Text style={styles.subGreeting}>
          Rise And Shine! It's Breakfast Time
        </Text>
      </View>

      {/* Categories */}
      <View
        style={{
          backgroundColor: "white",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.categories, { marginBottom: 20 }]}
        >
          {catagories.map((category, index) => (
            <Link href={"/profile"}>
              <View>
                <View
                  key={index}
                  style={[
                    styles.categoryItem,
                    { backgroundColor: "#E8E8E8", alignItems: "center" },
                  ]}
                >
                  <Image source={category.icon} style={[category.style]} />

                  <View>
                    <Text style={{ marginBottom: 10 }}>{category.name}</Text>
                  </View>
                </View>
              </View>
            </Link>
          ))}
        </ScrollView>

        {/* Best Seller */}
        <View style={styles.section}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.sectionTitle}>Best Seller</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.viewAll}>View All</Text>
              <Image
                source={rightarrow}
                style={{ marginLeft: 5, width: 5.2, height: 9 }}
              />
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.products}
          >
            {/* Product Item */}
            <View style={styles.productItem}>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.productImage}
              />
              <Text
                style={[
                  styles.productPrice,
                  {
                    position: "absolute",
                    bottom: 10,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: "#FF123D",
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  },
                ]}
              >
                $122.5
              </Text>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }} // Replace with actual image source
                // Replace with actual image source
                style={styles.productImage}
              />
              <Text
                style={[
                  styles.productPrice,
                  {
                    position: "absolute",
                    bottom: 10,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: "#FF123D",
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  },
                ]}
              >
                $10.0
              </Text>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }} // Replace with actual image source
                // Replace with actual image source
                style={styles.productImage}
              />
              <Text
                style={[
                  styles.productPrice,
                  {
                    position: "absolute",
                    bottom: 10,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: "#FF123D",
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  },
                ]}
              >
                $10.0
              </Text>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }} // Replace with actual image source
                // Replace with actual image source
                style={styles.productImage}
              />
              <Text
                style={[
                  styles.productPrice,
                  {
                    position: "absolute",
                    bottom: 10,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: "#FF123D",
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  },
                ]}
              >
                $10.0
              </Text>
            </View>
            {/* Repeat the above View for more products */}
          </ScrollView>
        </View>

        {/* Promotion */}
        <View style={styles.promotion}>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.promotionText}>
              Experience our delicious new dish
            </Text>
            <Text style={styles.promotionOffer}>30% OFF</Text>
          </View>

          <Image
            source={banner}
            // Replace with actual image source
            style={[
              styles.productImage,
              {
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: -1,
                top: 0,
                right: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
            ]}
          />
        </View>

        {/* Recommend */}
        <View style={[styles.section, { paddingBottom: 20, marginBottom: 35 }]}>
          <Text style={styles.sectionTitle}>Recommend</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.products}
          >
            {/* Product Item */}
            <View style={styles.productItem}>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={{
                  width: 159,
                  height: 140,
                  borderRadius: 10,
                  position: "relative",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  backgroundColor: "#fff",
                  paddingHorizontal: 10,
                  marginLeft: 20,
                  marginTop: 16,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", marginRight: 6 }}>5.0</Text>
                <Image source={heart} style={{ width: 13, height: 12 }} />
              </View>

              <Text
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 10,
                  backgroundColor: "#FF123D",
                  color: "white",
                  paddingHorizontal: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              >
                $10.0
              </Text>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={{
                  width: 159,
                  height: 140,
                  borderRadius: 10,
                  position: "relative",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  backgroundColor: "#fff",
                  paddingHorizontal: 10,
                  marginLeft: 20,
                  marginTop: 16,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", marginRight: 6 }}>5.0</Text>
                <Image source={heart} style={{ width: 13, height: 12 }} />
              </View>

              <Text
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 10,
                  backgroundColor: "#FF123D",
                  color: "white",
                  paddingHorizontal: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              >
                $10.0
              </Text>
            </View>
            {/* Repeat the above View for more products */}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    paddingTop: 60,
    paddingBottom: 60,
  },
  header: {
    backgroundColor: "#E8E8E8",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 20,
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    paddingLeft: 20,
  },
  greeting: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 16,
    color: "#FF3E3E",
  },
  categories: {
    paddingHorizontal: 17,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginTop: 17,
  },
  categoryItem: {
    alignItems: "center",
    margin: 10,
    borderRadius: 50,
    width: 49,
    height: 75,
    backgroundColor: "#E8E8E8",
    paddingTop: 10,
  },
  categoryText: {
    marginTop: 5,
    color: "#000",
    textAlign: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  section: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#FF123D",
    textAlign: "right",
  },
  products: {
    flexDirection: "row",
    marginTop: 10,
  },
  productItem: {
    marginRight: 20,
    alignItems: "center",
    position: "relative",
  },
  productImage: {
    width: 71.68,
    height: 108,
    borderRadius: 10,
  },
  productPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 4,
  },
  promotion: {
    marginHorizontal: 20,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 20,
    width: "90%",
    height: 150,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#FF3E3E",
    position: "relative",
  },
  promotionGradient: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  promotionText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    width: "80%",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  promotionOffer: {
    color: "#fff",
    fontSize: 35,
    width: "80%",
    fontWeight: "bold",
    textAlign: "center",
  },
  footerTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFF0F0",
  },
});
