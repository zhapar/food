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
      className="pl-2 pt-2 2xl:pl-3 2xl:pt-3 flex flex-col w-auto bg-base-dark-2 h-screen fixed top-0 left-0"
      // style={{ width: 104 }}
    >
      <div className="m-2 mr-3 2xl:m-3 2xl:mr-4 flex justify-center items-center rounded-l relative bg-base-dark-2">
        <div className="w-10 h-10 2xl:w-12 2xl:h-12 flex justify-center items-center rounded logo">
          <Store className="w-7 h-7 2xl:w-9 2xl:h-9" />
        </div>
      </div>
      <Link to="/" Icon={Home} />
      <Link to="/discount" Icon={Discount} />
      <Link to="/dashboard" Icon={Dashboard} />
      <Link to="/messages" Icon={Message} />
      <Link to="/notifications" Icon={Notification} />
      <Link to="/setting" Icon={Setting} />
      <Link to="/logout" Icon={Logout} />
    </nav>
  )
}
