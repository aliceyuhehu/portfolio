import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="https://today.duke.edu/sites/default/files/styles/7_4_max_width_575px/public/legacy-files/Logo%20HERO_0.jpg?itok=h2cf411U"
								alt="dukeoit"
								className="work-image"
							/>
							<div className="work-title">Duke University OIT</div>
							<div className="work-subtitle">
								Cybersecurity Full-Stack Engineer
							</div>
							<div className="work-duration">May 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012011/cicc.png?itok=b7J92nu-"
								alt="cicc"
								className="work-image"
							/>
							<div className="work-title">CICC US Securities</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">May 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://aplic.io/uploads/64784a6a-d171-49d1-88c4-408d0d10f153_logo_uni_profile_86001.jpg"
								alt="csdept"
								className="work-image"
							/>
							<div className="work-title">Duke University CS Department</div>
							<div className="work-subtitle">
								Teaching Assistant for Data Structures & Algorithms (CS201)
							</div>
							<div className="work-duration">Jan 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://corporate.dukehealth.org/sites/default/files/2019-10/Screen%20Shot%202019-06-26%20at%209.00.59%20AM_0.png"
								alt="csdept"
								className="work-image"
							/>
							<div className="work-title">Duke Hospital Emergency Department</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">Aug 2022 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="https://yt3.googleusercontent.com/ytc/AGIKgqOpZeZ_pIB0ZBZtRMfC5mMZIctOtHB9Ndyeqj3V=s900-c-k-c0x00ffffff-no-rj"
								alt="tysi"
								className="work-image"
							/>
							<div className="work-title">Canada Learning Code</div>
							<div className="work-subtitle">
								Computer Science Instructor
							</div>
							<div className="work-duration">May 2019 - Aug 2022</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4E0BAQEvvCmq_GYS8g/company-logo_200_200/0/1597802920072?e=2147483647&v=beta&t=VbVGetEGIyqnQKeewLM-6MrT549UIR-tW1IooSsoX8E"
								alt="tysi"
								className="work-image"
							/>
							<div className="work-title">Toronto Youth STEM & Innovation Conference</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">May 2019 - Aug 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
