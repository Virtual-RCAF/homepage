import Layout from "../components/layout"
import Card from "../components/card"
import styles from "../styles/index.module.css"

export default function Home() {
    return  (
        <Layout>
            <div className={`${styles.imagePanel} flex justify-center h-full items-center flex-col`}>
                <h1 className={styles.title}>Virtual Canadian Air Force</h1>
                <h3 className={styles.subtitle}>Omnis Viam Aquilonis</h3>
            </div>
            <div>
                <div className={styles.infoPanel}>
                    <h2 className={styles.sectionHeader}>Welcome To The <strong>Next Generation</strong> of VATSIM Special Operations.</h2>
                    <h5 className={styles.sectionSubheader}>Check Out Our Operational Wings!</h5>
                </div>
                <div className={styles.cardPanel}>
                    <Card title="Fighter" image="/images/fighter.png"></Card>
                    <Card title="Transport" image="/images/transport.png"></Card>
                    <Card title="Tactical Aviation" image="/images/tactical.png"></Card>
                    <Card title="SAR/Maritime Patrol" image="/images/sar.png"></Card>
                    <Card title="Training" image="/images/training.png"></Card>
                </div>
                <div className={styles.articalPanel}>
                    <div className={styles.artical}>

                    </div>
                    <div className={styles.moreInfo}>

                    </div>
                </div>
            </div>
        </Layout>
    )
}