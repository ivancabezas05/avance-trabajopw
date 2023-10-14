import styles from './admin.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  // Determinar si estamos en una de las páginas específicas (admin, inicioadmin, biblioteca)
  const isAdminPage = router.pathname.startsWith('/admin') || router.pathname === '/inicioadmin' || router.pathname === '/biblioteca';

  return (
    <aside className={styles.barralateral}>
      <ul className={styles.opciones}>
        <li className={styles.li}>
          <Link href={isAdminPage ? '/admin' : '/alumno'}>
            {isAdminPage ? 'Admin' : 'Alumno'}
          </Link>
        </li>
        <li className={styles.li}>
          <Link href={isAdminPage ? '/inicioadmin' : '/inicioalumno'}>
            {isAdminPage ? 'Perfil Admin' : 'Perfil Alumno'}
          </Link>
        </li>
        <li className={styles.li}>
          <Link href={isAdminPage ? '/biblioteca' : '/prestamos'}>
            {isAdminPage ? 'Biblioteca' : 'Préstamos'}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
