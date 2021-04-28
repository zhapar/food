import React from 'react'
import Link from './Link'
import { ReactComponent as Home } from '../../icons/home.svg'
import { ReactComponent as Discount } from '../../icons/discount.svg'
import { ReactComponent as Dashboard } from '../../icons/dashboard.svg'
import { ReactComponent as Message } from '../../icons/message.svg'
import { ReactComponent as Notification } from '../../icons/notification.svg'
import { ReactComponent as Setting } from '../../icons/setting.svg'
import { ReactComponent as Logout } from '../../icons/logout.svg'
import { ReactComponent as Store } from '../../icons/store.svg'

export default function Nav() {
  return (
    <nav
      className="pl-3 pt-3 flex flex-col w-auto bg-base-dark-2 h-full min-h-screen"
      // style={{ width: 104 }}
    >
      <div className="m-3 mr-6 flex justify-center items-center rounded-l relative bg-base-dark-2">
        <div className=" w-14 h-14 flex justify-center items-center rounded logo">
          <Store className="w-10 h-10" />
        </div>
      </div>
      <Link to="/" Icon={Home} />
      <Link to="/discount" Icon={Discount} />
      <Link to="/dashboard" Icon={Dashboard} />
      <Link to="/messages" Icon={Message} />
      <Link to="/notifications" Icon={Notification} />
      <Link to="/setting" Icon={Setting} />
      {/* <Link to="/logout" Icon={Logout} /> */}
    </nav>
  )
}
