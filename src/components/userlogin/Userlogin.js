import React from 'react';
import Userheader from './Header';

function Userlogin() {
    return (
        <>
            <Userheader />
            <div className='user-login'>
                <div>
                    <form>
                        <input type={'text'} placeholder={'Email address/Employee Id'} />
                        <p></p>
                        <input type={'password'} placeholder={'Password'} />
                        <p></p>
                        <div>
                            <a
                                href='#'
                            >
                                Forget password?
                            </a>
                            <span>Contact Admin</span>
                        </div>
                    </form>
                    <button>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Userlogin;