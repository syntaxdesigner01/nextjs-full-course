import { error } from 'console'
import style from './style.module.css'
import type { Metadata } from 'next'

export const metadata:Metadata={
      title:'About Us',
      description:'This is the about page',
      keywords:'',
      icons:''  
}

export default function About() {

 
    throw new Error('hell')
  return (
    <div className={style.main}>About page</div>
  )
}
