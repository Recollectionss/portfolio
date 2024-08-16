import classes from "./_websiteList.module.scss";
import WebsiteItem from "../websiteItem/WebsiteItem.tsx";
const WebsiteList = () => {

    const websites = [
        {img:'',href:"https://github.com/Observersss/Netflix-clone",title:"Netflix clone", alt: "Clone"},
        // {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        // {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        // {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        // {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        // {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        // {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
        // {img:NetflixClone,href:"https://observersss.github.io/Netflix-clone/",title:"Netflix clone"},
    ];

    return (
        <div className={classes.websiteList}>
            {websites.map((website,index) =>
                <WebsiteItem key={index} img={website.img} title={website.title} href={website.href} alt={website.alt}/>
            )}
        </div>
    );
};

export default WebsiteList;