import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Note({title, content,onDelete,id}) {
    return(
        <div className = 'note'>
<h1>{title}</h1>

<p> {content}</p>
<button onClick={() =>onDelete(id)}>
<DeleteForeverIcon />
</button>
        </div>

    );
}
