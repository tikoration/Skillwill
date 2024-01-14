import { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import ImageDisplay from "./ImageDisplayScreen";
import { useGalleryContext } from "./GalleryContextProvider";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const { gallery, setGallery } = useGalleryContext();
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const cameraRef = useRef(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setGallery((prevState) => [...prevState, photo.uri]);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  const switchCamera = () => {
    setCameraType((prevCameraType) =>
      prevCameraType === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const flashMode = () => {
    setFlash((prevMode) =>
      prevMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    );
  };

  return (
    <View>
      {hasPermission ? (
        <View style={{ height: "100%", backgroundColor: "black" }}>
          <Camera
            type={cameraType}
            style={{ flex: 1 }}
            flashMode={flash}
            ref={cameraRef}
          />
          <View
            style={{
              position: "absolute",
              flex: 1,
              width: "100%",
              padding: 20,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              height: 120,
            }}
          >
            <View
              style={{
                flex: 1,
                top: 25,
              }}
            >
              <TouchableOpacity
                onPress={flashMode}
                style={{
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 50,
                  width: 25,
                  height: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name={
                    flash === Camera.Constants.FlashMode.torch
                      ? "flash"
                      : "flash-off"
                  }
                  size={17}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              flex: 1,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              gap: 80,
            }}
          >
            <View
              style={{
                visibilty: gallery.length > 0 ? "visible" : "hidden",
                bottom: 15,
                height: 50,
              }}
            >
              <TouchableOpacity
                onPress={() => navigate("CapturedImage")}
                style={{ flex: 1, width: 50, height: 50 }}
              >
                <Image
                  style={{ flex: 1 }}
                  source={{ uri: gallery[gallery.length - 1] }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                gap: 15,
                bottom: 30,
              }}
            >
              <Text
                style={{
                  color: "#F6E10E",
                  fontSize: 14,
                }}
              >
                PHOTO
              </Text>
              <View
                style={{
                  width: 74,
                  height: 74,
                  backgroundColor: "white",
                  borderRadius: 50,
                  padding: 3.5,
                }}
              >
                <TouchableOpacity
                  onPress={handleCapture}
                  style={{
                    width: 67,
                    height: 67,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                    borderColor: "black",
                    borderWidth: 2,
                  }}
                >
                  <View />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                width: 50,
                height: 50,
                backgroundColor: "rgba(48,48,48, 0.7)",
                justifyContent: "center",
                bottom: 15,
              }}
              onPress={switchCamera}
            >
              <MaterialIcons
                name="flip-camera-android"
                size={26}
                color="white"
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text>No access to the camera</Text>
      )}
    </View>
  );
};

export default CameraScreen;
