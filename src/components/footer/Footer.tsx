import styles from './footer.module.scss';

import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import FacebookIcon from '../../assets/icons/FacebookIcon';
import InstagramIcon from '../../assets/icons/InstagramIcom';
import VkIcon from '../../assets/icons/VkIcon';

function Footer() {
  const { theme } = useThemeContext();

  return (
    <footer className={`${styles.footer} ${styles[`footer--${theme}`]}`}>
      <div className="container">
        <div className={styles.footer_content}>
          <p className={styles.footer_text}>
            <span className={styles.footer_project}>
              Проект реализован в рамках стажировки для Frontend-разработчиков
              от компании{' '}
              <span className={styles.footer_companyName}>Framework Team</span>
            </span>
            <span className={styles.footer_author}>Филиппов Кирилл 2024</span>
          </p>
          <div
            className={`${styles.footer_socialNetworks} ${styles[`footer_socialNetworks--${theme}`]}`}
          >
            <a
              className={styles.footer_link}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Link"
            >
              <FacebookIcon />
            </a>
            <a
              className={styles.footer_link}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Link"
            >
              <InstagramIcon />
            </a>
            <a
              className={styles.footer_link}
              href="https://vk.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="VK Link"
            >
              <VkIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
