export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  Tab4: undefined;
  Tab5: undefined;
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

export type TabTwoParamList = {
  // leave this for now
}

export type TabThreeParamList = {
  // leave this for now
};

export type Tab4ParamList = {
  // leave this for now
};

export type AgendaParamList = {
  item: undefined
};
