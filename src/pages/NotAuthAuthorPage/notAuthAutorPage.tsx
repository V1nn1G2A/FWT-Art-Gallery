import styles from './notAuthAutorPage.module.scss';

function NotAuthAuthorPage() {
  return (
    <div className={styles.notAuthAuthorPage}>
      <h1 className={styles.notAuthAuthorPage__title}>
        You are not authorized
      </h1>
    </div>
  );
}

export default NotAuthAuthorPage;
