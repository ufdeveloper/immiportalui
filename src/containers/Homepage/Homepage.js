import {useOktaAuth} from '@okta/okta-react';
import React, {useState, useEffect} from 'react';
import {Button, Header} from 'semantic-ui-react';

const Homepage = () => {
    const {authState, authService} = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            authService.getUser().then((info) => {
                setUserInfo(info);
            });
        }
    }, [authState, authService]); // Update if authState changes

    const login = async () => {
        authService.login('/');
    };

    const resourceServerExamples = [
        {
            label: 'Node/Express Resource Server Example',
            url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server',
        },
        {
            label: 'Java/Spring MVC Resource Server Example',
            url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server',
        },
    ];

    if (authState.isPending) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            <div>
                <Header as="h1">PKCE Flow w/ Okta Hosted Login Page</Header>

                {authState.isAuthenticated && !userInfo
                && <div>Loading user information...</div>}

                {authState.isAuthenticated && userInfo
                && (
                    <div>
                        <p>
                            Welcome back,
                            {userInfo.name}
                            !
                        </p>
                        <p>
                            You have successfully authenticated against your Okta org, and have been redirected back to
                            this application. You now have an ID token and access token in local storage.
                            Visit the
                            {' '}
                            <a href="/profile">My Profile</a>
                            {' '}
                            page to take a look inside the ID token.
                        </p>
                        <h3>Next Steps</h3>
                        <p>Currently this application is a stand-alone front end application. At this point you can use
                            the access token to authenticate yourself against resource servers that you control.</p>
                        <p>This sample is designed to work with one of our resource server examples. To see access token
                            authentication in action, please download one of these resource server examples:</p>
                        <ul>
                            {resourceServerExamples.map((example) => <li key={example.url}><a
                                href={example.url}>{example.label}</a></li>)}
                        </ul>
                        <p>
                            Once you have downloaded and started the example resource server, you can visit the
                            <a href="/messages">My Messages</a>
                            {' '}
                            page to see the authentication process in action.
                        </p>
                    </div>
                )}

                {!authState.isAuthenticated
                && (
                    <div>
                        <p>If you&lsquo;re viewing this page then you have successfully started this React
                            application.</p>
                        <p>
                            <span>This example shows you how to use the </span>
                            <a href="https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react">Okta React
                                Library</a>
                            <span> to add the </span>
                            <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">PKCE Flow</a>
                            <span> to your application.</span>
                        </p>
                        <p>
                            When you click the login button below, you will be redirected to the login page on your Okta
                            org.
                            After you authenticate, you will be returned to this application with an ID token and access
                            token. These tokens will be stored in local storage and can be retrieved at a later time.
                        </p>
                        <Button id="login-button" primary onClick={login}>Login</Button>
                        <a href="https://dev-565937.okta.com/oauth2/v1/authorize?idp=0oajc3cxuyawcWgNZ4x6&client_id=0oajate0bv79bWV7P4x6&response_type=token&response_mode=fragment&scope=openid email profile&redirect_uri=http://localhost:3000/implicit/callback&state=state&nonce=nonce"
                           id="login-fb" primary>Login With Facebook</a>
                    </div>
                )}

            </div>
        </div>
    );
};
export default Homepage;