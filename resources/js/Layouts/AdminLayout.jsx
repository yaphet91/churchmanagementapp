import React, { useState } from 'react';
import Header from '@/Components/Header';
import AdminSidebar from '@/Components/Sidebar/Admin/AdminSidebar';
import { AdminDrawer } from '@/Components/Drawer/AdminDrawer';

const AdminLayout = ({ admin, children }) => {

    
    return (
        <div className="bg-white dark:bg-[#000033]  dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar/>

                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header admin={admin} />
                    <main>
                        <div className="mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                </div>
                <AdminDrawer isOpen={true} />
            </div>
        </div>
    );
};

export default AdminLayout;
