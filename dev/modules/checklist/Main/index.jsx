import React from 'react';
import styles from 'styles/checklist/Main.module.scss';
import Image from 'next/image';
import checkList from '../../../public/assests/checklist/checklist.png';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Main = () => {
    const tasks = ['one', 'one', 'one', 'one', 'one', 'one'];
    return (
        <div className={styles.main}>
            <div className={styles.first} >
                <div className={styles.titleContainer}>
                    <div className={styles.icon}>
                        {/* <Image
                            src={checkList}
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            objectFit='cover'
                            alt=''
                        /> */}
                    </div>
                    <div className={styles.title}>Checklist</div>
                </div>
                <div className={styles.search}>
                    <p>Search All Your Tasks here</p>
                    <div>
                        {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div> */}
                        <input type="search" name="search" id="search" placeholder='Search..' />
                    </div>
                </div>

                <div className={styles.date}>
                    <div className={styles.icon}>
                        {/* <Image
                            src={checkList}
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            objectFit='cover'
                            alt=''
                        /> */}
                    </div>
                    <div className={styles.title}>Date</div>

                </div>
                <div className={styles.list}>

                    <ul>
                        <li>From 1 to 3 Months</li>
                        <li>From 2 to 4 Months</li>
                        <li>From 3 to 6 Months</li>
                        <li>From 2 to 6 Months</li>
                        <li>From 12 to 9 Months</li>
                        <li>From 4 to 12 Months</li>
                    </ul>
                </div>
                <div className={styles.status}>
                    <div className={styles.icon}>
                        {/* <Image
                            src={checkList}
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            objectFit='cover'
                            alt=''
                        /> */}
                    </div>
                    <div className={styles.title}>Status</div>
                </div>
                <div className={styles.subStatus}>
                    <div>Success</div>
                    <div>In Process</div>
                </div>
            </div>
            <div className={styles.second} >
                <div className={styles.top}>
                    <div className={styles.heading}> <span></span> Tasks</div>
                    <div className={styles.button}> + Add Your New Task</div>
                    <div></div>
                </div>
                <div className={styles.desc}>
                    Add your daily Tasks here and get them processed, see the Status.
                </div>
                <div className={styles.subHeading}>
                    <div className={styles.left} >Over One Year  &nbsp;&nbsp;&nbsp;| &nbsp; <span> Before Oct 2022</span> </div>
                    <div className={styles.subStatus}>
                        <div>Success</div>
                        <div>In Process</div>
                    </div>
                </div>

                <div className={styles.gray} >
                    {tasks.map((item, index) => (
                        <div key={index} className={styles.task}>
                            <div className={styles.corner}></div>
                            <div className={styles.middle}>Get the Dress from the Mall, Akbar Store</div>
                            <div className={styles.corner}> <div></div> </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className={styles.third} >
                <div>icon</div>
                <div>
                    <span className={styles.one}>Checklist Completion</span>
                    <span className={styles.two}>Your progress of Checklist</span>
                </div>
                <div>
                    <div className={styles.three}>

                        <Progress percent={88}
                            width={120}
                            theme={{
                                success: {
                                    color: 'f85757'
                                },
                                active: {
                                    color: '#f85757'
                                },
                                default: {
                                    color: '#f85757'
                                }
                            }}
                        />
                    </div>

                    <div className={styles.four}>
                        2 out of 10 tasks are completed
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;