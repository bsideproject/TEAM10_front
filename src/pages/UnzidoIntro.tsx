import Intro from 'components/Intro/Intro';
import Nav from 'components/SideNav/Nav';
import HomeLayout from 'components/UI/HomeLayout';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'store/configureStore.hooks';
import { asyncUserFetch } from 'store/modules/authInfo';

const UnzidoIntro = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncUserFetch());
    window.location.reload();
  }, [dispatch]);

  return <HomeLayout nav={<Nav />} content={<Intro />} />;
};

export default UnzidoIntro;
