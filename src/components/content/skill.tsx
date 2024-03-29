import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <div className="arlo_tm_section" id='skills'>
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Kĩ năng Frontend</h4>
                            </div>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p> */}
                            <ul>
                                <li>aaaaa</li>
                                <li>bbbbb</li>
                            </ul>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                        <span>
                                            <span className="label">
                                                HTML/CSS
                                            </span>
                                            <span className="number">95%</span>
                                        </span>
                                        <div className="arlo_tm_bar_bg">
                                            <ProgressBar
                                                completed={95}
                                                height="8px"
                                                bgColor="#333"
                                                isLabelVisible={false}
                                            />
                                            {/* <div className="arlo_tm_bar_wrap">
                                                <div className="arlo_tm_bar"></div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                        <span><span className="label">Css - <span className="experience">3 years of experience</span></span><span className="number">85%</span></span>
                                        <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                                        <span><span className="label">HTML - <span className="experience">4 years of experience</span></span><span className="number">75%</span></span>
                                        <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                        <span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
                                        <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Kĩ năng Backend</h4>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                        <span><span className="label">Wordpress - <span className="experience">5 years of experience</span></span><span className="number">95%</span></span>
                                        <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                        <span><span className="label">Css - <span className="experience">3 years of experience</span></span><span className="number">85%</span></span>
                                        <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                                        <span><span className="label">HTML - <span className="experience">4 years of experience</span></span><span className="number">75%</span></span>
                                        <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                        <span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
                                        <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill