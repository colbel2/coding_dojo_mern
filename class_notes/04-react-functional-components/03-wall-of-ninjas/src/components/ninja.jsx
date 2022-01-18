import React from 'react';

const Ninja =(props)=>{
    return (
        <form>
            <div className="form-group">
                <label htmlFor="">Ninja Name:</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Image Url:</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color:</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <input type="submit" value="Create Ninja!" />
        </form>
    )
}

export default Ninja;