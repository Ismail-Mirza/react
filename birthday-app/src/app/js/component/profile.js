import Image from './image';
import Name from './name';
import Age from './age';

const profile = ({imgUrl,profileName,age}) =>
{
    return <>
        <div className="profile flex">
             <Image imgUrl={imgUrl}></Image>
             <div className="nameContainer">
                 <Name name={profileName}></Name>
                 <Age age={age}></Age>
             </div>
        </div>
    
    </>;
}
export default profile;