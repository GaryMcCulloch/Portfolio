import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import styled from 'styled-components';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const School = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'MBA International Management'}
                        subTitle={'University of Abertay Dundee'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis?'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'MBA International Management'}
                        subTitle={'University of Abertay Dundee'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis?'} 
                    />
                    <div className="u-margin-bottom">
                        <ResumeItem 
                            year={'2015 - 2020'} 
                            title={'MBA International Management'}
                            subTitle={'University of Abertay Dundee'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis?'} 
                        />
                    </div>
                </div>
                <div className="small-title">
                    <SmallTitle icon={School} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'MBA International Management'}
                        subTitle={'University of Abertay Dundee'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis?'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'MBA International Management'}
                        subTitle={'University of Abertay Dundee'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis?'} 
                    />
                    <div className="u-margin-bottom">
                        <ResumeItem 
                            year={'2015 - 2020'} 
                            title={'MBA International Management'}
                            subTitle={'University of Abertay Dundee'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aspernatur at quos provident sint. Dolorem, laboriosam facere non officiis aspernatur natus cum quasi praesentium temporibus incidunt voluptas totam reiciendis?'} 
                        />
                    </div>
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem; 
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume
