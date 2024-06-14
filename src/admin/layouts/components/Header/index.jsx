import React, { useContext } from 'react'
import { Wraper } from './styles'
import { AdminContext } from 'admin/contexts/AdminProvider';

const Header = () => {

    const { breadcrum } = useContext(AdminContext);

    const actionData = [
        {
            name: "Đăng nhập bằng SĐT (SSO)",
            icon: <i className="fa-solid fa-cloud"></i>
        },
        {
            name: "Vay vốn kinh doanh",
            icon: <i className="fa-solid fa-cloud"></i>
        },
        {
            name: "Trợ giúp",
            icon: <i className="fa-solid fa-cloud"></i>
        },
        {
            name: "Góp ý",
            icon: <i className="fa-solid fa-cloud"></i>
        },
        {
            name: "Phan Quang Dũng",
            icon: <img src={require('admin/assets/images/avatar-mac-dinh-1.png')} alt=''
                style={{ width: 32, height: 32, borderRadius: "50px", objectFit: "cover", marginRight: 8 }} />,
            iconArrow: <i className="fa-solid fa-chevron-down" style={{ marginLeft: 8 }}></i>,
        },
    ]

    const renderActionList = actionData.map((action, index) => {
        return (
            <div className="action-item" key={index}>{action.icon}{action.name}{action.iconArrow}</div>
        )
    })

    return (
        <Wraper>
            <div className="header-content-left">{breadcrum}</div>
            <div className="header-content-right">
                <div className="action-list">
                    {renderActionList}
                </div>
            </div>
        </Wraper>
    )
}

export default Header