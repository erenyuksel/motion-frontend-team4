import { useEffect, useState } from 'react'
import AxiosUser from '../../../axios/UserAxios';

const UserFollowers = ({user, token}) => {

    const [followers, setFollowers] = useState([]);


    useEffect(() => {
        const getSpecificUserData = async () => {
          try {
            const data = await AxiosUser.get(
              `/social/followers/followers/user/${user.id}/`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setFollowers(data.data.results);
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

export default UserFollowers