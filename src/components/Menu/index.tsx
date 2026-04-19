import { HomeIcon } from 'lucide-react'
import { HistoryIcon } from 'lucide-react'
import { SettingsIcon } from 'lucide-react'
import { SunIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Menu(){
    return <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
            <HomeIcon/>
        </a>
        <a href="#" className={styles.logo}>
            <HistoryIcon/>
        </a>
        
        <a href="#" className={styles.logo}>
            <SettingsIcon/>
        </a>
        <a href="#" className={styles.logo}>
            <SunIcon/>
        </a>

        

    </nav>
}