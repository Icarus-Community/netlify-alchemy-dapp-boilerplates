import React, { useState, useEffect } from 'react';
import { Container, Card, Header, Text } from '../styles/StyledComponents';

const NftSales = ({ web3, account, contractAddress, contractABI }) => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        if (account && web3) {
            fetchNfts();
        }
    }, [account, web3]);

    const fetchNfts = async () => {
        try {
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            const nfts = await contract.methods.getNftsForSale().call();
            setNfts(nfts);
        } catch (error) {
            console.error('Error fetching NFTs:', error);
        }
    };

    return (
        <Container>
            <Header>NFT Sales</Header>
            <div>
                {nfts.map((nft, index) => (
                    <Card key={index}>
                        <Text>NFT ID: {nft.id}</Text>
                        <Text>Price: {web3.utils.fromWei(nft.price, 'ether')} BNB</Text>
                        <Text>Owner: {nft.owner}</Text>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default NftSales;
