export const getUsers = async () => {
    const users = await fetch("http://localhost:3001/user")
    return users.json()
}
