import UserCard from '../components/UserCard.jsx'
import { useState, useEffect} from 'react'
function UsersList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(res => res.json()).
        then(data => setUsers(data)).
        catch(err => console.log(err)).
        finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return(
        <ul className={'list-group'}>
            {users.map(user =>
                (<li key={user.id}>
                    <UserCard user={user} />
                </li>)
            )}
        </ul>
    )
}
export default UsersList;