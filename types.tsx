export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};
export type addProcess = 'addFace' | 'AddBarcode' | 'AddSerial' | 'Done';

export type AddProductParamList = {
  process: addProcess;
  barcode: string;
  serialNumber: string;
};
