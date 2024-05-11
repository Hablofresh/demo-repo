// src/components/Wallet.js

import React, { useEffect, useState } from 'react';
import { WalletConnection } from 'near-api-js';
import nearConfig from '../nearconfig'; // Assuming you have a config file for NEAR

const Wallet = () => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const nearWallet = new WalletConnection(nearConfig.networkId);
    setWallet(nearWallet);
  }, []);

  return (
    <div>
      {wallet ? (
        <p>Wallet connected: {wallet.getAccountId()}</p>
      ) : (
        <p>Wallet not connected</p>
      )}
    </div>
  );
};

export default Wallet;
