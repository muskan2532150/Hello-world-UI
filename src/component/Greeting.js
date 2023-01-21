import { useEffect} from 'react';
import { fetchdata } from '../redux/Greeting/Greeting';
import { useDispatch, useSelector } from 'react-redux';

const Greeting =()=>{
    const { data } = useSelector((state) => state.greeting);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchdata());
    },[]);

    return (
        <>
         <header className="App-header">
           <h1>{data.message}</h1>
         </header>
        </>
    )
}

export default Greeting;
