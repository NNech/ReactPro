import React, { useEffect, useState } from "react";
import { fetchPopularRepos } from "../api";
import RepoList from "./RepoList";
import Tabs from "./Tabs";
import Loader from "./Loader";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Pyton"];

function Popular() {
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const selectedLanguageParam = params.get("tab");
        setSelectedLanguage(selectedLanguageParam || "All");
    }, []);

    useEffect(() => {
        setIsLoading(true);
        fetchPopularRepos(selectedLanguage)
            .then((data) => setRepos(data))
            .finally(() => setIsLoading(false));
    }, [selectedLanguage]);

    const onTabClick = (selectedLanguage) => {
        setSelectedLanguage(selectedLanguage);
        const params = new URLSearchParams(window.location.search);
        params.set("tab", selectedLanguage);
        window.history.pushState(
            {},
            "",
            `${window.location.pathname}?${params}`
        );
    };

    return (
        <div>
            <Tabs
                languages={languages}
                onTabClick={onTabClick}
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
            />
            {isLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <RepoList repos={repos} />
            )}
        </div>
    );
}

export default Popular;
