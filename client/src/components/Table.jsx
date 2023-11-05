const Table = ({ children, attributes }) => {
    return (
        <div className="flex justify-center px-20 py-5">
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-slate-100">
                    <tr>
                        {attributes.map(item => (
                            <th scope="col" className="px-6 py-4" key={item.id}>{item.column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table