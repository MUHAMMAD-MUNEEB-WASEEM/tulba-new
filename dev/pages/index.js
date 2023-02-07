import styles from "/styles/Home.module.scss";
// import HomeTopSection from "modules/home/topsection";
import Footer from "layout/footer";
import Header from "layout/header";
import HomeTopSection from "modules/home/topsection";
import 'bootstrap/dist/css/bootstrap.css';
import Faq from "modules/home/faq";
import Template from "modules/home/template";
import Plan from "modules/home/plan";
import Vendors from "modules/home/Vendors";
import Testimonial from "modules/home/Testimonial";
import Browse from "modules/home/Browse";
////////////////////
import { store } from './../redux/store'
import { Provider } from 'react-redux'

// import Signup from "./signup";
// import Login from "./loginin";
// import ForgotPassword from "./forgotpassword";
export default function Home() {
  return (
    <Provider store={store}>
    <div className={styles.mainPage_section}>

      <Header />
      <HomeTopSection />
      <Plan />
      <Browse />
      <Template />
      <Testimonial />
      <Vendors />
      <Faq />
      <Footer />
      {/* <Signup /> */}
      {/* <Login/> */}
      {/* <ForgotPassword/> */}
    </div>
    </Provider>
  );
}
