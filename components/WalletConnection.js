import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Button } from '../styles/StyledComponents';

const WalletConnection = ({ onConnect }) => {
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);

    const connectWallet = async () => {
        const provider = new WalletConnectProvider({
            infuraId: 'YOUR_INFURA_PROJECT_ID', // Required
        });

        await provider.enable();
        const web3Instance = new Web3(provider);

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
        setWeb3(web3Instance);
        onConnect(accounts[0], web3Instance);
    };

    return (
        <div>
            <Button onClick={connectWallet}>Connect Wallet</Button>
            {account && <p>Connected Account: {account}</p>}
        </div>
    );
};

export default WalletConnection;
