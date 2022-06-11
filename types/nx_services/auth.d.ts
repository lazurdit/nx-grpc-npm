import { AuthRequestMessage, AuthResponseMessage } from '../../nx_types/auth_pb';
import { AuthorizeServiceClient } from '../../nx_types/auth_grpc_pb';
/**Handles Auth services required in NX Server */
export declare class NxAuthServices {
    /**Gets the token from the server
     * @function getToken
     * @param client authorize service client
     * @param request auth request message
     * @returns auth response message
     */
    static getToken: (client: AuthorizeServiceClient, request: AuthRequestMessage) => Promise<AuthResponseMessage>;
}
