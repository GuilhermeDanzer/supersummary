import axiosInstance from './api'

export async function getBooks(listName = 'hardcover-fiction', offset = 0) {
  try {
    const response = await axiosInstance.get(
      `/lists/current/${listName}.json`,
      `offset=${offset}`
    )

    const data = response.data.results

    return data
  } catch (error) {
    console.error('Error fetching books:', error)
    throw error
  }
}

export async function getBooksList() {
  try {
    const response = await axiosInstance.get('lists/names.json')
    const { results } = response.data

    return results
  } catch (error) {
    console.error('Error fetching list:', error)
    throw error
  }
}
