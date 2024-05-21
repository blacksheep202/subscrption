import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeMenu from './components/HomeMenu';
import SelectPlan from './components/SelectPlan';
import MakePayment from './components/MakePayment';
import PaymentSuccess from './components/PaymentSuccess';
import DeleteSubscription from './components/DeleteSubscription';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const SubscriptionContext = createContext();

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userId, setUserId] = useState(null);

  return (
    <SubscriptionContext.Provider value={{ selectedPlan, setSelectedPlan, userId, setUserId }}>
      <div className="app-background">
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/make-payment" element={<MakePayment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/delete-subscription" element={<DeleteSubscription />} />
        </Routes>
      </div>
    </SubscriptionContext.Provider>
  );
}

export default App;
