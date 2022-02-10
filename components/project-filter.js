export default function ProjectFilter(props){
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>並べ替え: </label>
      <select value={props.sort} onChange={e => props.onSortChange(e.target.value)}>
        <option value='recommend'>おすすめ順</option>
        <option value='date-descending'>新しい順</option>
        <option value='date-ascending'>古い順</option>
      </select>
    </form>
  )
}
