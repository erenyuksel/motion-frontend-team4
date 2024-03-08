import { useEffect, useState } from 'react'
import AxiosUser from '../../../axios/UserAxios';

const UserFollowing = ({user, token}) => {
  const [following, setFollowing] = useState([]);

    useEffect(() => {
        const getSpecificUserData = async () => {
          try {
            const data = await AxiosUser.get(
              `/social/followers/following/user/${user.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setFollowing(data.data.results);
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

export default UserFollowing