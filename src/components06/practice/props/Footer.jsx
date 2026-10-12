const Footer = ({ dark, setDark }) => {
    return (
        <div className={`footer ${dark ? 'black':'gary'}`}>
            <button onClick={()=>setDark(!dark)}>
                {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}
export default Footer