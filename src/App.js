import { Route, Switch } from 'react-router-dom';

/*
Importing the pages and layout
*/
import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/layout/Layout';

export default function App() {
  return (
    <Layout>
      <section>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/frett/:id" component={NewsPage} />
          <Route component={NotFound} />
        </Switch> 
      </section>
    </Layout>
  );
}
