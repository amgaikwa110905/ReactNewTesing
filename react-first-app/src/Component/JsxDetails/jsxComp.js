
const jsxComp = ()=>{
    let p=10,q=20;
    return(
        <div>
            <h2>
                Welcome to Jsx Components.
            </h2>
            <h2>Addition of numbers : {p+q}</h2>
            <h4>
                {p>30 ? 'p is greater than 30':'P is smaller than 30'}
            </h4>
        </div>
    )
}

export default jsxComp;