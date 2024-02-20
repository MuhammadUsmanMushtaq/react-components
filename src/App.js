import Layout from '../src/components/Laoyout/Layout';
import Card from '../src/components/Card';
import Toggle from '../src/components/Toggle';
import StarRating from '../src/components/StarRating';
import SharingPost from '../src/components/SharingPost';
import BgChanger from './components/BgChanger';

function App() {
  return (
    <>
      <Layout>
        <Card>
          <SharingPost />
        </Card>
        <Card>
          <StarRating rating={4.2} totalRating={4.2} reviews={87} />
        </Card>
        <Card>
          <Toggle />
        </Card>
        <Card>
          <BgChanger />
        </Card>
      </Layout>
    </>
  );
}

export default App;
