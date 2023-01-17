import styles from './Sidebar.module.css'
import { FooterProps } from './Footer.props'

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>FooterProps</div>
}
