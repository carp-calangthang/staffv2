import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

import * as Screens from 'screens/index';
import { RootStackParamList } from "utils/config/NavigationTypes";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Inventory" component={Screens.StockScreens} />
          {/* Order */}
          <Stack.Screen name="OrderDetail" component={Screens.OrderDetail} />
          <Stack.Screen name="OrderCreate" component={Screens.OrderCreate} />
          <Stack.Screen name="OrderReceive" component={Screens.OrderReceive} />
          <Stack.Screen name="OrderCreate2" component={Screens.OrderCreate2} />
          <Stack.Screen name="OrderApprove" component={Screens.OrderApprove} />
          <Stack.Screen name="OrderManager" component={Screens.OrderManager} />
          <Stack.Screen name="OrderDelivery" component={Screens.OrderDelivery} />
          <Stack.Screen name="OrderManagerView" component={Screens.OrderManagerView} />
          <Stack.Screen name="OrderManagerEdit" component={Screens.OrderManagerEdit} />
          {/* Depot */}
          <Stack.Screen name="Depot" component={Screens.DepotScreens} />
          {/* Request Product */}
          <Stack.Screen name="CreateRequest" component={Screens.CreateRequest} />
          <Stack.Screen name="RequestsList" component={Screens.RequestsList} />
          <Stack.Screen name="DoneCreate" component={Screens.DoneCreate} />
          <Stack.Screen name="DeliveryList" component={Screens.DeliveryList} />
          <Stack.Screen name="Receive" component={Screens.Receive} />
          <Stack.Screen name="Delivery" component={Screens.Delivery } />
          {/* Cancel */}
          <Stack.Screen name="NewCancel" component={Screens.NewRequests} />
          <Stack.Screen name="SendRequest" component={Screens.SendRequest} />
          <Stack.Screen name="NewRequestsList" component={Screens.NewRequestsList} />
          <Stack.Screen name="WaitingList" component={Screens.WaitingList} />
          <Stack.Screen name="DetailRequest" component={Screens.DetailRequest} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
};

export default App;