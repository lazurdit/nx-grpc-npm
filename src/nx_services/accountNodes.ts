import { ResponseStatus } from '../nx_types/common_pb';
import { NxAccountNodeServiceClient } from '../nx_types/erp/acct_grpc_pb';
import {
    NewSuspectNumberRequest,
    NprAccountGroupTreeRequest,
    NprAccountIsUsedCheckRequest,
    NprAccountNodeAddRequest,
    NprAccountNodeByCodeOrNumberRequest,
    NprAccountNodeByCodeRequest,
    NprAccountNodeDeleteRequest,
    NprAccountNodeListRequest,
    NprAccountNodeListResponse,
    NprAccountNodeRecordResponse,
    NprAccountNodeSearchRequest,
    NprAccountNodeSearchResponse,
    NprAccountNodeUpdateRequest,
    NprItemUseValidationResult,
    NprSuspectNumberResponse
} from '../nx_types/erp/acct_pb';

/**Handles Account Node services required in NX Server */

export class NxAccountNodeServices {
    /**
     * gets all groups as tree
     * @function getAllGroupsAsTree
     * @param client account node service client
     * @param request account group tree request message
     * @returns account group tree response message
     */
    public static getAllGroupsAsTree = (
        client: NxAccountNodeServiceClient,
        request: NprAccountGroupTreeRequest
    ): Promise<NprAccountNodeListResponse> =>
        new Promise<NprAccountNodeListResponse>((resolve, reject) =>
            client.getAllGroupsAsTree(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**Gets the account nodes from the server
     * @function getAccountNodes
     * @param client account node service client
     * @param request account node list request message
     * @returns account node list response message
     */
    public static getAccountNodes = (
        client: NxAccountNodeServiceClient,
        request: NprAccountNodeListRequest
    ): Promise<NprAccountNodeListResponse> =>
        new Promise<NprAccountNodeListResponse>((resolve, reject) =>
            client.getAccountNodes(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**Checks if the account node is used
     * @function checkIfAccountIsUsed
     * @param client account node service client
     * @param request account node is used check request message
     * @returns account node is used check response message
     */
    public static checkIfAccountIsUsed = (
        client: NxAccountNodeServiceClient,
        request: NprAccountIsUsedCheckRequest
    ): Promise<NprItemUseValidationResult> =>
        new Promise<NprItemUseValidationResult>((resolve, reject) =>
            client.checkIfAccountIsUsed(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /** Gets the account node by code
     * @function getAccountNodeByCode
     * @param client account node service client
     * @param request  account node by code request message
     * @returns  account node by code response message
     */
    public static getAccountNodeByCode = (
        client: NxAccountNodeServiceClient,
        request: NprAccountNodeByCodeRequest
    ): Promise<NprAccountNodeListResponse> =>
        new Promise<NprAccountNodeListResponse>((resolve, reject) =>
            client.getAccountNodeByCode(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**gets the account node by code or number
     * @function getAccountNodeByCodeOrNumber
     * @param client account node service client
     * @param request account node by code or number request message
     * @returns account node by code or number response message
     */
    public static getAccountNodeByCodeOrNumber = (
        client: NxAccountNodeServiceClient,
        request: NprAccountNodeByCodeOrNumberRequest
    ): Promise<NprAccountNodeListResponse> =>
        new Promise<NprAccountNodeListResponse>((resolve, reject) =>
            client.getAccountNodeByCodeOrNumber(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**deletes the account node full structure
     * @function deleteAccountNode
     * @param client account node service client
     * @param request account node delete request message
     * @returns account node delete response message
     */
    public static deleteAccountNodeFullStructure = (
        client: NxAccountNodeServiceClient,
        request: NprAccountNodeDeleteRequest
    ): Promise<ResponseStatus> =>
        new Promise<ResponseStatus>((resolve, reject) =>
            client.deleteAccountNodeFullStructure(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**gets the account node by code
     * @function getAccountNodeByCode
     * @param client account node service client
     * @param request account node by code request message
     * @returns account node by code response message
     */
    public static getNewSuspectNumber = (
        client: NxAccountNodeServiceClient,
        request: NewSuspectNumberRequest
    ): Promise<NprSuspectNumberResponse> =>
        new Promise<NprSuspectNumberResponse>((resolve, reject) =>
            client.getNewSuspectNumber(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**searchs the account node by code
     * @function searchAccountNode
     * @param client account node service client
     * @param request account node search request message
     * @returns account node search response message
     */
    public static searchAccountNodes = (
        client: NxAccountNodeServiceClient,
        request: NprAccountNodeSearchRequest
    ): Promise<NprAccountNodeSearchResponse> =>
        new Promise<NprAccountNodeSearchResponse>((resolve, reject) =>
            client.searchAccountNodes(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**adds the account node
     * @function addAccountNode
     * @param client account node service client
     * @param request account node add request message
     * @returns account node add response message
     */
    public static addNewAccountNode = (
        client: NxAccountNodeServiceClient,
        request: NprAccountNodeAddRequest
    ): Promise<NprAccountNodeRecordResponse> =>
        new Promise<NprAccountNodeRecordResponse>((resolve, reject) =>
            client.addNewAccountNode(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    /**updates the account node
     * @function updateAccountNode
     * @param client account node service client
     * @param request account node update request message
     * @returns account node update response message
     */
    public static updateAccountNode = (
        client: NxAccountNodeServiceClient,
        request: NprAccountNodeUpdateRequest
    ): Promise<NprAccountNodeRecordResponse> =>
        new Promise<NprAccountNodeRecordResponse>((resolve, reject) =>
            client.updateAccountNode(request, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );
}
