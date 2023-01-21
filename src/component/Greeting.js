import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/Greeting/Greeting';

const Greeting = () => {
  const { data } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>{data.message}</h1>
      </header>
    </>
  );
};

export default Greeting;
