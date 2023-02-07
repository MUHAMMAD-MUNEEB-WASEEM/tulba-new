import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "/styles/castle/castle.module.scss";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import style from "/styles/Rsvp/Rsvp.module.scss";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Castle_carousel from './Carousel';
import CastleForm from './CastleForm';

const cities = ['Abbottabad', 'Astore', 'Attock', 'Awaran', 'Badin', 'Bagh', 'Bahawalnagar', 'Bahawalpur', 'Bajaur', 'Bannu', 'Barkhan', 'Batagram', 'Bhakkar', 'Bhimber', 'Buner', 'Chagai', 'Chakwal', 'Charsadda', 'Chiniot', 'Dadu', 'Darel', 'Dera-Bugti', 'Dera-Ghazi-Khan', 'Dera-Ismail-Khan', 'Diamer', 'Duki', 'Faisalabad', '', 'Ghizer', 'Ghotki', 'Gilgit', 'Gujranwala', 'Gujrat', 'Gupis', 'Yasin', 'Gwadar', 'Hafizabad', 'Hangu', 'Haripur', 'Harnai', 'Hattian', 'Haveli', 'Hunza', 'Hyderabad', 'Islamabad', 'Jacobabad', 'Jafarabad', 'Jamshoro', 'JhalMagsi', 'Jhang', 'Jhelum', 'Kachhi', 'Kalat', 'Karachi-Central', 'Karachi-East', 'Karachi-South', 'Karachi-West', 'Karak', 'Kashmore', 'Kasur', 'Kech', 'Khairpur', 'Khanewal', 'Kharan', 'Kharmang', 'Khushab', 'Khuzdar', 'Khyber', 'Killa-Abdullah', 'Kohat', 'Kohlu', 'Kolai-Pallas', 'Korangi', 'Kotli', 'Kurram', 'Lahore', 'Lakki-Marwat', 'Larkana', 'Lasbela', 'Layyah', 'Lodhran', 'Loralai', 'Lower-Chitral', 'Lower-Dir', 'Lower-Kohistan', 'Malakand', 'Malir', 'Mandi-Bahauddin', 'Mansehra', 'Mardan', 'Mastung', 'Matiari', 'Mianwali', 'Mirpur-Khas', 'Mirpur', 'Mohmand', 'Multan', 'Musakhel', 'Muzaffarabad', 'Muzaffargarh', 'Nagar', 'Nankana-Sahib', 'Narowal', 'Naseerabad', 'Naushahro-Firoze', 'Neelum', 'North-Waziristan', 'Nowshera', 'Nushki', 'Okara', 'Orakzai', 'Pakpattan', 'Panjgur', 'Peshawar', 'Pishin', 'Poonch', 'Qambar-Shahdadkot', 'Qilla-Saifullah', 'Quetta', 'Rahim-Yar-Khan', 'Rajanpur', 'Rawalpindi', 'Roundu', 'Sahiwal', 'Sanghar', 'Sargodha', 'Shaheed-Benazirabad', 'Shaheed', 'Sikandarabad', 'Shangla', 'Sheikhupura', 'Sherani', 'Shigar', 'Shikarpur', 'Sialkot', 'Sibi', 'Skardu', 'Sohbatpur', 'South', 'Waziristan', 'Sudhnutti', 'Sujawal', 'Sukkur', 'Swabi', 'Swat', 'Tando', 'Allahyar', 'Tando', 'Muhammad', 'Khan', 'Tangir', 'Tank', 'Tharparkar', 'Thatta', 'Toba', 'Tek', 'Singh', 'Tor', 'Ghar', 'Umerkot', 'Upper', 'Chitral', 'Upper', 'Dir', 'Upper', 'Kohistan', 'Vehari', 'Washuk', 'Zhob', 'Ziarat'];


const Banner = () => {
    return (
        <>
            <Container className={`my-5 ${styles.castlebanner}`}>
                <Row>
                    <Col lg={6}>
                        <Row className="g-2 my-5">
                            <Col md={5} className="btstrp p-0">
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Email address">
                                    <Form.Control
                                        type="email"
                                        placeholder="Search Vendors, Catering"
                                        className={styles.input}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md={5} className="btstrp p-0">
                                {/* <FloatingLabel
                                    controlId="floatingSelectGrid"
                                    label="Select Location"
                                >
                                    <Form.Select
                                        aria-label="Floating label select example"
                                        className={styles.input}
                                    >

                                        <option>In (E.g. Karachi)</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Lahore">Lahore</option>
                                    </Form.Select>
                                </FloatingLabel> */}
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
                            <Col md={2} className="p-0">
                                <Button className={`py-3 ${styles.inputbtn}`}>Search here</Button>
                            </Col>
                        </Row>
                        <Breadcrumb className={style.banner}>
                            <Breadcrumb.Item href="#" className={style.brdcrumb}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className={style.brdcrumb}>Vendors</Breadcrumb.Item>
                            <Breadcrumb.Item active className={style.actbrdcrumb}>The Groomy</Breadcrumb.Item>
                        </Breadcrumb>

                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <h2>The Groomy Castle</h2>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex justify-content-start">
                            <h4>$200</h4>
                            <span>/ PER EVENT</span>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <AiOutlineHeart
                            className={styles.icon}
                        />
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex justify-content-start">
                            <GoLocation
                                className={styles.map} />
                            <span>Bekasi, Jawa Barat Hall Al khema</span>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex  justify-content-end">
                            <AiFillStar
                                className={styles.star}
                            />
                            <AiFillStar
                                className={styles.star}
                            />
                            <AiFillStar
                                className={styles.star}
                            />
                            <AiFillStar
                                className={styles.star}
                            />
                            <AiFillStar
                                className={styles.star}
                            />
                            <p>5</p>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col lg={8}>
                        <Castle_carousel />
                    </Col>

                    <Col lg={4}>
                        <CastleForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Banner;