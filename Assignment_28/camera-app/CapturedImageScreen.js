import { Image, View } from "react-native";
import { useGalleryContext } from "./GalleryContextProvider";

const CapturedImage = () => {
  const { gallery } = useGalleryContext();
  const capturedImage = gallery[gallery.length - 1];

  return (
    <View style={{ flex: 1 }}>
      <Image style={{ flex: 1 }} source={{ uri: capturedImage }} />
    </View>
  );
};

export default CapturedImage;
