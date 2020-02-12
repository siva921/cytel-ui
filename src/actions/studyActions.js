import getAPI from '../lib/Helper'

export const getStudies = async () => {
    const url = getAPI('getStudies')
    const result = await fetch(url, {
        method: 'GET',
    })
    if (result.ok) {
        console.log(result)
        return result.json()
    } else {
        throw new Error('Something went wrong')
    }
}
