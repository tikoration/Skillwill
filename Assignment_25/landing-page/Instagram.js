import { StyleSheet, ScrollView, Text, View, Image, Pressable } from 'react-native';
import plusIcon from "./assets/plusIcon.png"
import menuIcon from "./assets/menuIcon.png"
import add from "./assets/add.png"
import profilePhoto from "./assets/profile-photo.jpg"
import gridIcon from "./assets/feed.png"
import reelsIcon from "./assets/video.png"
import tagIcon from "./assets/instagram-tag-icon.png"
import arrowIcon from "./assets/arrow-down-sign-to-navigate.png"

const Instagram = ({onClick}) => {
  return (
    <View>
      <View style={styles.headerTop}>
          <View style={styles.usernameAndArrow}>
            <Text style={styles.mainUsername}>tikoration</Text>
            <Image style={styles.arrowIcon} source={arrowIcon}/>
          </View>
          <View style={styles.iconSection}>
            <Image style={styles.plusIcon} source={plusIcon}/>
            <Image style={styles.menuIcon} source={menuIcon}/>
          </View>
        </View>
        <View style={styles.headerMid}>
          <View style={styles.outerCircle}>
            <Image style={styles.mainPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.following}> 
            <View style={styles.followingComponents}>
              <Text style={styles.followingNums}>120</Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.followingComponents}>
              <Text style={styles.followingNums}>836</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.followingComponents}>
              <Text style={styles.followingNums}>487</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descName}>Tinatin Mgebrishvili</Text>
          <Text style={styles.descText}>Life is like a helicopter{'\n'}I don't know how to operate a helicopter</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable onPress={onClick} style={styles.btn}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </Pressable>
          <Pressable onPress={onClick} style={styles.btn}>
            <Text style={styles.btnText}>Share Profile</Text>
          </Pressable>
          <Pressable onPress={onClick} style={styles.addBtn}>
            <Image source={add} style={styles.addIcon} />
          </Pressable>
        </View>
        <ScrollView horizontal>
          <View style={styles.highlights}>
            <View style={styles.highlight}>
              <View style={styles.highlightOC}>
                <Image style={styles.highlightPhoto} source={profilePhoto}/>  
              </View>
              <Text>Highlight</Text>
            </View> 
            <View style={styles.highlight}>
              <View style={styles.highlightOC}>
                <Image style={styles.highlightPhoto} source={profilePhoto}/>  
              </View>
              <Text>Highlight</Text>
            </View> 
            <View style={styles.highlight}>
              <View style={styles.highlightOC}>
                <Image style={styles.highlightPhoto} source={profilePhoto}/>  
              </View>
              <Text>Highlight</Text>
            </View> 
            <View style={styles.highlight}>
              <View style={styles.highlightOC}>
                <Image style={styles.highlightPhoto} source={profilePhoto}/>  
              </View>
              <Text>Highlight</Text>
            </View> 
            <View style={styles.highlight}>
              <View style={styles.highlightOC}>
                <Image style={styles.highlightPhoto} source={profilePhoto}/>  
              </View>
              <Text>Highlight</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.mainSectionIcons}>
          <Image style={styles.mainSectionIcon} source={gridIcon}/>
          <Image style={styles.mainSectionIcon} source={reelsIcon}/>
          <Image style={styles.mainSectionIcon} source={tagIcon}/>
        </View>
        <View style={styles.productGrid}>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
          <View style={styles.gridItem}>
            <Image style={styles.gridPhoto} source={profilePhoto}/>
          </View>
        </View>
    </View>
  )
}

export default Instagram

const styles = StyleSheet.create({
    headerTop: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      left: 17
    },
    iconSection: {
      flexDirection: "row",
      alignItems: 'center',
      right: 40,
      gap: 15
    },
    plusIcon: {
      width: 20,
      height: 20
    },
    menuIcon: {
      width: 32,
      height: 32
    },
    mainUsername: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 15,
      marginTop: 8
    },
    arrowIcon: {
      width: 10,
      height: 10
    },
    usernameAndArrow:{
      flexDirection: "row",
      alignItems: 'center',
      gap: 5
    },
    headerMid: {
      gap: 10,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between",
      left: 17
    },
    mainPhoto: {
      borderRadius: 50,
      borderWidth: 6,
      borderColor: 'white',
      overflow: 'hidden',
      width: 100,
      height: 100
    },
    outerCircle: {
      backgroundColor: "#D3D3D3",
      borderRadius: 53,
      width: 103,
      height: 103,
      alignItems: 'center',
      justifyContent: 'center'
    },
    following: {
      flexDirection: "row",
      right: 40,
      gap: 20
    },
    followingComponents: {
      alignItems: 'center'
    },
    followingNums: {
      fontWeight: 'bold'
    },
    description:{
      gap: 5,
      marginTop: 3,
      left: 17
    },
    descName: {
      fontWeight: "bold"
    },
    descText: {
      width: 300
    },
    buttons: {
      flexDirection: "row",
      marginTop: 30,
      gap: 5,
      left: 17
    },
    btn: {
      borderRadius: 7,
      backgroundColor: "#f2f2f2",
      width: 150,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnText: {
      fontWeight: '600'
    },
    addBtn: {
      borderRadius: 7,
      backgroundColor: "#f2f2f2",
      justifyContent: 'center',
      alignItems: 'center',
      width: 40
    },
    addIcon: {
      width: 15,
      height: 15
    },
    highlights: {
      marginTop: 20,
      flexDirection: "row",
      gap: 15,
      left: 17
    },
    highlight:{
      alignItems: 'center',
      gap: 3
    },
    highlightPhoto: {
      borderRadius: 50,
      borderWidth: 4,
      borderColor: 'white',
      overflow: 'hidden',
      width: 67,
      height: 67
    },
    highlightOC: {
      backgroundColor: "#D3D3D3",
      borderRadius: 53,
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center'
    },
    mainSectionIcons: {
      flexDirection: "row",
      marginTop: 30,
      right: 15,
      gap: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainSectionIcon: {
      width: 23,
      height: 23
    },
    productGrid: {
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: 'space-between',
      marginTop: 10
    },
    gridItem: {
      width: '33%',
      aspectRatio: 1,
      overflow: 'hidden',
    },
    gridPhoto: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      margin: 2
    }
  });
  