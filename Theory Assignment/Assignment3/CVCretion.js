import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CV() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.pentagon}>
          <View style={styles.pentagonInner} />
          <View style={styles.pentagonBefore} />
        </View>
        <Image
          source={{
            uri: "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
          }}
          style={{ width: 100, height: 100 }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            marginLeft: 100,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Name</Text>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Ravia Iqbal</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.rectangle}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginLeft: 10,
              marginTop: 3,
            }}
          >
            Contact
          </Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contact}>+12345678901</Text>
          <Text style={styles.contact}> Your address</Text>
          <Text style={styles.contact}> www.website.com</Text>
          <Text style={styles.contact}> emailaddress@gmail.com</Text>
        </View>
        <View style={{ ...styles.rectangle, width: 100 * 2 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginLeft: 10,
              marginTop: 3,
            }}
          >
            Find Me Online
          </Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contact}>Twitter.com/profile</Text>
          <Text style={styles.contact}> Linkdin.com/profile</Text>
          <Text style={styles.contact}> Instagram.com/profile</Text>
          <Text style={styles.contact}> facebook.com/profile</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -210,
            marginLeft: 150,
          }}
        >
          <View style={{ ...styles.rectangle, width: 50 * 2 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Profile
            </Text>
          </View>
          <View style={{ ...styles.contact }}>
            <Text style={{ ...styles.contact, marginLeft: 80 }}>
              <b>Name:</b> Ravia Iqbal
            </Text>
            <Text style={{ ...styles.contact, marginLeft: 80 }}>
              <b>Father Name:</b> M. Iqbal
            </Text>
            <Text style={{ ...styles.contact, marginLeft: 80 }}>
              <b>Education:</b> BS
            </Text>
            <Text style={{ ...styles.contact, marginLeft: 80 }}>
              <b>Program:</b> Software Engineering
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 155,
            marginLeft: 200,
          }}
        >
          <View style={{ ...styles.rectangle, width: 100 * 2 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Work Summary
            </Text>
          </View>
          <View style={{ ...styles.contact, marginLeft: 0 }}>
            <Text style={{ ...styles.contact, marginLeft: 0 }}>
              <b>Experience:</b>5 month
            </Text>
            <Text style={{ ...styles.contact, marginLeft: 0 }}>
              Expert in programming
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "green",
    borderWidth: 3,
    marginLeft: 300,
    marginRight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
  contact: {
    margin: 5,
  },
  rectangle: {
    width: 60 * 2,
    height: 50,
    backgroundColor: "seagreen",
    marginBottom: 10,
    marginTop: 20,
  },
  view1: {
    flex: 1,
    marginLeft: 50,
  },

  view2: {
    flex: 2,
    backgroundColor: "transparent",
    marginLeft: 10,
  },
  pentagon: {
    backgroundColor: "transparent",
  },
  pentagonInner: {
    marginTop: 35,
    width: 90,
    borderBottomColor: "seagreen",
    borderBottomWidth: 0,
    borderLeftColor: "transparent",
    borderLeftWidth: 18,
    borderRightColor: "transparent",
    borderRightWidth: 18,
    borderTopColor: "seagreen",
    borderTopWidth: 50,
  },
  pentagonBefore: {
    marginTop: 35,
    position: "absolute",
    height: 0,
    width: 0,
    top: -35,
    left: 0,
    borderStyle: "solid",
    borderBottomColor: "seagreen",
    borderBottomWidth: 35,
    borderLeftColor: "transparent",
    borderLeftWidth: 45,
    borderRightColor: "transparent",
    borderRightWidth: 45,
    borderTopWidth: 0,
    borderTopColor: "transparent",
  },
});
