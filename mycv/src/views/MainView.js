import StaticView from "./StaticView"
import { NavLink, Outlet } from 'react-router-dom'

function MainView() {
    return (
        <div className="main">
            <div className="static_view">
                <StaticView />
            </div>
            <div className="dynamic_view">
                <div className="navbar">
                    <strong><NavLink to='/info' className='navlink'>INFORMATION</NavLink></strong>
                    <strong><NavLink to='/admin' className='navlink'>ADMIN PAGE</NavLink></strong>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainView