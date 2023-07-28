export interface Resume{
    first_name:      string;
    last_name:       string;
    resume_name:     string;
    level:           string;
    profession:      string;
    email:           string;
    phone_number:    string;
    city:            string;
    country:         string;
    pincode:         string;
    github:          string;
    twitter:         string;
    linkedin:        string;
    portfolio_link:  string;
    languages:       string;
    summary:         string;
    accomplishment:  string;
    education:       Education[];
    work_experience: WorkExperience[];
    projects:        Project[];
    skills:          Skill[];
    certificates:    Certificate[];
}

export interface Certificate {
    certi_id:           number;
    certi_name:         string;
    certi_link:         string;
    certi_start_date:   string;
    certi_end_date:     string;
    currently_pursuing: number;
}

export interface Education {
    education_id:        number;
    school_name:         string;
    school_location:     string;
    degree:              string;
    field_of_study:      string;
    degree_start_date:   string;
    degree_end_date:     string;
    current_attend_here: number;
}

export interface Project {
    project_id:   number;
    project_name: string;
    project_link: string;
    description:  string;
}

export interface Skill {
    skills_id:            number;
    top_technical_skills: string;
    technical_skills:     string;
    non_technical_skills: string;
    softwares:            string;
}

export interface WorkExperience {
    work_id:             number;
    job_title:           string;
    company_name:        string;
    company_location:    string;
    start_date:          string;
    end_date:            string;
    Description:         string;
    currently_work_here: number;
}
