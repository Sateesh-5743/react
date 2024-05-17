import classes from './Login.module.css';
const login = () => {
    return(
        <div className={classes.login}>
            <div className={classes.container}>
                <div className={classes.div1}>
                    <div className={classes.div31}>
                        Login
                    </div>
                    <div className={classes.div32}>
                        <button className={classes.btn}>x</button>
                    </div>
                </div>
                <div className={classes.div2}>
                    <div className={classes.div21}>

                    </div>
                    <div className={classes.div22}>
                        |
                    </div>
                    <div className={classes.div23}>
                        <input type="number" className={classes.divin}/>
                    </div>
                </div>
                <div className={classes.div3}>
                    Send One Time Password
                </div>
                <div className={classes.div4}>
                    or
                </div>
                <div className={classes.div5}>
                    <div className={classes.email}>

                    </div>
                    <div className={classes.email1}>
continue with email
                    </div>
                </div>
                <div className={classes.div6}>
                    <div className={classes.goo}>

                    </div>
                    <div className={classes.goo1}>
sign in with google
                    </div>
                </div>
                <div className={classes.div7}>
                    
                </div>
                <div className={classes.div8}>
                    
                </div>
            </div>
        </div>
    );
}
export default login;