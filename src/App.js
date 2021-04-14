//import './App.css';
import { React } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import NotFound from './component/NotFound';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo';

function App() {
  /* useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
       console.log('params :>> ', params); 
      const productList = await productApi.getAll(params);
        console.log(productList);  
    };

    fetchProducts();
  }, []); */
  return (
    <div className="App">
      <Header/>
  
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature}  />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
