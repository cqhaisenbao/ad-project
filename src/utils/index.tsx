const getUrlParam = (name: string) => {
    const query = window.location.search.substring(1);
    const paramArr = query.split('&');
    for (let i = 0; i < paramArr.length; i++) {
        const param = paramArr[i].split('=');
        if (param[0] === name) {
            return param[1];
        }
    }
    return '';
};

export default {
    getUrlParam,
};
