import Health from "../../Components/Health/Health";
import Patient from "../../Components/Patient/Patient";
import Layout from "../../Layout/Layout/Layout";

function Home(){
    return(
        <Layout>
            <section>
                <Health/>
            </section>
            <section>
                <Patient/>
            </section>
        </Layout>
    )
     
    
}
export default Home;