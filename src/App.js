import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import useStyles from './styles.js';

import NewsCards from "./components/NewsCards/NewsCards";

const alankey ='781850a6b72e538fbd5d3544e3631a7e2e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    const classes= useStyles();

    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                } else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle +1);
                }
            }
        })
    },[])

    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://i.ibb.co/qygzDzL/Alan.png" className={classes.alanLogo} alt="alan logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}

export default App;
