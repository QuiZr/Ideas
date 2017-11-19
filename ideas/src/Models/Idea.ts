class Idea {
   /* tslint:disable */ 
  created_at: Date;
  desc_long: string;
  desc_short: string;
  id: number;
  status: 'idea' | 'problem' | 'doing' | 'done';
  title: string;
  updated_at: Date;
  user_id: number;
   /* tslint:enable */ 
}

export default Idea;