import { useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { getCountryData } from "../query";
import Result from './Result';
import Loading from './Loading';
import Error from './Error';

const Content = () => {
    const [value, setValue] = useState("");
    const [getCountry, { data, loading, error }] = useLazyQuery(getCountryData);
    const [errorMsg, setErrorMsg] = useState();

    const handleChange = (e) => {
        let text = e.target.value;
        let lastChar = text.length - 1;
        setValue(text.toUpperCase());
        if ((text.charCodeAt(lastChar) >= 65 && text.charCodeAt(lastChar) <= 90) ||
            (text.charCodeAt(lastChar) >= 97 && text.charCodeAt(lastChar) <= 122) ||
            !text.length) {
            setErrorMsg(null);
        } else {
            setErrorMsg("*Country code should contain only letters");
            return;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length !== 2) {
            setErrorMsg("*Country code should be two letters");
            return;
        }
        getCountry({ variables: { code: value } });
        setValue("");
    }

    
    return (
        <div className="content">
            <div className="searchField">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            maxLength='2'
                            value={value}
                            onChange={handleChange}
                            placeholder="Counrty Code"
                        >
                        </input>
                        <button type='submit'
                        >Find
                        </button>
                        <p className='errorMsg'>
                            {errorMsg}
                        </p>
                    </form>
                </div>
            </div>
            <div className='result'>
                <div className="container">

                    {
                        loading ?
                            <Loading />
                            : null
                    }
                    {
                        data && data.country ?
                            <Result data={data} />
                            : null
                    }
                    {
                        data && !data.country ?
                            <Error message="Country not found" />
                            : null
                    }
                    {
                        error ?
                            <Error message={error.message} />
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Content;