'use client'
import Name from "@/components/Header/name";
import Title from "@/components/Header/title";
import Box from "@/components/SideContent/Box";
import SideContent from "@/components/SideContent/SideContent";
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {IoLocationSharp } from "react-icons/io5"
import {LiaLinkedinIn} from "react-icons/lia"
import {BiSolidContact} from "react-icons/bi"
import MainContent from "@/components/MainContent/MainContent";
import ContentBox from "@/components/MainContent/ContentBox";
import { useRouter } from "next/navigation";
import { Resume } from "@/types"
;
async function getData() {
  const res = await fetch('https://flask-resume-api.onrender.com/api/resume')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function HomePage(){
  const router = useRouter();
  const demodata:Resume = await getData()
const contacts = [
  {Icons : BsFillTelephoneFill, info:demodata.phone_number,link:`tel:${demodata.phone_number}`},
  {Icons : MdEmail , info:demodata.email,link:`mailto:${demodata.email}`},
  {Icons : IoLocationSharp , info:`${demodata.city} ,${demodata.country}`,link:'#'},
  {Icons : LiaLinkedinIn , info:demodata.linkedin,link:demodata.linkedin},
  {Icons :  BiSolidContact, info:'portfolio',link:demodata.portfolio_link}

]
function getDuration(start:string , end:string){
  const startdate = new Date(start);
  const endDate = new Date(end);

const formattedStartDate = startdate.toLocaleDateString('en-US',{day:"numeric", month:"short"});
const formattedEndDate = endDate.toLocaleDateString('en-US', {day:"numeric" , month:"short"});

const formattedDateRange = `${formattedStartDate} - ${formattedEndDate}`;
return formattedDateRange ; 
}
  return (
  <>
    <div className="
    border
     bg-white 
     rounded-sm
     md:mx-[15%]
     
     ">
      {/* Name */}
        <Name firstName={demodata.first_name} 
           lastName = {demodata.last_name}/>

        {/* Title */}
        <Title title={demodata.profession} />
        {/* Wrapper */}
        <div className=" flex mx-3 gap-2 mt-3">
          {/* sidebar */}
          <SideContent>
            <Box>
              <ul className="flex 
              flex-col
              items-start
              space-y-4
              mb-3
              ">
                {
                  contacts.map(contact=> <li key={contact.info} className="flex
                   justify-center items-center
                    gap-3
                    text-pink-500
                    cursor-pointer
                    "
                    onClick={()=>{
                      router.push(`${contact.link}`)
                    }}>
                      {<contact.Icons
                      className="text-pink-600 "/>}{contact.info}
                  </li>)
                }
              </ul>
            </Box>

            <Box>
              <h1 className=" text-xl font-bold ">SUMMARY</h1>
                <p className=" line leading-7 my-3">
                  {demodata.summary}
              </p>
            </Box>
            <Box className="gap-4">
              <h1 className=" text-xl font-bold ">KEY SKILLS</h1>
                  {
                    demodata.skills.map(skill => <ul className="space-y-2" key={skill.skills_id}>
                      {  skill.technical_skills
                            .split(",")
                            .map(nonTech => <li key={nonTech}>
                              {
                                nonTech
                              }
                      </li>)}
                    </ul>)
                  }
            </Box>

            <Box className="gap-4">
              <h1 className=" text-xl font-bold ">TECHNICAL SKILLS</h1>
                  {
                    demodata.skills.map(skill => <ul className="space-y-2 flex flex-wrap items-center space-x-2" key={skill.skills_id}>
                      <h5 className="font-bold pt-2">Languges :{" "}</h5>
                      {  skill.non_technical_skills
                            .split(",")
                            .map(nonTech => <li key={nonTech}>
                              {
                                nonTech
                              }
                      </li>)}
                    </ul>)
                  }
            </Box>

          </SideContent>
          <MainContent>
          <h1 className="text-2xl 
            font-bold px-8 ">
              {"PROFESSIONAL EXPERIENCE"}
              </h1>
              {
                demodata.work_experience.map((works)=><li className="list-none" key={works.work_id}>
                   <ContentBox
            key={works.work_id}
            location={works.company_location}
            subheading={works.company_name}
            title={works.job_title}
            duration={getDuration(works.start_date ,works.end_date)}
            description={works.Description}
            />
                </li>)
              }
              
              <h1 className="text-2xl 
            font-bold px-8 ">
              {"EDUCATION"}
              </h1>
              {
                demodata.education.map((edu)=><li className="list-none" key={edu.education_id}>
                   <ContentBox
            key={edu.education_id}
            location={edu.school_location}
            subheading={edu.degree}
            title={edu.school_name}
            duration={getDuration(edu.degree_start_date ,edu.degree_end_date)}
            description={edu.field_of_study}
            />
                </li>)
              }
              <h1 className="text-2xl 
            font-bold px-8 ">
              {"PROJECTS"}
              </h1>
              {
                demodata.projects.map((pro)=><li className="list-none" key={pro.project_id}>
                   <ContentBox
            key={pro.project_id}
            title={pro.project_name}
            description={pro.description}
            href={pro.project_link}
            />
                </li>)
              }
            <h1 className="text-2xl 
            font-bold px-8 ">
              {"CERTIFICATES"}
              </h1>
              {
                demodata.certificates.map((certificate)=><li className="list-none" key={certificate.certi_id}>
                   <ContentBox
           key={certificate.certi_id}
            title={certificate.certi_name}
            href={certificate.certi_link}
            duration={getDuration(certificate.certi_start_date , certificate.certi_end_date)}
            />
                </li>)
              }
            
          </MainContent>
          

        </div>
    </div>
   </>
  )
}
