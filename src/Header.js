import classes from './Header.module.css';
const header = () => {
    return(
        <div className={classes.maindiv}>
            <div className={classes.subdiv}>
                <div className={classes.b1}>
                    zomato
                </div>
                <div className={classes.b2}>
                    search bar
                </div>
                <div className={classes.b3}>
                    <div className={classes.b31}>
                        <button>Login</button>
                    </div>
                    <div className={classes.b32}>
                        <button>sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default header;