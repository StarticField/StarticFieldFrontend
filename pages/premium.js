import {Image, Text} from "@nextui-org/react";
import {Layout} from "../components/Layout";
import styles from "../styles/premium.module.css"

export default function Premium(){
    return(
        <Layout>
            <div>
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
                            <Text><li>Discord Community membership</li></Text>
                            <Text><li>Access to all knowledge sessions</li></Text>
                       </div>
                       <div className={styles.tableRight}>
                           <Text h4>Premium Plan (INR 30 per month, INR 80 for 3 months and INR 199 for an year)</Text>
                           <Text><li>Discord Community membership</li></Text>
                           <Text><li>Audio/Video Interaction with guests during knowledge sessions</li></Text>
                           <Text><li>Participation in lateral pitches</li></Text>
                           <Text><li>Internship and Freelance opportunities with Startups</li></Text>
                       </div>
                   </div>
                   <Text h2 className={styles.headings}>For Individual Students</Text>
                   <div  className={styles.table}>
                       <div className={styles.tableLeft} style={{width: '100%'}}>
                           <Text h4>Premium Plan (INR 60 per month, INR 160 for 3 months and INR 399 for an year)</Text>
                           <Text><li>Individual Premium membership for 4 members of the startup with the benefits described above</li></Text>
                           <Text><li>Startup Idea Evaluation and Strategy Roadmap</li></Text>
                           <Text><li>Customized Learning and Research Plan for the Startup</li></Text>
                           <Text><li>Quarterly Business Review</li></Text>
                           <Text><li>Connect with validated freelancers.</li></Text>
                       </div>
                   </div>
                   <div style={{ height: "10vh" }}></div>
                   <div  className={styles.table}>
                       <div className={styles.tableLeft} style={{width: '100%'}}>
                           <Text h4>Premium Plan (INR 60 per month, INR 160 for 3 months and INR 399 for an year)</Text>
                           <Text><li>Individual Premium membership for 4 members of the startup with the benefits described above</li></Text>
                           <Text><li>Startup Idea Evaluation and Strategy Roadmap</li></Text>
                           <Text><li>Customized Learning and Research Plan for the Startup</li></Text>
                           <Text><li>Quarterly Business Review</li></Text>
                           <Text><li>Connect with validated freelancers.</li></Text>
                       </div>
                   </div>
                   <div style={{ height: "5vh" }}></div>
                   <Text small i>*This program starts Dec 1, 2022</Text>
                   <div style={{ height: "10vh" }}></div>
                   <div  className={styles.table}>
                       <div className={styles.tableLeft} style={{width: '100%'}}>
                           <Text h4>For contributors</Text>
                           <Text><li>Participation in Lateral Pitches.</li></Text>
                           <Text><li>Connect with student startups.</li></Text>
                       </div>
                   </div>
               </div>
            </div>
            <div style={{ height: "10vh" }}></div>
        </Layout>
    )
}