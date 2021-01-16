import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              Home: 'home',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          Tab4: {
            screens: {
              Tab4Screen: 'four',
            },
          },
          Tab5: {
            screens: {
              Tab5Screen: 'five',
            },
          }
        },
      },
      NotFound: '*',
    },
  },
};
