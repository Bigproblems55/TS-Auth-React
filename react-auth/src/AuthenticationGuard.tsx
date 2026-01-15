//AuthenticationGuard.tsx
import type { ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const withAuthGuard = (component: ComponentType): ComponentType =>
    withAuthenticationRequired(component, {
        onRedirecting: () => <div>Redirecting you to the login page...</div>,
    });

export default withAuthGuard;
