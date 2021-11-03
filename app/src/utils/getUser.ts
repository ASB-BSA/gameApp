import axios from 'axios';
import { UserJsonType } from '@/types/UserType';

const getUser = async () => {
  try {
    const res = await axios.get<UserJsonType>('/user');

    if (!(res.status >= 200 || res.status <= 299)) throw new Error('errorですよ！');
    
    return res.data;
  } catch(e) {
    console.log(e);
  }
}

export default getUser;