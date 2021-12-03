import userData from './data/user.json';
import statisticData from './data/statistics.json';
import friendListData from './data/friends.json';
import transactionData from './data/transactions.json';
import colorsData from './data/colors.json';
import Section from './components/Section/Section.jsx';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import './App.module.css';

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
