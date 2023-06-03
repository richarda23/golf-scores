import useSWR from 'swr';

export default function Users() {
    const reqres = 'https://reqres.in/api/users?delay=3'
    const fetcher = (...args) => fetch(args).then(res => res.json())

    const { data, error, isLoading } = useSWR(reqres, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    if (data) {
        return (
            <div>
                {data.page}
                <ul>
                    {data.data.map((u) => (
                        <li key={u.id}>{u.first_name} {u.last_name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}