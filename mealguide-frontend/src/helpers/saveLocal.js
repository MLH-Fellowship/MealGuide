import axios from 'axios';

const saveLocal = async (email, api, name) => {
    axios.post(api, {
    email: email
})
.then(function (response) {
    const serverData = response.data;
    if (localStorage.users || localStorage.recomendations) {
        const dub = localStorage.getItem('dub');
        const dubCheck = JSON.stringify(serverData[serverData.length-1])
        if (dub !== dubCheck) {
            const dublicateChecker = JSON.stringify(serverData[serverData.length-1])
            localStorage.setItem('dub', JSON.stringify(dublicateChecker));
            localStorage.setItem(name, JSON.stringify(serverData));
            console.log("finished")
        }
    } else {
        localStorage.setItem(name, JSON.stringify(serverData));
    }
})
.catch(function (error) {
    console.log(error);
});
}

export default saveLocal;