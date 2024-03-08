import { useEffect, useState } from 'react'
import AxiosUser from '../../../axios/UserAxios';

const UserFriends = ({user, token}) => {
  const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getSpecificUserData = async () => {
          try {
            const data = await AxiosUser.get(
              `/social/friends/user/${user.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setFriends(data.data.results);
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

export default UserFriends