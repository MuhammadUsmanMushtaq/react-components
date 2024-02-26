import Layout from '../src/components/Laoyout/Layout';
import Card from '../src/components/Card';
import Toggle from '../src/components/Toggle';
import StarRating from '../src/components/StarRating';
import SharingPost from '../src/components/SharingPost';
import PasswordGen from './components/PasswordGen';
import Bounce from './components/Bounce';
import ImageSlider from './components/ImageSlider';

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
          <PasswordGen />
        </Card>

        <Card>
          <Toggle />
        </Card>
        <Card>
          <Bounce />
        </Card>
        <Card>
          <ImageSlider
            url={'https://picsum.photos/v2/list'}
            page={1}
            limit={5}
          />
        </Card>
      </Layout>
    </>
  );
}

export default App;
