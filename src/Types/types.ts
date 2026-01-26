export interface Certification {
  id?: string;
  student_name_ar: string;
  student_name_en: string;
  course_name_ar: string;
  course_name_en: string;
  coach_name_ar: string;
  coach_name_en: string;
  number_of_hours: number;
  rate: string;
  score: string;
  start_date: string;
  end_date: string;
  release_date: string;
  created_at?: string;
}