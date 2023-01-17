import styles from './Sidebar.module.css'
import { HeaderProps } from './Header.props'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>
}
