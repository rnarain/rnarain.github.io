import React from "react";
 import "./Education.css";
import EducationTimeline from "../../components/education/EducationTimeline";
 import { education } from "../../portfolio";
import { Fade } from "react-reveal";
import { Card , Timeline } from 'antd';

export default function Education() {
    if(education.length > 0 ){
        return (
            <div id="education" className="main">
                <Fade bottom duration={1000} distance="20px">
                <div className="education-cards-div" id="education">
                    <div >
                        <h1 className="education-heading">Education</h1>
                        <div className="row">
                        <div className="col-lg-8 col-sm-8 col-xs-12">
                        {education.map((exp) => {
                            return (
                                <EducationTimeline
                                    education={{
                                     ...exp
                                    }}
                                />
                            );
                        })}
                 </div>
                 </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
