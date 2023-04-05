import Layout from '../src/components/Laoyout/Layout';
import Card from '../src/components/Card';
import Toggle from '../src/components/Toggle';

function App() {
  return (
    <>
      <Layout>
        <Card>
          <div>Hello</div>
        </Card>
        <Card>
          <Toggle />
        </Card>
      </Layout>
    </>
  );
}

export default App;
