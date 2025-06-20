import Home from './Home'
import Search from './Search'
import Notifications from './Notifications'
import ProfileLink from './ProfileLink'
import CreatePost from './CreatePost'

const SidebarItems = () => {
  return (
    <div>
      <Home />
      <Search/>
      <Notifications/>
      <CreatePost/>
      <ProfileLink />
    </div>
  )
}

export default SidebarItems
