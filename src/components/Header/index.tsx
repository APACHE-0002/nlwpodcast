import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { CgDarkMode } from 'react-icons/cg';
import Link from 'next/link';

import styles from './styles.module.css';
import { useState } from 'react';


export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

  const [drop, setDrop] = useState(0);
    

    function darkmode(){
        if(drop/2 % 1){
        var all = document.querySelector('.all');
        all.style.background = "white";
        all.style.color= "black";
        setDrop(drop + 1);
        } else{
        var all = document.querySelector('.all');
        all.style.background = "black";
        all.style.color= "white";
        setDrop(drop + 1);
        }
    }

    return(
        <div className="all">
        <header className={styles.headerContainer}>
            <Link href={`/`}>
                <img src="/assets/logo.svg" alt="Podcastr" />
            </Link>

            <p>O melhor para você ouvir, sempre</p>

                <span>
                <CgDarkMode onClick={darkmode}/>
                
                {currentDate}
                </span>
        </header>
        </div>
    )
}