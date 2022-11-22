import React from 'react';
import Userheader from './Header';

function Userlogin() {
    return (
        <>
            <Userheader />
            <div className='user-login'>
                <div>
                    <form>
                        <input type={'text'} placeholder={'Email address/Employee Id'} id="username" />
                        <p></p>
                        <input type={'password'} placeholder={'Password'} id="password" />
                        <p></p>
                        <div className='forget-psw'>
                            <a
                                href='#'
                            >
                                Forget password?
                            </a>
                            <span className='contact-admin'>Contact Admin</span>
                        </div>
                    </form>
                    <button type='submit' id='login-btn'>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Userlogin;