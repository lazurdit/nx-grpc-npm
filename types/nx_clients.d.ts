import { AppInfoServiceClient } from '../nx_types/info_grpc_pb';
import { NxAccountNodeServiceClient } from '../nx_types/erp/acct_grpc_pb';
import { AuthorizeServiceClient } from '../nx_types/auth_grpc_pb';
/**Gets the authorize service client
 * @function getAuthorizeServiceClient
 * @param token token
 * @returns authorize service client
 */
export declare const createAuthorizeServiceClient: (token?: string) => AuthorizeServiceClient;
/**Gets the app info service client
 * @function getAppInfoServiceClient
 * @param token token
 * @returns app info service client
 */
export declare const createAppInfoServiceClient: (token?: string) => AppInfoServiceClient;
/**Gets the account node service client
 * @function getAccountNodeServiceClient
 * @param token token
 * @returns account node service client
 */
export declare const createNxAccountNodeServiceClient: (token?: string) => NxAccountNodeServiceClient;
