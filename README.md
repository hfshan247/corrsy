This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

# Screenshot

![Alt text](/screenshot.png?raw=true "Optional Title")


# Demo

To preview the demo please click on the following video thumbnail

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/oNS1HGKkHDg/0.jpg)](https://www.youtube.com/watch?v=oNS1HGKkHDg)


# Next Steps

In order to improve the user experience and for the success of the product I would consider doing the following:

1. **User Feedback Analysis:**  
   Gather feedback from student about the instructor through app reviews, surveys, and analytics tools. Analyze this feedback to identify areas for improvement.

1. **Performance Optimization:**  
   Ensure that your app runs smoothly and quickly by optimizing its performance. This includes minimizing loading times, reducing battery consumption, and optimizing memory usage.

1. **User Interface (UI) and User Experience (UX) Design:**  
   Improve the design of your app to make it more intuitive, visually appealing, and user-friendly. Consider factors such as layout, navigation, color scheme, typography, and iconography.

1. **Feature Updates:**  
   Continuously add new features and functionalities to keep your app relevant and engaging for users. Prioritize features based on user feedback and market trends.

1. **Bug Fixes:**  
   Regularly address any bugs or technical issues reported by users to ensure a smooth and error-free experience.

1. **Personalization:**  
   Implement personalization features to tailor the app experience to individual user preferences and behavior. This could include personalized recommendations, content, and notifications.

1. **Integration with Third-Party Services:**  
   Integrate your app with popular third-party services and APIs to provide additional value to users. For example, you could integrate social media sharing, payment gateways, or location-based services.

1. **Security Enhancements:**  
   Strengthen the security of your app to protect user data and prevent unauthorized access. Implement best practices for data encryption, secure authentication, and protection against common security threats.

1. **Accessibility Improvements:**  
   Make your app accessible to users with disabilities by incorporating accessibility features such as voice commands, screen readers, and adjustable font sizes.

1. **Localization:**   
   Expand the reach of your app by localizing it for different languages and regions. This involves translating the app content and adapting it to cultural preferences and norms.

1. **Performance Monitoring and Analytics:**  
   Use analytics tools to monitor the performance of your app and track key metrics such as user engagement, retention, and conversion rates. Use this data to make data-driven decisions and prioritize future enhancements.

1. **Continuous Testing and Iteration:**
   Continuously test new features and updates to identify any issues or areas for improvement. Iterate based on user feedback and testing results to refine the app over time.


# Final thoughts
 During this short period of time I tried to complete as much features as I could. For further improviements code quality could have been improved and also more bugs could be fixed. There were some challenges related to fetching api data from backend and using it inside the application since it was not formatted in the most optimized way. I tried to split 


# Project Management
I kikked off this project by creating a jira kanban board in order to split tasts in smaller tasks and to simulate it like a real worl application where we collaborate with team.

![Alt text](/corrsy-jira-board.png?raw=true "Optional Title")


# Version Control System
I also created a git repository and maintained it via My favorite search engine is [github](https://github.com/ "github"). I created multiple branches and pull requests and merged them to the main branch. 

# Libraries and References

To complete this assesment, I took help from the following resources:

- [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons) - for bottom tab icons/other app icons
- [Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator) - for tab navigation.
- [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) - for environment variables.
- [AXIOS](https://www.npmjs.com/package/axios) - to fetch data from server.
- [Redux](https://redux.js.org/) - for state management.
- [Circular Progress Bar](https://www.npmjs.com/package/react-native-circular-progress) - description.
- [React Navigation](https://reactnavigation.org/docs/getting-started/) - to navigate between screens.
