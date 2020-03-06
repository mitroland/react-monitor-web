const storage_name = "fabelio_local_data"
export const set = (data) => {
    data = JSON.stringify(data)
    data = localStorage.setItem(storage_name, data)
    return  data
}

export const get = () => {
    let data = localStorage.getItem(storage_name)
    return data ? JSON.parse(data) : []
}

export const initalData = () => {
    let data = []
    return set(data)
}
