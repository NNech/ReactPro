import React from "react";
import Repo from "./Repo";

function RepoList(props) {
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index) => {
                return <Repo key={repo.id} index={index} repo={repo} />;
            })}
        </ul>
    );
}

export default RepoList;
