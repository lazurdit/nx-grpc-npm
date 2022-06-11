import { AuthRequestMessage, AuthResponseMessage } from '../nx_types/auth_pb';
import { AuthorizeServiceClient } from '../nx_types/auth_grpc_pb';

/**Handles Auth services required in NX Server */

export class NxAuthServices {
    /**Gets the token from the server
     * @function getToken
     * @param client authorize service client
     * @param request auth request message
     * @returns auth response message
     */
    public static getToken = (client: AuthorizeServiceClient, request: AuthRequestMessage): Promise<AuthResponseMessage> =>
        new Promise<AuthResponseMessage>((resolve, reject) =>
            client.getToken(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );
}
