/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col } from 'react-bootstrap';
import styles from "/styles/home/Index.module.scss";
import Image from "next/image";
import Rectangle from "public/assests/home_img/Rectangle 764.svg";
import Rectangle1 from "public/assests/home_img/Rectangle 375.svg";
import Rectangle2 from "public/assests/home_img/Rectangle 374.svg";
import stroke from "public/assests/home_img/Red stroke.svg";
import stroke1 from "public/assests/home_img/Blue stroke.svg";
import Group from "public/assests/home_img/Group.svg";
import temp from "public/assests/home_img/The Collage.svg";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineSearch } from "react-icons/ai";

const cities = ['Abbottabad', 'Astore', 'Attock', 'Awaran', 'Badin', 'Bagh', 'Bahawalnagar', 'Bahawalpur', 'Bajaur', 'Bannu', 'Barkhan', 'Batagram', 'Bhakkar', 'Bhimber', 'Buner', 'Chagai', 'Chakwal', 'Charsadda', 'Chiniot', 'Dadu', 'Darel', 'Dera-Bugti', 'Dera-Ghazi-Khan', 'Dera-Ismail-Khan', 'Diamer', 'Duki', 'Faisalabad', '', 'Ghizer', 'Ghotki', 'Gilgit', 'Gujranwala', 'Gujrat', 'Gupis', 'Yasin', 'Gwadar', 'Hafizabad', 'Hangu', 'Haripur', 'Harnai', 'Hattian', 'Haveli', 'Hunza', 'Hyderabad', 'Islamabad', 'Jacobabad', 'Jafarabad', 'Jamshoro', 'JhalMagsi', 'Jhang', 'Jhelum', 'Kachhi', 'Kalat', 'Karachi-Central', 'Karachi-East', 'Karachi-South', 'Karachi-West', 'Karak', 'Kashmore', 'Kasur', 'Kech', 'Khairpur', 'Khanewal', 'Kharan', 'Kharmang', 'Khushab', 'Khuzdar', 'Khyber', 'Killa-Abdullah', 'Kohat', 'Kohlu', 'Kolai-Pallas', 'Korangi', 'Kotli', 'Kurram', 'Lahore', 'Lakki-Marwat', 'Larkana', 'Lasbela', 'Layyah', 'Lodhran', 'Loralai', 'Lower-Chitral', 'Lower-Dir', 'Lower-Kohistan', 'Malakand', 'Malir', 'Mandi-Bahauddin', 'Mansehra', 'Mardan', 'Mastung', 'Matiari', 'Mianwali', 'Mirpur-Khas', 'Mirpur', 'Mohmand', 'Multan', 'Musakhel', 'Muzaffarabad', 'Muzaffargarh', 'Nagar', 'Nankana-Sahib', 'Narowal', 'Naseerabad', 'Naushahro-Firoze', 'Neelum', 'North-Waziristan', 'Nowshera', 'Nushki', 'Okara', 'Orakzai', 'Pakpattan', 'Panjgur', 'Peshawar', 'Pishin', 'Poonch', 'Qambar-Shahdadkot', 'Qilla-Saifullah', 'Quetta', 'Rahim-Yar-Khan', 'Rajanpur', 'Rawalpindi', 'Roundu', 'Sahiwal', 'Sanghar', 'Sargodha', 'Shaheed-Benazirabad', 'Shaheed', 'Sikandarabad', 'Shangla', 'Sheikhupura', 'Sherani', 'Shigar', 'Shikarpur', 'Sialkot', 'Sibi', 'Skardu', 'Sohbatpur', 'South', 'Waziristan', 'Sudhnutti', 'Sujawal', 'Sukkur', 'Swabi', 'Swat', 'Tando', 'Allahyar', 'Tando', 'Muhammad', 'Khan', 'Tangir', 'Tank', 'Tharparkar', 'Thatta', 'Toba', 'Tek', 'Singh', 'Tor', 'Ghar', 'Umerkot', 'Upper', 'Chitral', 'Upper', 'Dir', 'Upper', 'Kohistan', 'Vehari', 'Washuk', 'Zhob', 'Ziarat'];

const HomeTopSection = () => {
  return (
    <>

      <Container>
        <Row>
          <Col lg={8} md={12} sm={12} xs={12} className={` ${styles.order2}`}>

            <div className={`my-2  ${styles.top_head} `}>
              <div className='d-flex  justify-content-start'>
                <div className={`my-4  ${styles.head_border}`}></div>
                <h4> WE got the best tools for your event, so hop on.</h4>
              </div>
              <Row className="g-2">
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-start align-item-center">
                    <span className={`mt-4  ${styles.headspan} `}>
                      When Your
                    </span>
                    <span className='d-flex flex-column align-items-start'>
                      <span className="ms-auto">
                        <Image
                          src={Group}
                        />
                      </span>
                      <div className={styles.dreamContainer}>

                        <span className={`${styles.dream}`}>Dream</span>
                        <Image
                          src={stroke}
                          width={"100px"}
                        />
                      </div>
                    </span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-start ">
                    <span className='d-flex flex-column align-items-start mx-2'>
                      <div className={styles.eventContainer}>

                        <span className={` ${styles.event}`}> Event </span>
                        <Image
                          src={stroke1}
                          width={"100px"}
                        />
                      </div>
                    </span>
                    <span className={styles.headspan2}>
                      Comes True
                    </span>
                    <span className={`mt-5 ${styles.dot}`}></span>
                  </div>

                </Col>
              </Row>
              <p className='my-2 '>We got the best event planners and most economical setup for event so lets
                do this together and make your event memorable.</p>
              <Row className={`g-2 my-5 flex gap-1 ${styles.form}`}>
                <Col md={4} className="btstrp p-0">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Search Vendors, Catering">

                    <Form.Control
                      type="text"


                      placeholder="Search Vendors, Catering"
                      className={styles.input}
                    // <AiOutlineSearch />

                    />
                  </FloatingLabel>
                </Col>
                <Col md={4} className="btstrp p-0">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Search Location">

                    <Form.Control
                      type="text"
                      list='locations'


                      placeholder="Search Vendors, Catering"
                      className={styles.input}
                    // <AiOutlineSearch />

                    />

                    <datalist id="locations" className={`hidden text-black bg-white`} >
                      {cities.map((item, index) =>
                        (<option className='bg-white' key={index} value={item}>{item}</option>)
                      )}
                    </datalist>
                  </FloatingLabel>
                </Col>

                <Col md={2} sm={12} className="p-0">
                  <Button className={`px-2 ${styles.inputbtn}`}>Search here</Button>
                </Col>
              </Row>

            </div>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <div className="d-flex justify-content-center" >
              <div className={styles.order1}>
                <Image
                  src={Rectangle}
                  alt="googlelogo"
                  className={`${styles.top_img1} img-fluid `}

                />{" "}
                <Image
                  src={Rectangle2}
                  alt="googlelogo"
                  className={`${styles.top_img2} img-fluid `}
                />
              </div>
              <div className={styles.order1}>
                <Image
                  src={Rectangle1}
                  alt="googlelogo"
                  className={`${styles.top_img} img-fluid `}
                  width={"650px"}
                  height={"1500px"}
                />{" "}
              </div>
            </div>
            {/* <div> */}

            {/* <Image
                  src={temp}
                  alt="googlelogo"
                  height={"100px"}
                  width={"100px"}
                  layout="fixed"

                  /> */}
            {/* <Image 
                  src={collage}
                  layout="fixed"
                  height={"100px"}
                  width={"100px"}
                  /> */}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeTopSection;