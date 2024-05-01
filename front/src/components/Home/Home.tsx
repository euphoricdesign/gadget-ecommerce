import React from 'react'
import CardList from '../CardList/CardList'
import CardHome from '../CardHome/CardHome'
import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <>
          <div className={`${styles.cardContainer} flex w-full mt-24 gap-4 card-container`}>
            <CardHome span={"Iphone 15 Pro"} heading={"Apple Iphone 15 PRO Max Black Titanium"} width={300} pTop={"-30%"} pLeft={"55%"} />
            <CardHome span={"Headphones"} heading={"Beats Studio Pro Wireless Headphones"} pTop={"23%"} pLeft={"46%"} width={316} />
          </div>
          <CardList />
    </>
  )
}

export default Home