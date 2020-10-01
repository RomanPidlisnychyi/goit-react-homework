import React from 'react';
import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Layout from './Layout/Layout';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
    return (
        <Layout>
            <Profile user={user} />
            <Statistics stats={statisticalData} title="Upload stats" />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </Layout>
    );
}
