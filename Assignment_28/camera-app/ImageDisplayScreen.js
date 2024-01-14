import { Image, SafeAreaView, View } from "react-native";
import { useGalleryContext } from "./GalleryContextProvider";

const ImageDisplay = () => {
  const { gallery } = useGalleryContext();

  return (
    <SafeAreaView>
      <View
        style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 2 }}
      >
        {gallery.map((img, index) => (
          <Image
            key={index}
            style={{ height: 90, width: "24.4%", margin: 1 }}
            source={{ uri: img }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ImageDisplay;
