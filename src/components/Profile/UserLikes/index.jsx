import { useEffect, useState } from 'react'
import AxiosUser from '../../../axios/UserAxios';

const UserLikes = ({user, token}) => {
  const [likes, setLikes] = useState([]);

    useEffect(() => {
        const getSpecificUserData = async () => {
          try {
            const data = await AxiosUser.get(
              `/social/posts/likes/user/${user.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setLikes(data.data.results);
            console.log(data.data.results)
          } catch (error) {
            console.log(error);
          }
        };
        getSpecificUserData();
      }, []);

return (
    <>
    </>
)
}

export default UserLikes