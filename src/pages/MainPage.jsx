import React, { useContext, useEffect } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import getMore from '../services/getMore';
import PostsList from '../components/PostsList';
import Button from '../components/Button';

const MainPage = () => {
  const { loading, setLoading, setData, data } = useContext(ApikiBlogContext);
  // useEffect(() => {
    // for (let index = 0; index < 16; index++) {    
    getMore().then((response) => {
      setData(response);
      console.log(data);
    });
  // }
  setLoading(false);
// }, []);

  return (
    !loading ?
      <div>
        <h1 className='main-page-title'>Bem vindo ao blog APIKI!</h1>
        <PostsList />
        <Button />
        <footer className='details-footer'>APIKI BLOG</footer>
      </div> : <div>Loading...</div>
  );
};

export default MainPage;
