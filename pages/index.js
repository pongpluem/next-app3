import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


import { Button } from 'primereact/button';
        

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <button>Test</button>
     <br></br>
     <br></br>
     <Button icon="pi pi-check" />
     <br></br>
     <br></br>
     <Button label="Submit" icon="pi pi-check" />
    </>
  )
}
