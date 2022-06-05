<form onSubmit={(event) => {
props.readMore(event, msa)}}>
<input type="text" onChange={props.msa.newCase} placeholder={msa.case}/>
</form>
