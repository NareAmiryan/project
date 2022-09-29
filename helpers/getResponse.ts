// interface Body{
//     data: Array<object>,
//     error: number
// };

export const getResponse = (body, statusCode:number) : object => {
    const {data = {}, error = '' } = body

    const config:object = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
    }

    if(statusCode !== 200){
        return {
            statusCode,
            body: JSON.stringify({
                error
            }),
            ...config
        }
    }

    return {
        statusCode,
        body: JSON.stringify({
            data: data
        }),
        ...config
    }
};

