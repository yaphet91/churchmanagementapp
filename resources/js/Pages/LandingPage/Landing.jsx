import React, { useEffect } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Navbar from './WrapComponents/Navbar'
import Home from './Containers/Home'
import About from './Containers/About'
import Mission from './Containers/Mission'
import { useDispatch, useSelector } from 'react-redux'
import { addUserDetail } from '@/features/user/userSlice';
import Media from './Containers/Media'
import Services from './Containers/Services'
import Contact from './Containers/Contact'

function Landing({ auth }) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(auth);

    if (auth && auth.user) {
      const { name, email, has_completed_membership_form } = auth.user;
      dispatch(addUserDetail({ name, email, has_completed_membership_form }));
    }
  }, [auth, dispatch]);  // Include auth and dispatch in the dependency array



  return (
    <div>
      <Head title="Anastasia | Membership Boarding" />
      <Navbar user={auth.user} />
      <Home user={auth.user} />
      <About />
      <Mission />
      <Media />
      <Services />
      <Contact />
    </div>
  )
}

export default Landing