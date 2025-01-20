import axios from "axios";

const domain = 'https://share.shub.edu.vn/api/intern-test';

export const getApi = async () => {
    const res = await axios({
        method: "get",
        url: `${domain}/input`
    })

    return res.data;
}


export const postApi = async (token, result) => {
    const res = await axios({
        method: "post",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        url: `${domain}/output`,
        data: result

    })

    return res.data;
}