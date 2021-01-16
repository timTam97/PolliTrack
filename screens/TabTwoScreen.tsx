import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Alert } from 'react-native';
import { Camera } from 'expo-camera';

export default function TabTwoScreen() {
  const [startCamera, setStartCamera] = React.useState(false)
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [type] = useState(Camera.Constants.Type.back);
  // const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const __startCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    console.log(status)
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  const __takePicture = async () => {
    if (cameraRef) {
      const photo: any = await cameraRef.takePictureAsync();
      setPreviewVisible(true)
      //setStartCamera(false)
      setCapturedImage(photo)
    }
  
  onPictureSaved = photo => {
    console.log(photo);
  }
  // const __savePhoto = () => {}
  // }

  if (hasPermission === null) {
    return <SafeAreaView />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => {
          setCameraRef(cameraRef);
      }}>
        <View style={styles.container1}>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              top: '10%',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'space-between'
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                onPress={__takePicture}
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: '#fff'
                }}
              />
            </View>
          </View>
        </View>      
      </Camera>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFB138',
    flexDirection: 'row',
  },
  container1: {
    width: '100%',
    height: '100%',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
});
