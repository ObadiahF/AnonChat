export const load = ({ fetch, params }) => {

    const fetchUsers = async (roomName, roomPassword) => {
        const res = await fetch('http://localhost:8080/users');
        const data = await res.json();
        return data;
    }

    return {

    }
}