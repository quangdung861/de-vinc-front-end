import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Wraper } from './styles'
import AdminProvider from 'admin/contexts/AdminProvider'
import { Loading } from '@common'
const AdminLayout = () => {
    const { pathname } = useLocation();
    let pathnameLength = pathname.split('/').length

    return (
        <AdminProvider>
            <Loading />
            <Wraper>
                <Sidebar />
                <div className="main">
                    {
                        pathnameLength <= 3 && <Header />
                    }
                    <Outlet />
                </div>
            </Wraper>
        </AdminProvider>
    )
}

export default AdminLayout