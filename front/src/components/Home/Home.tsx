import CardList from '../CardList/CardList'
import CardHome from '../CardHome/CardHome'
import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <>
          <div className={`${styles.cardContainer} flex w-full gap-4 card-container `}>
            <CardHome span={"Iphone 15 Pro"} heading={"Apple Iphone 15 PRO Max Black Titanium"} width={300} pTop={"-30%"} pLeft={"55%"} />
            <CardHome span={"Headphones"} heading={"Beats Studio Pro Wireless Headphones"} pTop={"23%"} pLeft={"46%"} width={316} />
          </div>
          <h2 className='text-2xl font-bold text-[#454545] mb-4 desktop:mt-10'>Featured</h2>
          <CardList />
    </>
  )
}

export default Home