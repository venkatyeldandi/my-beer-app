import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router';
import './LoginPage.css';

function LoginPage() {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <div className='Title-description'>
                <h1 className="login-title">Beer Glossary</h1>
                <p>Look for the beer you need!</p>
            </div>
            <div className="container">
                <form>
                    <label>
                        Email:
                        <input type="text" placeholder='Enter Your EMAILID' />
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder='Enter your Password' />
                    </label>
                    {isLoggedIn ? (
                        <button onClick={() => {navigate('/'); }}>Logout</button>
                    ) : (
                        <button onClick={() => {navigate('/Beers'); }}>Login</button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;

