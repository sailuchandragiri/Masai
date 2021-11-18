export const TodoList = ({list, handleToggle}) => {
    return <div>
        {list.map((e) => (
        <p key={e.id}>
            {e.title} - {e.status ? "Done" : "Not Done"}
            <button
            onClick={() => {
                handleToggle(e.id);
            }}
            >change status</button></p>
        ))}
    </div>
}