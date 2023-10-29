import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Counter from './Counter'
import useCountdown from './useCountdown'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [day, hour, minute, second] = useCountdown("December 15, 2023 00:00:00");

  return (
    <>
      <Head>
        <title>FUGA DAS GALINHAS 2</title>
        <meta name="description" content="Fuga das galinhas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/galinha.ico" />
      </Head>
        <main> 
        <div className={styles.container}>
          <img className={styles.foto}
          src='https://cinebuzz.uol.com.br/media/uploads/ginger_e_companhia_encaram_missao_impossivel_em_nova_previa_de_a_fuga_das_galinhas_a_ameaca_dos_nuggets_1.jpg'
          />
          <div className={styles.teste}>
            <h1>FUGA DAS GALINHAS 2</h1>
            <div className={styles.dias}>
              <Counter number={day} title={"Dias"}/>
              <Counter number={hour} title={"Horas"}/>
              <Counter number={minute} title={"Minutos"}/>
              <Counter number={second} title={"Segundos"}/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
