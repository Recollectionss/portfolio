import classes from "./_websiteList.module.scss";
import WebsiteItem from "../websiteItem/WebsiteItem.tsx";
import NetflixClone from '../../../public/NetflixClone.png'
const WebsiteList = () => {

    const websites = [
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
    ];

    return (
        <div className={classes.websiteList}>
            {websites.map((website,index) =>
                <WebsiteItem key={index} img={website.img} title={website.title} href={website.href}/>
            )}
        </div>
    );
};

export default WebsiteList;