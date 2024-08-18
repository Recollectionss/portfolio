import classes from "./_websiteList.module.scss";
import WebsiteItem from "../websiteItem/WebsiteItem.tsx";
import Posts from '/WebsitePosts.png'
import ToDos from '/WebsiteToDo.png'
const WebsiteList = () => {

    const websites = [
        {img:'',href:"https://github.com/Observersss/Netflix-clone",title:"Netflix clone", alt: "Clone"},
        {img:Posts,href:"https://observersss.github.io/test_react/",title:`Post (use JSONPLACEHOLDER)`, alt: "Website post"},
        {img: ToDos,href:"https://observersss.github.io/to-do-list/",title:"To-Do list", alt: "Website todos"},

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