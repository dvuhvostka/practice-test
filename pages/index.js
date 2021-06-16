import Head from 'next/head'
import AboutBlock from '../components/AboutBlock'
import CardBlock from '../components/CardBlock'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import styles from '../styles/promo/Home.module.css'
import CardsAbout from '../components/CardsAbout'
import GraphBlock from '../components/GraphBlock'
import BuyBlock from '../components/BuyBlock'
import TokenAllocations from '../components/TokenAllocation'
import RoadMap from '../components/RoadMap'
import FormBlock from '../components/FormBlock'
import FaqSection from '../components/FaqSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header/>
        <MainSection/>
        <CardBlock/>
        <AboutBlock/>
        <CardsAbout/>
        </div>
        <div className={styles.graphBg}>
          <div className={styles.wrapper}>
          <GraphBlock/>
          </div>
        </div>
        <div className={styles.wrapper}>
        {/* <BuyBlock/> */}
        <FaqSection/>
        <TokenAllocations/>
        <RoadMap/>
        </div>
      
      <div className={styles.formBlock}>
        <div className={styles.wrapper}>
          <FormBlock/>
        </div>
      </div>
    </div>
  )
}
