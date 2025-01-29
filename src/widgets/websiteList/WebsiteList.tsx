import classes from "./_websiteList.module.scss";
import WebsiteItem from "../websiteItem/WebsiteItem.tsx";
import Posts from '/WebsitePosts.png'
import ToDos from '/WebsiteToDo.png'
import Bot from '/DiscordPollBot.png'
import Test from '/test.png'
import Silently from '/Silently.png'
import TodosBackEnd from '/TodosBackEnd.png'
import ProjectHermes from '/ProjectHermes.png'
import ChatApp from '/ChatApp.png'
const WebsiteList = () => {

    const websites = [
        {img: Bot,href:"https://github.com/Recollectionss/Confero",title:"Confero (discord voting bot)", alt: "Confero (discord voting bot)"},
        {img: ChatApp,href:"https://github.com/chatapp-dev/chat_backend/tree/dev",title:"Chat", alt: "Chat - app"},
        {img: Test,href:"https://github.com/Recollectionss/oop-3course/tree/main/lab-3",title:"Blue ship(Sea battle)", alt: "Blue ship(Sea battle)"},
        {img: TodosBackEnd ,href:"https://github.com/Recollectionss/to_do_list_backend",title:"To-Do list (server side)", alt: "To-Do list (server side)"},
        {img: ProjectHermes ,href:"https://github.com/Recollectionss/project_hermes",title:"Project hermes", alt: "To-Do list (server side)"},
        {img: Silently,href:"https://github.com/Recollectionss/Silently/tree/DeveloperVersion",title:"Silently(To-Do app with rpg system)", alt: "Silently(To-Do app with rpg system)"},
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