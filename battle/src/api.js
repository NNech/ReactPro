import axios from "axios";

const handleError = (error) => console.error(error);

const getProfile = async (userName) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${userName}`
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        handleError(error);
    }
};

const getRepos = async (userName) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${userName}/repos?per_page=100`
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        handleError(error);
    }
};

const getStarCount = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return followers * totalStars;
};

const getUserData = async (userName) => {
    try {
        const [profile, repos] = await Promise.all([
            getProfile(userName),
            getRepos(userName),
        ]);

        if (profile && repos) {
            return {
                profile,
                score: calculateScore(profile, repos),
            };
        }
    } catch (error) {
        handleError(error);
    }
};

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export const battle = async (players) => {
    try {
        const battleResult = await Promise.all(players.map(getUserData));

        if (battleResult) {
            return sortPlayers(battleResult);
        }
    } catch (error) {
        throw Error(error);
    }
};

export const fetchPopularRepos = (language) => {
    const encodeURI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );
    return axios
        .get(encodeURI)
        .then((response) => response.data.items)
        .catch(handleError);
};
