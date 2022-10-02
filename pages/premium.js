import {Image, Text} from "@nextui-org/react";
import styles from "../styles/premium.module.css"

export default function Premium(){
    return(
            <>
                <div className={styles.hero}>
                   <div className={styles.background2}></div>
                   <Image className={styles.heroImg} src={'cover3.png'} alt={''}></Image>
                   <div className={styles.heroText}>
                       <Text i>All our services are free till December 1, 2022. Post that below would be the membership plans for various stakeholders.</Text>
                   </div>
                   <Text h2 className={styles.headings}>For Individual Students</Text>
                   <div  className={styles.table}>
                       <div className={styles.tableLeft}>
                            <Text h4>Free Plan</Text>
                            <Text><>Discord Community membership</></Text>
                            <Text><>Access to all knowledge sessions</></Text>
                       </div>
                       <div className={styles.tableRight}>
                           <Text h4>Premium Plan (INR 30 per month, INR 80 for 3 months and INR 199 for an year)</Text>
                           <Text><>Discord Community membership</></Text>
                           <Text><>Audio/Video Interaction with guests during knowledge sessions</></Text>
                           <Text><>Participation in lateral pitches</></Text>
                           <Text><>Internship and Freelance opportunities with Startups</></Text>
                       </div>
                   </div>
                   <Text h2 className={styles.headings}>For student startups</Text>
                   <div  className={styles.table}>
                       <div className={styles.tableLeft} style={{width: '100%'}}>
                           <Text h4>Premium Plan (INR 60 per month, INR 160 for 3 months and INR 399 for an year)</Text>
                           <Text><>Individual Premium membership for 4 members of the startup with the benefits described above</></Text>
                           <Text><>Startup Idea Evaluation and Strategy Roadmap</></Text>
                           <Text><>Customized Learning and Research Plan for the Startup</></Text>
                           <Text><>Quarterly Business Review</></Text>
                           <Text><>Connect with validated freelancers.</></Text>
                       </div>
                   </div>
                   <div style={{ height: "10vh" }}></div>
                   <div  className={styles.table}>
                       <div className={styles.tableLeft} style={{width: '100%'}}>
                           <Text h4>Supercharger Program (5% equity)</Text>
                           <Text>This program is for startups who are serious and want to scale to the next level. This is a comprehensive program for startups from idea to first set of customers and/or seed funding.</Text>
                       </div>
                   </div>
                   <div style={{ height: "5vh" }}></div>
                   <Text small i>*This program starts Dec 1, 2022</Text>
                   <div style={{ height: "10vh" }}></div>
                   <Text h2 className={styles.headings}>For contributors</Text>
                   <div  className={styles.table}>
                       <div className={styles.tableLeft} style={{width: '100%'}}>
                           <Text h4>Premium Plan (INR 120 per month, INR 320 for 3 months, INR 799 for an year)</Text>
                           <Text><>Participation in Lateral Pitches.</></Text>
                           <Text><>Connect with student startups.</></Text>
                       </div>
                   </div>
                </div>
                <div style={{height:'10vh'}}></div>
            </>
    )
}