import avatar from '../assets/images/img_avatar.png';
function UserCard({user}) {
    return (
        <a
            className={'card'}
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer">
            <div className={'card-info'}>
                <h3>{user.username}</h3>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.number}</span>
                <span>{user.company.name}</span>
            </div>
            <img src={ avatar } alt=""/>
        </a>
    )
}
export default UserCard;