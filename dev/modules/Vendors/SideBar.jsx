import React, { useState } from 'react';
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Pagination from 'react-bootstrap/Pagination';
import styles from "/styles/vendors/vendor.module.scss";
import Vector from "public/assests/store/weddingcard.png";
import stylesButton from "/styles/modal/modal.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillStar, AiOutlineUsergroupAdd, AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { GiElvenCastle, GiCastle, GiNestedHearts, GiLargeDress } from "react-icons/gi";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

const cities = ['Abbottabad', 'Astore', 'Attock', 'Awaran', 'Badin', 'Bagh', 'Bahawalnagar', 'Bahawalpur', 'Bajaur', 'Bannu', 'Barkhan', 'Batagram', 'Bhakkar', 'Bhimber', 'Buner', 'Chagai', 'Chakwal', 'Charsadda', 'Chiniot', 'Dadu', 'Darel', 'Dera-Bugti', 'Dera-Ghazi-Khan', 'Dera-Ismail-Khan', 'Diamer', 'Duki', 'Faisalabad', '', 'Ghizer', 'Ghotki', 'Gilgit', 'Gujranwala', 'Gujrat', 'Gupis', 'Yasin', 'Gwadar', 'Hafizabad', 'Hangu', 'Haripur', 'Harnai', 'Hattian', 'Haveli', 'Hunza', 'Hyderabad', 'Islamabad', 'Jacobabad', 'Jafarabad', 'Jamshoro', 'JhalMagsi', 'Jhang', 'Jhelum', 'Kachhi', 'Kalat', 'Karachi-Central', 'Karachi-East', 'Karachi-South', 'Karachi-West', 'Karak', 'Kashmore', 'Kasur', 'Kech', 'Khairpur', 'Khanewal', 'Kharan', 'Kharmang', 'Khushab', 'Khuzdar', 'Khyber', 'Killa-Abdullah', 'Kohat', 'Kohlu', 'Kolai-Pallas', 'Korangi', 'Kotli', 'Kurram', 'Lahore', 'Lakki-Marwat', 'Larkana', 'Lasbela', 'Layyah', 'Lodhran', 'Loralai', 'Lower-Chitral', 'Lower-Dir', 'Lower-Kohistan', 'Malakand', 'Malir', 'Mandi-Bahauddin', 'Mansehra', 'Mardan', 'Mastung', 'Matiari', 'Mianwali', 'Mirpur-Khas', 'Mirpur', 'Mohmand', 'Multan', 'Musakhel', 'Muzaffarabad', 'Muzaffargarh', 'Nagar', 'Nankana-Sahib', 'Narowal', 'Naseerabad', 'Naushahro-Firoze', 'Neelum', 'North-Waziristan', 'Nowshera', 'Nushki', 'Okara', 'Orakzai', 'Pakpattan', 'Panjgur', 'Peshawar', 'Pishin', 'Poonch', 'Qambar-Shahdadkot', 'Qilla-Saifullah', 'Quetta', 'Rahim-Yar-Khan', 'Rajanpur', 'Rawalpindi', 'Roundu', 'Sahiwal', 'Sanghar', 'Sargodha', 'Shaheed-Benazirabad', 'Shaheed', 'Sikandarabad', 'Shangla', 'Sheikhupura', 'Sherani', 'Shigar', 'Shikarpur', 'Sialkot', 'Sibi', 'Skardu', 'Sohbatpur', 'South', 'Waziristan', 'Sudhnutti', 'Sujawal', 'Sukkur', 'Swabi', 'Swat', 'Tando', 'Allahyar', 'Tando', 'Muhammad', 'Khan', 'Tangir', 'Tank', 'Tharparkar', 'Thatta', 'Toba', 'Tek', 'Singh', 'Tor', 'Ghar', 'Umerkot', 'Upper', 'Chitral', 'Upper', 'Dir', 'Upper', 'Kohistan', 'Vehari', 'Washuk', 'Zhob', 'Ziarat'];

const SideBar = () => {
    const [paper, showPaper] = useState(false);
    const [price, showPrice] = useState(false);
    const [type, showType] = useState(false);
    const [mobileCard, showMobileCard] = useState(false);

    return (
        <div className='mt-5'>
            {mobileCard &&
                <div className='w-screen'>
                    <div className={styles.mobileCard}>
                        <div className='d-flex justify-content-end'><div onClick={() => { showMobileCard(!mobileCard); }} className={styles.closeButton}>x</div> </div>
                        <div onClick={() => showPaper(!paper)} className={`${styles.sideBarList} ${paper && styles.actvelink} `}>
                            {!paper ?
                                <AiOutlineRight size={20} />
                                :
                                <AiOutlineDown size={20} />
                            }
                            <span>  Wedding Vendors </span>
                        </div>

                        {paper &&
                            <div className={styles.expandable} >
                                <div>
                                    <input type='checkbox' />
                                    <span>Matte</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>Glossy</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>Handmade</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>Mylar</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>Recycled</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>Parchment</span>
                                </div>

                            </div>
                        }
                        <div onClick={() => showPrice(!price)} className={`${styles.sideBarList} ${price && styles.actvelink} `}>
                            {!price ?
                                <AiOutlineRight size={20} />
                                :
                                <AiOutlineDown size={20} />
                            }
                            <span>  Price </span>
                        </div>
                        {price &&
                            <div className={styles.expandable} >
                                <div>
                                    <input type='checkbox' />
                                    <span>$1-$10</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>$11-$20</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>$20-$30</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>$30-$50</span>
                                </div>
                            </div>
                        }
                        <div onClick={() => showType(!type)} className={`${styles.sideBarList} ${type && styles.actvelink} `}>
                            {!type ?
                                <AiOutlineRight size={20} />
                                :
                                <AiOutlineDown size={20} />
                            }
                            <span>Location </span>
                        </div>
                        {type &&
                            <div className={styles.expandable} >
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
                                {/* <div>
                                    <input className={styles.input} type='checkbox' />
                                    <span>Cards</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>Boxed Gifting</span>
                                </div>
                                <div>
                                    <input type='checkbox' />
                                    <span>Novel Concepts</span>
                                </div> */}
                            </div>
                        }
                    </div>
                </div>
            }

            {/* <Container fluid>
                <Row> */}
            <Col md={12} className={styles.filterContainer}>
                <h1>Categories</h1>
                <div>
                    <div onClick={() => showPaper(!paper)} className={`${styles.sideBarList} d-flex !flex ${paper && styles.actvelink} `}>
                        <div>
                            {!paper ?
                                <AiOutlineRight size={20} />
                                :
                                <AiOutlineDown size={20} />
                            }
                        </div>
                        <span>  Wedding Vendors </span>
                    </div>

                    {paper &&
                        <div className={styles.expandable} >
                            <div>
                                <input type='checkbox' />
                                <span>Matte</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>Glossy</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>Handmade</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>Mylar</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>Recycled</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>Parchment</span>
                            </div>

                        </div>
                    }
                    <div onClick={() => showPrice(!price)} className={`${styles.sideBarList} ${price && styles.actvelink} `}>
                        {!price ?
                            <AiOutlineRight size={20} />
                            :
                            <AiOutlineDown size={20} />
                        }
                        <span>  Price </span>
                    </div>
                    {price &&
                        <div className={styles.expandable} >
                            <div>
                                <input type='checkbox' />
                                <span>$1-$10</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>$11-$20</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>$20-$30</span>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <span>$30-$50</span>
                            </div>
                        </div>
                    }
                    <div onClick={() => showType(!type)} className={`${styles.sideBarList} ${type && styles.actvelink} `}>
                        {!type ?
                            <AiOutlineRight size={20} />
                            :
                            <AiOutlineDown size={20} />
                        }
                        <span>Location </span>
                    </div>

                    {type &&
                        <div className={styles.expandable} >
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

                        </div>
                    }
                </div>
            </Col>


            <Col md={3} className={styles.filterButton}>
                <span>1,000+ relevant results</span>
                <button onClick={() => { showMobileCard(!mobileCard); }} > Filters </button>
            </Col>

            {/* 
                </Row>
            </Container> */}

        </div>
    );
};

export default SideBar;