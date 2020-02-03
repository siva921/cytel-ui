export const getStudies = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e5a5850257f248619de88dac82c56308`
    const result = await fetch(url, {
        method: 'GET',
    })
    if (result.ok) {
        return result.json()
    } else {
        throw new Error('Api failure')
    }
}
