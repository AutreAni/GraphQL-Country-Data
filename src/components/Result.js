const Result = ({ data }) => {
    if (data) console.log(data)
    return (
        <div className='country-data'>
            <div className='data-field'>
                <span className='field-name'>Name</span>
                <span>{data.country.name}</span>
            </div>
            <div className='data-field'>
                <span className='field-name'>Native</span>
                <span>{data.country.native}</span>
            </div>
            <div className='data-field'>
                <span className='field-name'>Capital</span>
                <span>{data.country.capital}</span>
            </div>
            <div className='data-field'>
                <span className='field-name'>Flag</span>
                <span className="emoji">{data.country.emoji}</span>
            </div>
            <div className='data-field'>
                <span className='field-name'>Currency</span>
                <span>{data.country.currency}</span>
            </div>
            <div className='data-field'>
                <span className='field-name'>Languages</span>
                <span className='languages'>
                    {data.country.languages.map((language, index) => {
                        return (
                            <span key = {index}>
                                {language.name}
                            </span>
                        )
                    })}
                </span>
            </div>
        </div>
    );
}

export default Result;