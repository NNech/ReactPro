import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../api";
import Loader from "./Loader";
import PlayerPreview from "./PlayerPreview";

const Results = () => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        const getBattleResults = async () => {
            try {
                const players = await battle([
                    params.get("playerOneName"),
                    params.get("playerTwoName"),
                ]);

                if (players) {
                    setPlayers(players);
                }
            } catch (error) {
                throw Error(error);
            } finally {
                setIsLoading(false);
            }
        };
        getBattleResults();
    }, []);

    return (
        <div>
            <div className="row">
                <h2
                    className="header"
                    style={{ color: "red", fontWeight: "bold" }}
                >
                    Winner
                </h2>
                <h2 className="header" style={{ fontWeight: "bold" }}>
                    Loser
                </h2>
            </div>
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
                <div className="row">
                    {players.map((player) => (
                        <PlayerPreview
                            key={player.profile.id}
                            avatar={player.profile.avatar_url}
                            userName={player.profile.login}
                        >
                            <div className="column">
                                <p style={{ fontWeight: "bold" }}>
                                    Score: {player.score}
                                </p>
                                <ul>
                                    <li>name: {player.profile.name}</li>
                                    <li>location: {player.profile.location}</li>
                                    <li>comppany: {player.profile.company}</li>
                                    <li>
                                        followers: {player.profile.followers}
                                    </li>
                                    <li>
                                        following: {player.profile.following}
                                    </li>
                                    <li>
                                        public repos:
                                        {player.profile.public_repos}
                                    </li>
                                    <li>blog: {player.profile.blog}</li>
                                </ul>
                            </div>
                        </PlayerPreview>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Results;
