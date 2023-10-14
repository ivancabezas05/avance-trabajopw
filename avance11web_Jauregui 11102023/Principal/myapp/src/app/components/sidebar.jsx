import styles from './admin.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () =>{ 

    const router = useRouter();

    // Determinar si estamos en una de las páginas específicas (admin, inicioadmin, biblioteca)
    const isAdminPage = router.pathname.startsWith('/Inicioadmin') || router.pathname === '/Perfiladmin' || router.pathname === '/Biblioteca';

    return (
        <aside className={styles.barralateral}>
                <ul className={styles.opciones}>
                    
                    <li className={styles.li}>
                    <Link href={isAdminPage ? '/Inicioadmin' : '/Inicioalumno'}>
                    {isAdminPage ? 'Inicio' : 'Principal'}
                    </Link>
                    </li>
                
                    <li className={styles.li}>
                    <Link href={isAdminPage ? '/Perfiladmin' : '/Perfilalumno'}>
                        {isAdminPage ? 'Perfil' : 'Perfil'}
                    </Link>
                    </li>
                    
                    
                    <li className={styles.li}>
                    <Link href={isAdminPage ? '/Biblioteca' : '/Prestamos'}>
                        {isAdminPage ? 'Biblioteca' : 'Prestamos' }
                    </Link>
                    </li>
                    
                </ul>
        </aside>
    )

}

export default Sidebar;