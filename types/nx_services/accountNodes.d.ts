import { NxAccountNodeServiceClient } from '../../nx_types/erp/acct_grpc_pb';
import { NprAccountNodeListRequest, NprAccountNodeListResponse } from '../../nx_types/erp/acct_pb';
/**Handles Account Node services required in NX Server */
export declare class NxAccountNodeServices {
    /**Gets the account nodes from the server
     * @function getAccountNodes
     * @param client account node service client
     * @param request account node list request message
     * @returns account node list response message
     */
    static getAccountNodes: (client: NxAccountNodeServiceClient, request: NprAccountNodeListRequest) => Promise<NprAccountNodeListResponse>;
}
