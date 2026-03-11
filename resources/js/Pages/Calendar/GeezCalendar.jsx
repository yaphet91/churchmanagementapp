import MemberLayout from '@/Layouts/MemberLayout';
import AdminLayout from '@/Layouts/AdminLayout';
import React from 'react';

const GeezCalendar = ({ user }) => {
  const Layout = user.role === 'admin' ? AdminLayout : MemberLayout;

  return (
    <Layout>
      <div>
        <h1>Geez Calendar</h1>
      </div>
    </Layout>
  );
};

export default GeezCalendar;