import type { Schema, Struct } from '@strapi/strapi';

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'education';
    icon: 'book';
  };
  attributes: {
    branch: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'experience';
    icon: 'grid';
  };
  attributes: {
    company: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    role: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    workSummary: Schema.Attribute.RichText;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    description: '';
    displayName: 'skills';
    icon: 'code';
  };
  attributes: {
    database: Schema.Attribute.String;
    framework: Schema.Attribute.String;
    language: Schema.Attribute.String;
    tool: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'skills.skills': SkillsSkills;
    }
  }
}
