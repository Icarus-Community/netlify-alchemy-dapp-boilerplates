import React, { useState, useEffect } from 'react';
import { Container, Card, Header, Text } from '../styles/StyledComponents';

const Dashboard = ({ account, web3, contractAddress, contractABI }) => {
    const [bnbBalance, setBnbBalance] = useState(0);
    const [icarusBalance, setIcarusBalance] = useState(0);
    const [pendingRewards, setPendingRewards] = useState(0);

    useEffect(() => {
        if (account && web3) {
            fetchBalances();
            fetchPendingRewards();
        }
    }, [account, web3]);

    const fetchBalances = async () => {
        try {
            const bnbBalanceWei = await web3.eth.getBalance(account);
            setBnbBalance(web3.utils.fromWei(bnbBalanceWei, 'ether'));

            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const icarusBalanceWei = await contract.methods.balanceOf(account).call();
            setIcarusBalance(web3.utils.fromWei(icarusBalanceWei, 'ether'));
        } catch (error) {
            console.error('Error fetching balances:', error);
        }
    };

    const fetchPendingRewards = async () => {
        try {
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const pendingRewardsWei = await contract.methods.pendingRewards(account).call();
            setPendingRewards(web3.utils.fromWei(pendingRewardsWei, 'ether'));
        } catch (error) {
            console.error('Error fetching pending rewards:', error);
        }
    };

    return (
        <Container>
            <Header>Dashboard</Header>
            <Card>
                <Text>BNB Balance: {bnbBalance}</Text>
                <Text>ICARUS Balance: {icarusBalance}</Text>
                <Text>Pending Rewards: {pendingRewards}</Text>
            </Card>
        </Container>
    );
};

export default Dashboard;
