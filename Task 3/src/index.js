import { getApi, postApi } from "./api.js"

const type1QueryProcessing = (data, left, right) => {
    if (left === right) return data[left];
    return data[left] + type1QueryProcessing(data, left + 1, right);
}

const type2QueryProcessing = (data, left, right) => {
    let result = 0;
    for (let i = 0; i <= right - left; i++) {
        if (i % 2 !== 1) {
            result += data[i + left];
        }
        else result -= data[i + left];
    }

    return result;
}

const process = async () => {
    try {
        const res = await getApi();
        const { token, data, query } = res;
        let result = [];

        for (let run of query) {
            if (run.type == "1") {
                result.push(type1QueryProcessing(data, run.range[0], run.range[1]));
            }
            else {
                result.push(type2QueryProcessing(data, run.range[0], run.range[1]));
            }
        }

        const check = await postApi(token, result);
        console.log(check);

    } catch (e) {
        console.log('error:', e.message);
    }

}

process();