import './App.css';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';
import userData from './data/user.json';
import statisticData from './data/statistics.json';
import friendListData from './data/friends.json';
import transactionData from './data/transactions.json';
import colorsData from './data/colors.json';

function App() {
  return (
    <Section classNames="userCard">
      <Profile user={userData} />
      <Statistics
        title="Upload stats"
        stats={statisticData}
        colors={colorsData}
      />
      <FriendList friendsData={friendListData} />
      <TransactionHistory transactionData={transactionData} />
    </Section>
  );
}

export default App;
