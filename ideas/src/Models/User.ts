import Idea from './Idea';
import Comment from './Comment';
class User {
  /* tslint:disable */
  id: number;
  provider: string;
  uid: string;
  name: null;
  nickname: null;
  image: null;
  email: string;
  created_at: Date;
  updated_at: Date;
  comments: Comment[];
  ideas: Idea[];
  /* tslint:enable */
}

export default User;