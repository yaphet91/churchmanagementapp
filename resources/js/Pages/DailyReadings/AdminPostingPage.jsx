import GeezDateDisplay from '@/Components/DateDisplay/GeezDateDisplay';
import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import { useSelector } from 'react-redux'
import PostDailyReadings from './PostDailyReadings';

const AdminPostingPage = () => {
    const theme = useSelector((store) => store.theme.theme);
    return (
        <AdminLayout>
            <div className={`${theme === 'light' ? 'whiterBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[470px]`}>
                <div className="flex flex-row space-x-3 font-bold text-2xl underline mb-5">
                    <h1>ዕለት ብግእዝ ፥</h1>
                    <GeezDateDisplay />
                </div>
                <div className=' overflow-y-auto'>
                    {/* Daily readings form */}
                    <div className="p-1" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                        <PostDailyReadings />
                    </div>
                </div>
            </div>
        </AdminLayout>

    )
}

export default AdminPostingPage
