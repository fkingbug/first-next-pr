import { Menu } from '../Menu/Menu'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <p className={styles.logo}>LOGO</p>
      <div>Search</div>
      <Menu />
    </div>
  )
}
