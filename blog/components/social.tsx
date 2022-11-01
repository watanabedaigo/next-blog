import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import styles from 'styles/social.module.scss'


export default function Social (){
  return(
    <ul className={styles.spcial__list}>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className='sr-only'>Facebook</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>Github</span>
        </a>
      </li>
    </ul>
  )
}
