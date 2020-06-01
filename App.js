// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/components/Login/Login';
// import DashBoardScreen from './src/components/DashBoard';
import ProfileScreen from './src/components/Profile';
// import RegistrationScreen from './src/components/Registration';
// import ForgetPasswordScreen from './src/components/ForgetPassword';
// import AppointmentScreen from './src/components/Appointment';
import VisitNoteScreen from './src/components/VisitNote';
// import MedicationsScreen from './src/components/Medications';
// import PaymentScreen from './src/components/Payment';
// import Notification from './src/components/Notification';
import UploadScreen from './src/components/Upload';
import OnlinePayment from './src/components/OnlinePayment';
import UpComingScreen from './src/components/UpcomingEvents';
import HomePage from './src/components/HomePage';
import OfflineMessage from './src/components/offlineMessages';
import OfflineMessageDetails from './src/components/offlineMessageDetails'
// import AppointmentPay from './src/components/AppoinmentPayment';
// import TermsCondition from './src/components/TermsandCondition';

// const App = createStackNavigator({
//   Login: {screen: LoginScreen},
//   Home: {screen: HomePage},
// });

// const App = StackNavigator({
// Login: {screen: LoginScreen},
// DashBoard: {screen: DashBoardScreen},
// VisitNote: {screen: VisitNoteScreen},
// Payment: {screen: PaymentScreen},
// Medications: {screen: MedicationsScreen},
// Appointment: {screen: AppointmentScreen},
// Registration: {screen: RegistrationScreen},
// ForgetPassword: {screen: ForgetPasswordScreen},
// Notification: {screen: Notification},
// Upload: {screen: UploadScreen},
// Online: {screen: OnlinePayment},
// UpComing: {screen: UpComingScreen},
// Home: {screen: HomePage},
// Profile: {screen: ProfileScreen},
// OfflineMessage: {screen: OfflineMessage},
// OfflineDetails: {screen: OfflineMessageDetails},
// AppointmentPay: {screen: AppointmentPay},
// TermsCondition: {screen: TermsCondition},
// });


const AppNavigator = createStackNavigator({
    login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        }
    },
    home: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        }
    },
    Online: {
        screen: OnlinePayment,
        navigationOptions: {
            header: null,
        }
    },
    OfflineMessage: {
        screen: OfflineMessage,
        navigationOptions: {
            header: null,
        }
    },
    OfflineDetails: {
        screen: OfflineMessageDetails,
        navigationOptions: {
            header: null,
        }
    },
    UpComing: {
        screen: UpComingScreen,
        navigationOptions: {
            header: null,
        }
    },
    Upload: {
        screen: UploadScreen,
        navigationOptions: {
            header: null,
        }
    },
    VisitNote: {
        screen: VisitNoteScreen,
        navigationOptions: {
            header: null,
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            header: null,
        }
    }
},
    {
        initialRouteName: "login"
    }
);
export default createAppContainer(AppNavigator);


// export default createAppContainer(App);
