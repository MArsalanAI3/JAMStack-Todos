const React = require('react');
const useEffect = require('react');
const useState = require('react');
const netlifyIdentity = require('netlify-identity-widget');


const IdentityContext = React.createContext({});

exports.IdentityContext = IdentityContext

const identityProvider = props => {

    const [user, setUser] = useState();

    useEffect(() => {
        netlifyIdentity.init({});
    });

    netlifyIdentity.on("login", user => {
        netlifyIdentity.close();
        setUser(user);
    });

    netlifyIdentity.on("logout", () => {
        netlifyIdentity.close();
        setUser();

    })


    return (
        <IdentityContext.provider value={{ identity: netlifyIdentity, user: undefined }}>
            {props.children}
        </IdentityContext.provider>
    )

}
exports.Provider = identityProvider;