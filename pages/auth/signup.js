export default () => {
    return (
        <form>
            <h1>Sign up</h1>
            <div style={{ margin: '5px' }}>
                <div className="form-group">
                    <label htmlFor="">Email Address</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" />
                </div>
            </div>
            <button className="btn btn-primary">Signup</button>
        </form>
    )
}